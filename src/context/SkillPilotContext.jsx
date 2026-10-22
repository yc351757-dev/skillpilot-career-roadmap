import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { careers } from '../data/careers';
import { calculateRoadmapProgress, generateRoadmap } from '../services/recommendationEngine';

const STORE_KEY = 'skillpilot-v1';
const defaultCareer = careers.find(career => career.id === 'datascientist') || careers[0];
const defaultData = {
  profile: { name: 'Learner', education: 'BCA Student', targetCareer: defaultCareer.id, duration: 30, hoursPerDay: 2, preference: 'Practice Projects' },
  skillLevels: { python: 1, sql: 2, statistics: 1, pandas: 0, viz: 2, ml: 0, evaluation: 0, git: 1 },
  tasks: [],
  assessmentSaved: true
};

function loadInitial() {
  try {
    const saved = localStorage.getItem(STORE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && parsed.profile && parsed.skillLevels) return parsed;
    }
  } catch (error) {
    console.warn('SkillPilot could not read saved data; using demo profile.', error);
  }
  return defaultData;
}

const SkillPilotContext = createContext(null);

export function SkillPilotProvider({ children }) {
  const [data, setData] = useState(() => loadInitial());
  const career = useMemo(() => careers.find(item => item.id === data.profile.targetCareer) || careers[0], [data.profile.targetCareer]);

  useEffect(() => {
    if (!data.tasks || data.tasks.length === 0) {
      setData(current => ({ ...current, tasks: generateRoadmap(career.skills, current.skillLevels, current.profile.duration, current.profile.hoursPerDay, current.profile.preference) }));
      return;
    }
    try { localStorage.setItem(STORE_KEY, JSON.stringify(data)); }
    catch (error) { console.warn('SkillPilot could not save data.', error); }
  }, [data, career]);

  useEffect(() => {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(data)); } catch (error) { console.warn(error); }
  }, [data]);

  const updateProfile = patch => setData(current => ({ ...current, profile: { ...current.profile, ...patch } }));

  const selectCareer = careerId => {
    const nextCareer = careers.find(item => item.id === careerId);
    if (!nextCareer) return;
    setData(current => {
      const nextTasks = generateRoadmap(nextCareer.skills, current.skillLevels, current.profile.duration, current.profile.hoursPerDay, current.profile.preference);
      return { ...current, profile: { ...current.profile, targetCareer: careerId }, tasks: nextTasks };
    });
  };

  const updateSkill = (skillId, level) => setData(current => {
    const nextLevels = { ...current.skillLevels, [skillId]: Math.max(0, Math.min(4, Number(level) || 0)) };
    return { ...current, skillLevels: nextLevels };
  });

  const saveAssessment = () => setData(current => {
    const activeCareer = careers.find(item => item.id === current.profile.targetCareer) || career;
    return {
      ...current,
      assessmentSaved: true,
      tasks: generateRoadmap(activeCareer.skills, current.skillLevels, current.profile.duration, current.profile.hoursPerDay, current.profile.preference)
        .map(task => ({ ...task, completed: current.tasks.find(old => old.id === task.id)?.completed || false }))
    };
  });

  const regenerateRoadmap = () => setData(current => {
    const activeCareer = careers.find(item => item.id === current.profile.targetCareer) || career;
    return {
      ...current,
      tasks: generateRoadmap(activeCareer.skills, current.skillLevels, current.profile.duration, current.profile.hoursPerDay, current.profile.preference)
        .map(task => ({ ...task, completed: current.tasks.find(old => old.id === task.id)?.completed || false }))
    };
  });

  const toggleTask = taskId => setData(current => ({ ...current, tasks: current.tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task) }));
  const resetData = () => {
    const reset = { ...defaultData, tasks: generateRoadmap(defaultCareer.skills, defaultData.skillLevels, defaultData.profile.duration, defaultData.profile.hoursPerDay, defaultData.profile.preference) };
    setData(reset);
  };

  const value = {
    data, profile: data.profile, skillLevels: data.skillLevels, tasks: data.tasks || [], career,
    updateProfile, selectCareer, updateSkill, saveAssessment, regenerateRoadmap, toggleTask, resetData,
    roadmapProgress: calculateRoadmapProgress(data.tasks || [])
  };
  return <SkillPilotContext.Provider value={value}>{children}</SkillPilotContext.Provider>;
}

export function useSkillPilot() {
  const context = useContext(SkillPilotContext);
  if (!context) throw new Error('useSkillPilot must be used inside SkillPilotProvider');
  return context;
}

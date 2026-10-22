export function calculateSkillGap(skill, currentLevel = 0) {
  const target = Number(skill.target) || 0;
  const current = Number(currentLevel) || 0;
  const gap = Math.max(0, target - current);
  const priorityScore = gap * (Number(skill.importance) || 1);
  return { ...skill, current, gap, priorityScore, status: gap === 0 ? 'Strong' : current === 0 ? 'Not started' : 'Needs improvement' };
}

export function calculateCareerMatch(skills, skillLevels = {}) {
  const totalTarget = skills.reduce((sum, skill) => sum + Math.max(0, Number(skill.target) || 0), 0);
  if (!totalTarget) return 0;
  const earned = skills.reduce((sum, skill) => sum + Math.min(Number(skill.target) || 0, Math.max(0, Number(skillLevels[skill.id]) || 0)), 0);
  return Math.round((earned / totalTarget) * 100);
}

export function prioritizeSkillGaps(skills, skillLevels = {}) {
  return skills.map(skill => calculateSkillGap(skill, skillLevels[skill.id] || 0))
    .filter(skill => skill.gap > 0)
    .sort((a, b) => b.priorityScore - a.priorityScore || b.gap - a.gap);
}

const activityByPreference = {
  Video: ['Watch a focused lesson and write three takeaways', 'Follow a guided walkthrough, then repeat it without pausing'],
  Documentation: ['Read the official guide and summarize key concepts', 'Use documentation to implement one small example'],
  'Practice Projects': ['Complete a hands-on exercise and save the result', 'Build a small feature that demonstrates the skill']
};

export function generateRoadmap(skills, skillLevels = {}, duration = 30, hoursPerDay = 2, preference = 'Practice Projects') {
  const gaps = prioritizeSkillGaps(skills, skillLevels);
  const weeks = Math.max(1, Math.ceil((Number(duration) || 30) / 7));
  const dailyHours = Math.max(1, Number(hoursPerDay) || 1);
  const activities = activityByPreference[preference] || activityByPreference['Practice Projects'];
  const capacity = Math.max(3, Math.round(dailyHours * 5));
  const tasks = [];
  let day = 1;
  gaps.forEach((skill, index) => {
    const sessions = Math.min(4, Math.max(1, skill.gap));
    const week = Math.min(weeks, Math.floor(index / Math.max(1, Math.ceil(gaps.length / weeks))) + 1);
    for (let session = 0; session < sessions; session++) {
      const title = session === 0 ? `Learn ${skill.name}` : session === sessions - 1 ? `Apply ${skill.name}` : `Practice ${skill.name}`;
      tasks.push({
        id: `${skill.id}-${session + 1}`,
        title,
        description: session === sessions - 1 ? skill.deliverable : `${activities[session % activities.length]} for ${skill.name.toLowerCase()}.`,
        skillId: skill.id, skillName: skill.name,
        priority: skill.importance >= 5 && skill.gap >= 2 ? 'High' : skill.importance >= 4 ? 'Medium' : 'Normal',
        durationHours: Math.max(1, Math.ceil((skill.gap * skill.importance) / 5)),
        type: session === sessions - 1 ? 'Project' : preference,
        week,
        day: Math.min(Number(duration) || 30, day),
        deliverable: session === sessions - 1 ? skill.deliverable : `A short note or exercise demonstrating progress in ${skill.name}.`,
        completed: false
      });
      day += Math.max(1, Math.floor((Number(duration) || 30) / Math.max(capacity, gaps.length * 2)));
    }
  });
  tasks.push({
    id: 'portfolio-proof', title: 'Publish a career-relevant mini project', description: 'Combine your strongest newly practiced skills into one small portfolio-ready deliverable.',
    skillId: 'portfolio', skillName: 'Portfolio project', priority: 'High', durationHours: Math.max(2, dailyHours * 2), type: 'Project', week: weeks, day: Number(duration) || 30,
    deliverable: 'A project repository or case study with screenshots and a clear README.', completed: false
  });
  return tasks;
}

export function calculateRoadmapProgress(tasks = []) {
  if (!tasks.length) return 0;
  return Math.round((tasks.filter(task => task.completed).length / tasks.length) * 100);
}

export function recommendLearningResources(resources, gaps) {
  const gapIds = new Set(gaps.map(gap => gap.id));
  return resources.map(resource => ({ ...resource, relevance: resource.skillIds.filter(id => gapIds.has(id)).length }))
    .filter(resource => resource.relevance > 0)
    .sort((a, b) => b.relevance - a.relevance);
}

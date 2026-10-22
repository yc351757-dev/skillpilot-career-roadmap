export const careers = [
  {
    id: 'frontend', title: 'Frontend Developer', category: 'Development', description: 'Build responsive, accessible interfaces and bring product designs to life.', icon: 'PanelsTopLeft', level: 'Beginner friendly',
    skills: [
      { id: 'html', name: 'HTML & Semantics', target: 3, importance: 5, description: 'Structure accessible, meaningful web pages.', deliverable: 'Build a semantic multi-page layout.' },
      { id: 'css', name: 'CSS & Responsive Design', target: 3, importance: 5, description: 'Create polished interfaces that adapt to every screen.', deliverable: 'Ship a mobile-first responsive page.' },
      { id: 'javascript', name: 'JavaScript', target: 3, importance: 5, description: 'Write interactive behavior and application logic.', deliverable: 'Build a small interactive app.' },
      { id: 'react', name: 'React', target: 3, importance: 5, description: 'Build reusable UI with components and state.', deliverable: 'Create a component-driven dashboard.' },
      { id: 'git', name: 'Git & GitHub', target: 2, importance: 3, description: 'Track changes and collaborate safely.', deliverable: 'Publish a repository with a useful README.' },
      { id: 'api', name: 'API Integration', target: 2, importance: 4, description: 'Connect interfaces to real data sources.', deliverable: 'Build a searchable API-powered page.' },
      { id: 'testing', name: 'Testing & Debugging', target: 2, importance: 3, description: 'Catch errors and make behavior reliable.', deliverable: 'Add validation and test critical flows.' },
    ]
  },
  {
    id: 'fullstack', title: 'Full Stack Developer', category: 'Development', description: 'Create end-to-end web applications from interface to database.', icon: 'Layers', level: 'Intermediate path',
    skills: [
      { id: 'html', name: 'HTML & CSS', target: 3, importance: 4, description: 'Create accessible, responsive user interfaces.', deliverable: 'Build a responsive app layout.' },
      { id: 'javascript', name: 'JavaScript', target: 3, importance: 5, description: 'Write application logic across the stack.', deliverable: 'Build a data-driven interface.' },
      { id: 'react', name: 'React', target: 3, importance: 4, description: 'Build reusable, stateful frontends.', deliverable: 'Create a multi-page React app.' },
      { id: 'node', name: 'Node.js & Express', target: 3, importance: 5, description: 'Build server-side APIs and business logic.', deliverable: 'Create a REST API with validation.' },
      { id: 'database', name: 'Databases & SQL', target: 3, importance: 5, description: 'Design schemas and query persistent data.', deliverable: 'Design and query a relational schema.' },
      { id: 'api', name: 'REST APIs', target: 3, importance: 4, description: 'Design and consume stable API contracts.', deliverable: 'Connect frontend and backend CRUD flows.' },
      { id: 'git', name: 'Git & GitHub', target: 2, importance: 3, description: 'Collaborate and manage source code.', deliverable: 'Use branches and pull requests.' },
      { id: 'auth', name: 'Authentication', target: 2, importance: 4, description: 'Handle accounts, sessions, and authorization.', deliverable: 'Protect routes with role-aware access.' },
    ]
  },
  {
    id: 'analyst', title: 'Data Analyst', category: 'Data & AI', description: 'Turn raw datasets into clear insights and useful business decisions.', icon: 'ChartNoAxesCombined', level: 'Beginner friendly',
    skills: [
      { id: 'excel', name: 'Excel & Spreadsheets', target: 3, importance: 4, description: 'Clean and analyze structured business data.', deliverable: 'Build a KPI spreadsheet with formulas.' },
      { id: 'sql', name: 'SQL', target: 3, importance: 5, description: 'Retrieve, join, and summarize data from databases.', deliverable: 'Answer business questions with SQL queries.' },
      { id: 'python', name: 'Python', target: 2, importance: 3, description: 'Automate analysis and data preparation.', deliverable: 'Write a small data-cleaning script.' },
      { id: 'statistics', name: 'Statistics', target: 3, importance: 4, description: 'Interpret distributions, trends, and uncertainty.', deliverable: 'Summarize trends using descriptive statistics.' },
      { id: 'dataclean', name: 'Data Cleaning', target: 3, importance: 5, description: 'Handle missing values, duplicates, and inconsistent records.', deliverable: 'Document a repeatable cleaning workflow.' },
      { id: 'viz', name: 'Data Visualization', target: 3, importance: 5, description: 'Communicate patterns through clear charts.', deliverable: 'Create a dashboard with three useful charts.' },
      { id: 'story', name: 'Data Storytelling', target: 2, importance: 3, description: 'Explain findings and recommendations to stakeholders.', deliverable: 'Present three insights from a dataset.' },
    ]
  },
  {
    id: 'datascientist', title: 'Data Scientist', category: 'Data & AI', description: 'Use programming, statistics, and machine learning to solve data problems.', icon: 'BrainCircuit', level: 'Growth path',
    skills: [
      { id: 'python', name: 'Python', target: 4, importance: 5, description: 'Use Python to analyze data and build reproducible workflows.', deliverable: 'Create a well-documented analysis notebook.' },
      { id: 'sql', name: 'SQL', target: 3, importance: 4, description: 'Extract and transform data efficiently.', deliverable: 'Write joins, aggregations, and window queries.' },
      { id: 'statistics', name: 'Statistics & Probability', target: 3, importance: 5, description: 'Reason about uncertainty, distributions, and experiments.', deliverable: 'Analyze a dataset and explain uncertainty.' },
      { id: 'pandas', name: 'Pandas & NumPy', target: 3, importance: 5, description: 'Clean, transform, and analyze tabular data.', deliverable: 'Build a reusable data-cleaning notebook.' },
      { id: 'viz', name: 'Data Visualization', target: 3, importance: 4, description: 'Explain patterns through visual analysis.', deliverable: 'Build an insight-focused data report.' },
      { id: 'ml', name: 'Machine Learning', target: 3, importance: 5, description: 'Train models to make predictions or discover patterns.', deliverable: 'Train and compare two baseline models.' },
      { id: 'evaluation', name: 'Model Evaluation', target: 2, importance: 4, description: 'Evaluate model quality and avoid misleading results.', deliverable: 'Compare models with suitable metrics.' },
      { id: 'git', name: 'Git & Reproducibility', target: 2, importance: 3, description: 'Version code and make analysis repeatable.', deliverable: 'Publish a reproducible project repository.' },
    ]
  },
  {
    id: 'pythondev', title: 'Python Developer', category: 'Development', description: 'Build reliable tools, automation, APIs, and backend services with Python.', icon: 'Code2', level: 'Beginner friendly',
    skills: [
      { id: 'python', name: 'Python Fundamentals', target: 4, importance: 5, description: 'Write readable Python programs with core language features.', deliverable: 'Build a command-line utility.' },
      { id: 'dsa', name: 'Data Structures & Algorithms', target: 3, importance: 4, description: 'Choose effective data structures and solve programming problems.', deliverable: 'Solve and explain ten practice problems.' },
      { id: 'oop', name: 'Object-Oriented Programming', target: 3, importance: 4, description: 'Organize programs using classes and clear interfaces.', deliverable: 'Refactor a script into maintainable classes.' },
      { id: 'testing', name: 'Testing & Debugging', target: 3, importance: 4, description: 'Verify behavior and isolate defects.', deliverable: 'Write unit tests for a small module.' },
      { id: 'api', name: 'APIs & HTTP', target: 2, importance: 4, description: 'Integrate services and build HTTP clients.', deliverable: 'Consume an API with error handling.' },
      { id: 'database', name: 'SQL & Databases', target: 2, importance: 3, description: 'Persist and retrieve application data.', deliverable: 'Create a small database-backed tool.' },
      { id: 'git', name: 'Git & GitHub', target: 2, importance: 3, description: 'Track changes and document projects.', deliverable: 'Publish code with setup instructions.' },
    ]
  },
  {
    id: 'java', title: 'Java Backend Developer', category: 'Development', description: 'Design backend systems and APIs using Java and common server frameworks.', icon: 'Server', level: 'Growth path',
    skills: [
      { id: 'java', name: 'Java Fundamentals', target: 4, importance: 5, description: 'Write Java code using the core language and standard library.', deliverable: 'Build a robust command-line application.' },
      { id: 'oop', name: 'OOP & Collections', target: 3, importance: 5, description: 'Model domain logic and choose suitable collections.', deliverable: 'Model a small domain with classes.' },
      { id: 'dsa', name: 'Data Structures & Algorithms', target: 3, importance: 4, description: 'Solve common computational problems.', deliverable: 'Document solutions to practice problems.' },
      { id: 'sql', name: 'SQL & Database Design', target: 3, importance: 4, description: 'Design schemas and query persisted data.', deliverable: 'Build a relational schema for an app.' },
      { id: 'spring', name: 'Spring Boot', target: 3, importance: 5, description: 'Create maintainable Java backend services.', deliverable: 'Build a REST API with Spring Boot.' },
      { id: 'api', name: 'REST APIs', target: 3, importance: 4, description: 'Design predictable service interfaces.', deliverable: 'Implement CRUD endpoints and validation.' },
      { id: 'testing', name: 'Testing', target: 2, importance: 3, description: 'Protect behavior with automated checks.', deliverable: 'Add unit tests for service logic.' },
    ]
  },
  {
    id: 'ux', title: 'UI/UX Designer', category: 'Design', description: 'Research users and design usable, accessible digital experiences.', icon: 'Palette', level: 'Beginner friendly',
    skills: [
      { id: 'research', name: 'User Research', target: 3, importance: 5, description: 'Understand user needs and validate assumptions.', deliverable: 'Summarize five user interviews.' },
      { id: 'wireframes', name: 'Wireframing', target: 3, importance: 5, description: 'Explore structure before visual polish.', deliverable: 'Create low-fidelity flows for a feature.' },
      { id: 'figma', name: 'Figma & Prototyping', target: 3, importance: 5, description: 'Create reusable interfaces and interactive prototypes.', deliverable: 'Prototype a three-screen user journey.' },
      { id: 'usability', name: 'Usability Testing', target: 2, importance: 4, description: 'Identify friction through task-based testing.', deliverable: 'Run a usability test and synthesize findings.' },
      { id: 'accessibility', name: 'Accessibility', target: 2, importance: 4, description: 'Design inclusive experiences for different abilities.', deliverable: 'Audit a screen for accessibility issues.' },
      { id: 'systems', name: 'Design Systems', target: 2, importance: 3, description: 'Create consistent reusable patterns.', deliverable: 'Build a small component library.' },
    ]
  }
];

export const levelLabels = ['Not started', 'Beginner', 'Intermediate', 'Advanced', 'Proficient'];

export const resources = [
  { title: 'MDN Web Docs', skillIds: ['html', 'css', 'javascript', 'api'], type: 'Documentation', url: 'https://developer.mozilla.org/', description: 'Trusted reference guides for the web platform.' },
  { title: 'Python Documentation', skillIds: ['python'], type: 'Documentation', url: 'https://docs.python.org/3/', description: 'Official Python tutorials and language reference.' },
  { title: 'SQLBolt', skillIds: ['sql', 'database'], type: 'Interactive practice', url: 'https://sqlbolt.com/', description: 'Learn SQL through short interactive lessons.' },
  { title: 'freeCodeCamp', skillIds: ['html', 'css', 'javascript', 'react', 'api'], type: 'Course', url: 'https://www.freecodecamp.org/learn/', description: 'Project-based paths for web development.' },
  { title: 'Kaggle Learn', skillIds: ['python', 'pandas', 'ml', 'viz', 'statistics'], type: 'Hands-on course', url: 'https://www.kaggle.com/learn', description: 'Short practical lessons in data and machine learning.' },
  { title: 'GitHub Skills', skillIds: ['git'], type: 'Interactive practice', url: 'https://skills.github.com/', description: 'Learn GitHub workflows with guided exercises.' },
  { title: 'React Documentation', skillIds: ['react'], type: 'Documentation', url: 'https://react.dev/learn', description: 'Official guide to modern React concepts.' },
  { title: 'Figma Learning', skillIds: ['figma', 'wireframes', 'systems'], type: 'Tutorials', url: 'https://help.figma.com/', description: 'Guides for design workflows and prototyping.' },
  { title: 'StatQuest', skillIds: ['statistics', 'ml', 'evaluation'], type: 'Video lessons', url: 'https://statquest.org/', description: 'Intuitive explanations of statistics and machine learning.' },
];

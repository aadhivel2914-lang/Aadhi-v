export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI & ML' | 'Computer Vision' | 'Data Science' | 'Web & Systems';
  featured: boolean;
  description: string;
  detailedDescription?: string;
  technologies: string[];
  metrics?: { label: string; value: string }[];
  keyHighlights: string[];
  githubUrl?: string;
  demoUrl?: string;
  inspectionSimulation?: {
    type: string;
    status: string;
    confidence: number;
    details: string;
  };
}

export interface Skill {
  name: string;
  category: 'Programming' | 'AI & Data Science' | 'Web & Development' | 'Core Tools';
  level: string;
  description: string;
  iconName: string;
  highlight: string;
  projectsUsed: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  duration: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  field: string;
  duration: string;
  status: string;
  highlights: string[];
  coursework: string[];
}

export interface TerminalCommand {
  command: string;
  description: string;
  output: string | string[];
}

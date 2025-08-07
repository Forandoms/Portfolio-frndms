export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'design';
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  secondaryEmail?: string;
  location: string;
  bio: string;
  linkedin?: string;
  instagram?: string;
}
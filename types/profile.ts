export interface Profile {
  name: string;
  title: string;
  bio: string;
  avatarUrl: string;
  location: string;
  email: string;
  phone: string;
  resumeUrl: string;
  socialLinks: {
    name: string;
    url: string;
    icon: string;
  }[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string;
  highlights: string[];
}

export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string | null;
  gpa: string | null;
  description: string | null;
}

export interface Skill {
  name: string;
  category: 'technical' | 'soft' | 'language';
  proficiency: number;
}

export interface Interest {
  name: string;
  icon: string;
  description: string;
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
}
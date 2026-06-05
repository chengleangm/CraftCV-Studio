import type { ComponentType } from "react";

export type TemplateId =
  | "modern-minimal"
  | "classic-professional"
  | "creative-sidebar"
  | "corporate-blue"
  | "elegant-black-white"
  | "startup-tech"
  | "designer-portfolio"
  | "academic-cv"
  | "student-cv"
  | "fresh-graduate"
  | "executive-resume"
  | "ats-friendly"
  | "european-style"
  | "luxury-gold"
  | "dark-premium"
  | "two-column"
  | "timeline-resume"
  | "simple-one-page"
  | "color-accent"
  | "khmer-professional";

export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  details: string;
}

export interface Skill {
  id: string;
  name: string;
  level: string;
}

export interface Language {
  id: string;
  name: string;
  level: string;
}

export interface Project {
  id: string;
  name: string;
  role: string;
  url: string;
  description: string;
  highlights: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
}

export interface Reference {
  id: string;
  name: string;
  relationship: string;
  company: string;
  email: string;
  phone: string;
}

export interface CustomSection {
  id: string;
  title: string;
  items: string[];
}

export interface CVData {
  fullName: string;
  jobTitle: string;
  email: string;
  phone: string;
  address: string;
  website: string;
  linkedIn: string;
  summary: string;
  profilePhoto: string;
  workExperience: WorkExperience[];
  education: Education[];
  skills: Skill[];
  languages: Language[];
  projects: Project[];
  certifications: Certification[];
  awards: Award[];
  references: Reference[];
  customSections: CustomSection[];
}

export interface CVTemplateProps {
  cv: CVData;
  className?: string;
}

export interface TemplateMeta {
  id: TemplateId;
  name: string;
  description: string;
  layout: "one-column" | "two-column" | "sidebar" | "timeline" | "ats";
  accent: string;
  tags: string[];
}

export type TemplateComponentMap = Record<TemplateId, ComponentType<CVTemplateProps>>;

import type { CVData } from "@/types/cv";

const samplePhoto =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='320' viewBox='0 0 320 320'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='1' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%2314b8a6'/%3E%3Cstop offset='0.55' stop-color='%232563eb'/%3E%3Cstop offset='1' stop-color='%23f59e0b'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='320' height='320' fill='url(%23a)'/%3E%3Ccircle cx='160' cy='118' r='54' fill='%23fff' fill-opacity='.9'/%3E%3Cpath d='M65 282c16-66 55-98 95-98s79 32 95 98' fill='%23fff' fill-opacity='.9'/%3E%3C/svg%3E";

export const defaultCV: CVData = {
  fullName: "Sophea Vann",
  jobTitle: "Product Operations Manager",
  email: "sophea.vann@example.com",
  phone: "+855 12 345 678",
  address: "Phnom Penh, Cambodia",
  website: "sopheavann.com",
  linkedIn: "linkedin.com/in/sopheavann",
  summary:
    "Product operations leader with 8+ years of experience building scalable customer workflows, launch systems, and data-driven operating rhythms across fintech and SaaS teams.",
  profilePhoto: samplePhoto,
  workExperience: [
    {
      id: "work-1",
      role: "Senior Product Operations Manager",
      company: "Mekong Cloud Labs",
      location: "Phnom Penh",
      startDate: "2022",
      endDate: "Present",
      description:
        "Own launch governance, customer feedback programs, and executive reporting for a B2B SaaS portfolio serving regional finance teams.",
      highlights: [
        "Reduced launch cycle time by 31% through intake scoring, readiness reviews, and release playbooks.",
        "Increased enterprise onboarding completion to 94% with cross-functional readiness tracking.",
      ],
    },
  ],
  education: [
    {
      id: "edu-1",
      degree: "MBA, Technology Management",
      institution: "Royal University of Law and Economics",
      location: "Phnom Penh",
      startDate: "2016",
      endDate: "2018",
      details: "Graduate research focused on digital product adoption in Southeast Asian financial services.",
    },
  ],
  skills: [
    { id: "skill-1", name: "Product operations", level: "Expert" },
    { id: "skill-2", name: "Launch planning", level: "Expert" },
    { id: "skill-3", name: "SQL dashboards", level: "Advanced" },
    { id: "skill-4", name: "Service design", level: "Advanced" },
    { id: "skill-5", name: "Stakeholder management", level: "Expert" },
  ],
  languages: [
    { id: "lang-1", name: "Khmer", level: "Native" },
    { id: "lang-2", name: "English", level: "Fluent" },
  ],
  projects: [
    {
      id: "project-1",
      name: "Enterprise Onboarding Studio",
      role: "Program Lead",
      url: "case.sopheavann.com/onboarding",
      description:
        "Created a guided onboarding command center with milestone tracking, issue escalation, and training completion analytics.",
      highlights: ["Cut implementation escalations by 24% and standardized rollout plans across 12 account teams."],
    },
  ],
  certifications: [
    { id: "cert-1", name: "Certified Scrum Product Owner", issuer: "Scrum Alliance", date: "2021" },
  ],
  awards: [
    {
      id: "award-1",
      title: "Operational Excellence Award",
      organization: "Mekong Cloud Labs",
      date: "2024",
      description: "Recognized for building the company's highest-adoption launch readiness system.",
    },
  ],
  references: [
    {
      id: "ref-1",
      name: "Dara Kim",
      relationship: "VP Product",
      company: "Mekong Cloud Labs",
      email: "dara.kim@example.com",
      phone: "+855 10 222 333",
    },
  ],
  customSections: [
    {
      id: "custom-1",
      title: "Community",
      items: [
        "Mentor, Women in Product Cambodia",
      ],
    },
  ],
};

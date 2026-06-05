import AcademicCV from "@/components/templates/AcademicCV";
import ATSFriendly from "@/components/templates/ATSFriendly";
import ClassicProfessional from "@/components/templates/ClassicProfessional";
import ColorAccent from "@/components/templates/ColorAccent";
import CorporateBlue from "@/components/templates/CorporateBlue";
import CreativeSidebar from "@/components/templates/CreativeSidebar";
import DarkPremium from "@/components/templates/DarkPremium";
import DesignerPortfolio from "@/components/templates/DesignerPortfolio";
import ElegantBlackWhite from "@/components/templates/ElegantBlackWhite";
import EuropeanStyle from "@/components/templates/EuropeanStyle";
import ExecutiveResume from "@/components/templates/ExecutiveResume";
import FreshGraduate from "@/components/templates/FreshGraduate";
import KhmerProfessional from "@/components/templates/KhmerProfessional";
import LuxuryGold from "@/components/templates/LuxuryGold";
import ModernMinimal from "@/components/templates/ModernMinimal";
import SimpleOnePage from "@/components/templates/SimpleOnePage";
import StartupTech from "@/components/templates/StartupTech";
import StudentCV from "@/components/templates/StudentCV";
import TimelineResume from "@/components/templates/TimelineResume";
import TwoColumn from "@/components/templates/TwoColumn";
import type { TemplateComponentMap, TemplateId, TemplateMeta } from "@/types/cv";

export const templates: TemplateMeta[] = [
  {
    id: "modern-minimal",
    name: "Modern Minimal",
    description: "Airy two-column resume with quiet teal accents and strong content hierarchy.",
    layout: "two-column",
    accent: "#0f766e",
    tags: ["Modern", "Minimal", "General"],
  },
  {
    id: "classic-professional",
    name: "Classic Professional",
    description: "Traditional centered header, serif typography, and polished executive rhythm.",
    layout: "one-column",
    accent: "#57534e",
    tags: ["Classic", "Formal", "Finance"],
  },
  {
    id: "creative-sidebar",
    name: "Creative Sidebar",
    description: "Bold navy sidebar with warm creative accents for client-facing portfolios.",
    layout: "sidebar",
    accent: "#e76f51",
    tags: ["Creative", "Sidebar", "Portfolio"],
  },
  {
    id: "corporate-blue",
    name: "Corporate Blue",
    description: "Structured blue header and sidebar suited for enterprise roles.",
    layout: "two-column",
    accent: "#0f3f75",
    tags: ["Corporate", "Blue", "Manager"],
  },
  {
    id: "elegant-black-white",
    name: "Elegant Black & White",
    description: "High-contrast editorial styling with restrained monochrome detail.",
    layout: "two-column",
    accent: "#000000",
    tags: ["Elegant", "Monochrome", "Senior"],
  },
  {
    id: "startup-tech",
    name: "Startup Tech",
    description: "Light SaaS card layout with compact technical skill presentation.",
    layout: "two-column",
    accent: "#0891b2",
    tags: ["Tech", "SaaS", "Product"],
  },
  {
    id: "designer-portfolio",
    name: "Designer Portfolio",
    description: "Strong project-first structure with an expressive color sidebar.",
    layout: "sidebar",
    accent: "#f45b69",
    tags: ["Designer", "Projects", "Creative"],
  },
  {
    id: "academic-cv",
    name: "Academic CV",
    description: "Formal academic flow that prioritizes education, research, and credentials.",
    layout: "one-column",
    accent: "#334155",
    tags: ["Academic", "Research", "Formal"],
  },
  {
    id: "student-cv",
    name: "Student CV",
    description: "Friendly education-led layout for internships and campus roles.",
    layout: "sidebar",
    accent: "#047857",
    tags: ["Student", "Internship", "Green"],
  },
  {
    id: "fresh-graduate",
    name: "Fresh Graduate",
    description: "Bright graduate template balancing education, projects, and first roles.",
    layout: "two-column",
    accent: "#4d7c0f",
    tags: ["Graduate", "Entry Level", "Projects"],
  },
  {
    id: "executive-resume",
    name: "Executive Resume",
    description: "Authority-led layout with leadership signals and premium gold detail.",
    layout: "two-column",
    accent: "#b08d57",
    tags: ["Executive", "Leadership", "Premium"],
  },
  {
    id: "ats-friendly",
    name: "Clean ATS Friendly",
    description: "Parser-safe one-column resume with plain text hierarchy and no decorative photo.",
    layout: "ats",
    accent: "#111827",
    tags: ["ATS", "Simple", "Recruiter"],
  },
  {
    id: "european-style",
    name: "European Style",
    description: "Compact personal-details column with crisp continental resume styling.",
    layout: "sidebar",
    accent: "#26547c",
    tags: ["European", "Sidebar", "Formal"],
  },
  {
    id: "luxury-gold",
    name: "Luxury Gold",
    description: "Editorial gold-and-ink treatment for premium professional positioning.",
    layout: "two-column",
    accent: "#c9a227",
    tags: ["Luxury", "Gold", "Premium"],
  },
  {
    id: "dark-premium",
    name: "Dark Premium",
    description: "Dark executive canvas with bright inner resume content and blue highlights.",
    layout: "two-column",
    accent: "#38bdf8",
    tags: ["Dark", "Premium", "Modern"],
  },
  {
    id: "two-column",
    name: "Two Column Layout",
    description: "Balanced left-right content architecture for dense professional profiles.",
    layout: "two-column",
    accent: "#7c3aed",
    tags: ["Two Column", "Dense", "Modern"],
  },
  {
    id: "timeline-resume",
    name: "Timeline Resume",
    description: "Chronological resume with a visual career and education timeline.",
    layout: "timeline",
    accent: "#ea580c",
    tags: ["Timeline", "Career Story", "Orange"],
  },
  {
    id: "simple-one-page",
    name: "Simple One Page",
    description: "Condensed single-page template for quick scanning and concise applications.",
    layout: "one-column",
    accent: "#111827",
    tags: ["One Page", "Compact", "Simple"],
  },
  {
    id: "color-accent",
    name: "Color Accent Resume",
    description: "White resume with a confident color stripe and multi-accent detail system.",
    layout: "two-column",
    accent: "#ef476f",
    tags: ["Color", "Accent", "Modern"],
  },
  {
    id: "khmer-professional",
    name: "Modern Khmer Professional",
    description: "Clean regional professional style with bold red-blue identity details.",
    layout: "two-column",
    accent: "#1d4ed8",
    tags: ["Khmer", "Professional", "Regional"],
  },
];

export const templateComponents: TemplateComponentMap = {
  "modern-minimal": ModernMinimal,
  "classic-professional": ClassicProfessional,
  "creative-sidebar": CreativeSidebar,
  "corporate-blue": CorporateBlue,
  "elegant-black-white": ElegantBlackWhite,
  "startup-tech": StartupTech,
  "designer-portfolio": DesignerPortfolio,
  "academic-cv": AcademicCV,
  "student-cv": StudentCV,
  "fresh-graduate": FreshGraduate,
  "executive-resume": ExecutiveResume,
  "ats-friendly": ATSFriendly,
  "european-style": EuropeanStyle,
  "luxury-gold": LuxuryGold,
  "dark-premium": DarkPremium,
  "two-column": TwoColumn,
  "timeline-resume": TimelineResume,
  "simple-one-page": SimpleOnePage,
  "color-accent": ColorAccent,
  "khmer-professional": KhmerProfessional,
};

export function isTemplateId(value: string | null | undefined): value is TemplateId {
  return templates.some((template) => template.id === value);
}

export function getTemplateMeta(id: TemplateId) {
  return templates.find((template) => template.id === id) ?? templates[0];
}

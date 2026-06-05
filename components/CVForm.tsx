"use client";

import type { Dispatch, InputHTMLAttributes, SetStateAction, TextareaHTMLAttributes } from "react";
import {
  Award,
  BriefcaseBusiness,
  GraduationCap,
  Languages,
  Plus,
  RotateCcw,
  Sparkles,
  Trash2,
  UserRound,
} from "lucide-react";
import type {
  Award as AwardItem,
  Certification,
  CustomSection,
  CVData,
  Education,
  Language,
  Project,
  Reference,
  Skill,
  WorkExperience,
} from "@/types/cv";
import PhotoUploader from "./PhotoUploader";

interface CVFormProps {
  cv: CVData;
  setCv: Dispatch<SetStateAction<CVData>>;
  onReset: () => void;
}

function newId(prefix: string) {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return `${prefix}-${crypto.randomUUID()}`;
  }

  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}

function splitLines(value: string) {
  return value
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
}

function TextInput({ label, className, ...props }: InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-bold text-slate-700">{label}</span>
      <input
        {...props}
        className={`w-full rounded-[8px] border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-200/70 ${className ?? ""}`}
      />
    </label>
  );
}

function TextArea({ label, className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-bold text-slate-700">{label}</span>
      <textarea
        {...props}
        className={`w-full resize-y rounded-[8px] border border-slate-200 bg-white px-3 py-2.5 text-sm leading-relaxed text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-200/70 ${className ?? ""}`}
      />
    </label>
  );
}

function FormSection({
  title,
  description,
  icon,
  children,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[10px] border border-white/80 bg-white/[0.82] p-5 shadow-sm">
      <div className="mb-5 flex items-start gap-3">
        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] bg-slate-950 text-white">{icon}</span>
        <div>
          <h2 className="text-sm font-black text-slate-950">{title}</h2>
          <p className="mt-0.5 text-xs leading-relaxed text-slate-500">{description}</p>
        </div>
      </div>
      {children}
    </section>
  );
}

function DeleteButton({ onClick, label = "Delete" }: { onClick: () => void; label?: string }) {
  return (
    <button
      type="button"
      title={label}
      onClick={onClick}
      className="inline-flex h-8 w-8 items-center justify-center rounded-[8px] border border-slate-200 bg-white text-slate-500 transition hover:border-rose-200 hover:text-rose-600"
    >
      <Trash2 className="h-4 w-4" />
    </button>
  );
}

function AddButton({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-[8px] border border-slate-200 bg-white px-3 py-2 text-xs font-black text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-sm"
    >
      <Plus className="h-4 w-4" />
      {label}
    </button>
  );
}

export default function CVForm({ cv, setCv, onReset }: CVFormProps) {
  const updateField = <K extends keyof CVData>(field: K, value: CVData[K]) => {
    setCv((previous) => ({ ...previous, [field]: value }));
  };

  const updateWork = (id: string, patch: Partial<WorkExperience>) => {
    setCv((previous) => ({
      ...previous,
      workExperience: previous.workExperience.map((item) => (item.id === id ? { ...item, ...patch } : item)),
    }));
  };

  const updateEducation = (id: string, patch: Partial<Education>) => {
    setCv((previous) => ({
      ...previous,
      education: previous.education.map((item) => (item.id === id ? { ...item, ...patch } : item)),
    }));
  };

  const updateSkill = (id: string, patch: Partial<Skill>) => {
    setCv((previous) => ({
      ...previous,
      skills: previous.skills.map((item) => (item.id === id ? { ...item, ...patch } : item)),
    }));
  };

  const updateLanguage = (id: string, patch: Partial<Language>) => {
    setCv((previous) => ({
      ...previous,
      languages: previous.languages.map((item) => (item.id === id ? { ...item, ...patch } : item)),
    }));
  };

  const updateProject = (id: string, patch: Partial<Project>) => {
    setCv((previous) => ({
      ...previous,
      projects: previous.projects.map((item) => (item.id === id ? { ...item, ...patch } : item)),
    }));
  };

  const updateCertification = (id: string, patch: Partial<Certification>) => {
    setCv((previous) => ({
      ...previous,
      certifications: previous.certifications.map((item) => (item.id === id ? { ...item, ...patch } : item)),
    }));
  };

  const updateAward = (id: string, patch: Partial<AwardItem>) => {
    setCv((previous) => ({
      ...previous,
      awards: previous.awards.map((item) => (item.id === id ? { ...item, ...patch } : item)),
    }));
  };

  const updateReference = (id: string, patch: Partial<Reference>) => {
    setCv((previous) => ({
      ...previous,
      references: previous.references.map((item) => (item.id === id ? { ...item, ...patch } : item)),
    }));
  };

  const updateCustomSection = (id: string, patch: Partial<CustomSection>) => {
    setCv((previous) => ({
      ...previous,
      customSections: previous.customSections.map((item) => (item.id === id ? { ...item, ...patch } : item)),
    }));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-black text-slate-950">CV editor</h1>
          <p className="text-sm text-slate-500">Autosaves locally while the preview updates in real time.</p>
        </div>
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-2 rounded-[8px] border border-slate-200 bg-white px-3 py-2 text-xs font-black text-slate-700 transition hover:border-slate-300"
        >
          <RotateCcw className="h-4 w-4" />
          Reset
        </button>
      </div>

      <FormSection
        title="Personal details"
        description="Use professional contact information that recruiters can scan quickly."
        icon={<UserRound className="h-4 w-4" />}
      >
        <div className="grid gap-3 sm:grid-cols-2">
          <TextInput label="Full name" value={cv.fullName} onChange={(event) => updateField("fullName", event.target.value)} />
          <TextInput label="Job title" value={cv.jobTitle} onChange={(event) => updateField("jobTitle", event.target.value)} />
          <TextInput label="Email" value={cv.email} onChange={(event) => updateField("email", event.target.value)} />
          <TextInput label="Phone" value={cv.phone} onChange={(event) => updateField("phone", event.target.value)} />
          <TextInput label="Address" value={cv.address} onChange={(event) => updateField("address", event.target.value)} />
          <TextInput label="Website / portfolio" value={cv.website} onChange={(event) => updateField("website", event.target.value)} />
          <TextInput label="LinkedIn" value={cv.linkedIn} onChange={(event) => updateField("linkedIn", event.target.value)} />
        </div>
        <div className="mt-3">
          <TextArea label="Profile summary" rows={5} value={cv.summary} onChange={(event) => updateField("summary", event.target.value)} />
        </div>
        <div className="mt-4">
          <PhotoUploader value={cv.profilePhoto} onChange={(value) => updateField("profilePhoto", value)} />
        </div>
      </FormSection>

      <FormSection
        title="Work experience"
        description="Add roles with quantified highlights. Each role can be edited or removed."
        icon={<BriefcaseBusiness className="h-4 w-4" />}
      >
        <div className="space-y-4">
          {cv.workExperience.map((item, index) => (
            <div key={item.id} className="rounded-[8px] border border-slate-200 bg-slate-50/80 p-4">
              <div className="mb-3 flex items-center justify-between gap-3">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Role {index + 1}</p>
                <DeleteButton
                  label="Delete work experience"
                  onClick={() =>
                    setCv((previous) => ({
                      ...previous,
                      workExperience: previous.workExperience.filter((entry) => entry.id !== item.id),
                    }))
                  }
                />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <TextInput label="Role" value={item.role} onChange={(event) => updateWork(item.id, { role: event.target.value })} />
                <TextInput label="Company" value={item.company} onChange={(event) => updateWork(item.id, { company: event.target.value })} />
                <TextInput label="Location" value={item.location} onChange={(event) => updateWork(item.id, { location: event.target.value })} />
                <div className="grid grid-cols-2 gap-3">
                  <TextInput label="Start" value={item.startDate} onChange={(event) => updateWork(item.id, { startDate: event.target.value })} />
                  <TextInput label="End" value={item.endDate} onChange={(event) => updateWork(item.id, { endDate: event.target.value })} />
                </div>
              </div>
              <div className="mt-3 grid gap-3">
                <TextArea label="Description" rows={3} value={item.description} onChange={(event) => updateWork(item.id, { description: event.target.value })} />
                <TextArea
                  label="Highlights"
                  rows={4}
                  value={item.highlights.join("\n")}
                  onChange={(event) => updateWork(item.id, { highlights: splitLines(event.target.value) })}
                />
              </div>
            </div>
          ))}
          <AddButton
            label="Add experience"
            onClick={() =>
              setCv((previous) => ({
                ...previous,
                workExperience: [
                  ...previous.workExperience,
                  {
                    id: newId("work"),
                    role: "New role",
                    company: "Company name",
                    location: "Location",
                    startDate: "2025",
                    endDate: "Present",
                    description: "Summarize your ownership, scope, and impact.",
                    highlights: ["Add a measurable achievement."],
                  },
                ],
              }))
            }
          />
        </div>
      </FormSection>

      <FormSection
        title="Education"
        description="Include degrees, institutions, dates, and relevant academic details."
        icon={<GraduationCap className="h-4 w-4" />}
      >
        <div className="space-y-4">
          {cv.education.map((item, index) => (
            <div key={item.id} className="rounded-[8px] border border-slate-200 bg-slate-50/80 p-4">
              <div className="mb-3 flex items-center justify-between gap-3">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Education {index + 1}</p>
                <DeleteButton
                  label="Delete education"
                  onClick={() =>
                    setCv((previous) => ({
                      ...previous,
                      education: previous.education.filter((entry) => entry.id !== item.id),
                    }))
                  }
                />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <TextInput label="Degree" value={item.degree} onChange={(event) => updateEducation(item.id, { degree: event.target.value })} />
                <TextInput label="Institution" value={item.institution} onChange={(event) => updateEducation(item.id, { institution: event.target.value })} />
                <TextInput label="Location" value={item.location} onChange={(event) => updateEducation(item.id, { location: event.target.value })} />
                <div className="grid grid-cols-2 gap-3">
                  <TextInput label="Start" value={item.startDate} onChange={(event) => updateEducation(item.id, { startDate: event.target.value })} />
                  <TextInput label="End" value={item.endDate} onChange={(event) => updateEducation(item.id, { endDate: event.target.value })} />
                </div>
              </div>
              <div className="mt-3">
                <TextArea label="Details" rows={3} value={item.details} onChange={(event) => updateEducation(item.id, { details: event.target.value })} />
              </div>
            </div>
          ))}
          <AddButton
            label="Add education"
            onClick={() =>
              setCv((previous) => ({
                ...previous,
                education: [
                  ...previous.education,
                  {
                    id: newId("edu"),
                    degree: "Degree or certificate",
                    institution: "Institution",
                    location: "Location",
                    startDate: "2021",
                    endDate: "2025",
                    details: "Relevant coursework, honors, or thesis.",
                  },
                ],
              }))
            }
          />
        </div>
      </FormSection>

      <FormSection
        title="Skills and languages"
        description="Keep skills concise and levels honest. These are used across every template."
        icon={<Languages className="h-4 w-4" />}
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <div>
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-black text-slate-900">Skills</h3>
              <AddButton
                label="Add skill"
                onClick={() =>
                  setCv((previous) => ({
                    ...previous,
                    skills: [...previous.skills, { id: newId("skill"), name: "New skill", level: "Intermediate" }],
                  }))
                }
              />
            </div>
            <div className="space-y-3">
              {cv.skills.map((skill) => (
                <div key={skill.id} className="grid grid-cols-[1fr_150px_36px] gap-2">
                  <TextInput label="Skill" value={skill.name} onChange={(event) => updateSkill(skill.id, { name: event.target.value })} />
                  <TextInput label="Level" value={skill.level} onChange={(event) => updateSkill(skill.id, { level: event.target.value })} />
                  <div className="pt-6">
                    <DeleteButton
                      label="Delete skill"
                      onClick={() => setCv((previous) => ({ ...previous, skills: previous.skills.filter((item) => item.id !== skill.id) }))}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-black text-slate-900">Languages</h3>
              <AddButton
                label="Add language"
                onClick={() =>
                  setCv((previous) => ({
                    ...previous,
                    languages: [...previous.languages, { id: newId("lang"), name: "Language", level: "Professional" }],
                  }))
                }
              />
            </div>
            <div className="space-y-3">
              {cv.languages.map((language) => (
                <div key={language.id} className="grid grid-cols-[1fr_150px_36px] gap-2">
                  <TextInput label="Language" value={language.name} onChange={(event) => updateLanguage(language.id, { name: event.target.value })} />
                  <TextInput label="Level" value={language.level} onChange={(event) => updateLanguage(language.id, { level: event.target.value })} />
                  <div className="pt-6">
                    <DeleteButton
                      label="Delete language"
                      onClick={() =>
                        setCv((previous) => ({ ...previous, languages: previous.languages.filter((item) => item.id !== language.id) }))
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FormSection>

      <FormSection
        title="Projects"
        description="Project cards show ownership, URLs, and impact bullets."
        icon={<Sparkles className="h-4 w-4" />}
      >
        <div className="space-y-4">
          {cv.projects.map((item, index) => (
            <div key={item.id} className="rounded-[8px] border border-slate-200 bg-slate-50/80 p-4">
              <div className="mb-3 flex items-center justify-between gap-3">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Project {index + 1}</p>
                <DeleteButton
                  label="Delete project"
                  onClick={() =>
                    setCv((previous) => ({
                      ...previous,
                      projects: previous.projects.filter((entry) => entry.id !== item.id),
                    }))
                  }
                />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <TextInput label="Project name" value={item.name} onChange={(event) => updateProject(item.id, { name: event.target.value })} />
                <TextInput label="Role" value={item.role} onChange={(event) => updateProject(item.id, { role: event.target.value })} />
                <TextInput label="URL" value={item.url} onChange={(event) => updateProject(item.id, { url: event.target.value })} />
              </div>
              <div className="mt-3 grid gap-3">
                <TextArea label="Description" rows={3} value={item.description} onChange={(event) => updateProject(item.id, { description: event.target.value })} />
                <TextArea
                  label="Highlights"
                  rows={3}
                  value={item.highlights.join("\n")}
                  onChange={(event) => updateProject(item.id, { highlights: splitLines(event.target.value) })}
                />
              </div>
            </div>
          ))}
          <AddButton
            label="Add project"
            onClick={() =>
              setCv((previous) => ({
                ...previous,
                projects: [
                  ...previous.projects,
                  {
                    id: newId("project"),
                    name: "Project name",
                    role: "Owner",
                    url: "project.example.com",
                    description: "Describe the project and who it served.",
                    highlights: ["Add a result or project milestone."],
                  },
                ],
              }))
            }
          />
        </div>
      </FormSection>

      <FormSection
        title="Certifications, awards, references"
        description="Optional proof points and references. Delete entries you do not want to show."
        icon={<Award className="h-4 w-4" />}
      >
        <div className="space-y-5">
          <div>
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-black text-slate-900">Certifications</h3>
              <AddButton
                label="Add certification"
                onClick={() =>
                  setCv((previous) => ({
                    ...previous,
                    certifications: [
                      ...previous.certifications,
                      { id: newId("cert"), name: "Certification", issuer: "Issuer", date: "2026" },
                    ],
                  }))
                }
              />
            </div>
            <div className="space-y-3">
              {cv.certifications.map((item) => (
                <div key={item.id} className="grid gap-2 rounded-[8px] border border-slate-200 bg-slate-50/80 p-3 sm:grid-cols-[1fr_1fr_100px_36px]">
                  <TextInput label="Name" value={item.name} onChange={(event) => updateCertification(item.id, { name: event.target.value })} />
                  <TextInput label="Issuer" value={item.issuer} onChange={(event) => updateCertification(item.id, { issuer: event.target.value })} />
                  <TextInput label="Date" value={item.date} onChange={(event) => updateCertification(item.id, { date: event.target.value })} />
                  <div className="pt-6">
                    <DeleteButton
                      label="Delete certification"
                      onClick={() =>
                        setCv((previous) => ({
                          ...previous,
                          certifications: previous.certifications.filter((entry) => entry.id !== item.id),
                        }))
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-black text-slate-900">Awards</h3>
              <AddButton
                label="Add award"
                onClick={() =>
                  setCv((previous) => ({
                    ...previous,
                    awards: [
                      ...previous.awards,
                      { id: newId("award"), title: "Award title", organization: "Organization", date: "2026", description: "Why it matters." },
                    ],
                  }))
                }
              />
            </div>
            <div className="space-y-3">
              {cv.awards.map((item) => (
                <div key={item.id} className="rounded-[8px] border border-slate-200 bg-slate-50/80 p-3">
                  <div className="mb-3 flex justify-end">
                    <DeleteButton
                      label="Delete award"
                      onClick={() =>
                        setCv((previous) => ({
                          ...previous,
                          awards: previous.awards.filter((entry) => entry.id !== item.id),
                        }))
                      }
                    />
                  </div>
                  <div className="grid gap-3 sm:grid-cols-3">
                    <TextInput label="Title" value={item.title} onChange={(event) => updateAward(item.id, { title: event.target.value })} />
                    <TextInput label="Organization" value={item.organization} onChange={(event) => updateAward(item.id, { organization: event.target.value })} />
                    <TextInput label="Date" value={item.date} onChange={(event) => updateAward(item.id, { date: event.target.value })} />
                  </div>
                  <div className="mt-3">
                    <TextArea label="Description" rows={2} value={item.description} onChange={(event) => updateAward(item.id, { description: event.target.value })} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-black text-slate-900">References</h3>
              <AddButton
                label="Add reference"
                onClick={() =>
                  setCv((previous) => ({
                    ...previous,
                    references: [
                      ...previous.references,
                      {
                        id: newId("ref"),
                        name: "Reference name",
                        relationship: "Manager",
                        company: "Company",
                        email: "reference@example.com",
                        phone: "+1 000 000 0000",
                      },
                    ],
                  }))
                }
              />
            </div>
            <div className="space-y-3">
              {cv.references.map((item) => (
                <div key={item.id} className="rounded-[8px] border border-slate-200 bg-slate-50/80 p-3">
                  <div className="mb-3 flex justify-end">
                    <DeleteButton
                      label="Delete reference"
                      onClick={() =>
                        setCv((previous) => ({
                          ...previous,
                          references: previous.references.filter((entry) => entry.id !== item.id),
                        }))
                      }
                    />
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <TextInput label="Name" value={item.name} onChange={(event) => updateReference(item.id, { name: event.target.value })} />
                    <TextInput
                      label="Relationship"
                      value={item.relationship}
                      onChange={(event) => updateReference(item.id, { relationship: event.target.value })}
                    />
                    <TextInput label="Company" value={item.company} onChange={(event) => updateReference(item.id, { company: event.target.value })} />
                    <TextInput label="Email" value={item.email} onChange={(event) => updateReference(item.id, { email: event.target.value })} />
                    <TextInput label="Phone" value={item.phone} onChange={(event) => updateReference(item.id, { phone: event.target.value })} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FormSection>

      <FormSection
        title="Custom sections"
        description="Add extra CV sections such as volunteering, publications, community, or interests."
        icon={<Plus className="h-4 w-4" />}
      >
        <div className="space-y-4">
          {cv.customSections.map((section, index) => (
            <div key={section.id} className="rounded-[8px] border border-slate-200 bg-slate-50/80 p-4">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Section {index + 1}</p>
                <DeleteButton
                  label="Delete custom section"
                  onClick={() =>
                    setCv((previous) => ({
                      ...previous,
                      customSections: previous.customSections.filter((entry) => entry.id !== section.id),
                    }))
                  }
                />
              </div>
              <TextInput label="Section title" value={section.title} onChange={(event) => updateCustomSection(section.id, { title: event.target.value })} />
              <div className="mt-3">
                <TextArea
                  label="Items"
                  rows={4}
                  value={section.items.join("\n")}
                  onChange={(event) => updateCustomSection(section.id, { items: splitLines(event.target.value) })}
                />
              </div>
            </div>
          ))}
          <AddButton
            label="Add custom section"
            onClick={() =>
              setCv((previous) => ({
                ...previous,
                customSections: [
                  ...previous.customSections,
                  { id: newId("custom"), title: "Additional section", items: ["Add a short item."] },
                ],
              }))
            }
          />
        </div>
      </FormSection>
    </div>
  );
}

import type { CVTemplateProps } from "@/types/cv";
import {
  AwardsSection,
  CertificationSection,
  ContactList,
  CustomSections,
  EducationSection,
  LanguageSection,
  Photo,
  ProjectSection,
  ReferencesSection,
  Section,
  SkillsSection,
  WorkSection,
  cn,
} from "./shared";

export default function ColorAccent({ cv, className }: CVTemplateProps) {
  return (
    <article className={cn("cv-paper grid grid-cols-[18px_1fr] font-sans", className)}>
      <div className="bg-[#ef476f]" />
      <div className="px-12 py-10">
        <header className="flex items-center justify-between gap-6">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#118ab2]">{cv.jobTitle}</p>
            <h1 className="mt-2 text-[41px] font-black leading-none text-slate-950">{cv.fullName}</h1>
            <ContactList cv={cv} className="mt-4 text-[10px] text-slate-500" separator=" / " />
          </div>
          <Photo cv={cv} className="h-24 w-24 ring-4 ring-[#ffd166]" />
        </header>

        <main className="mt-8 grid grid-cols-[1fr_240px] gap-8">
          <div className="space-y-5">
            <Section title="Profile" titleClassName="text-[#ef476f]">
              <p className="text-[11px] leading-relaxed text-slate-700">{cv.summary}</p>
            </Section>
            <WorkSection cv={cv} accent="#118ab2" />
            <ProjectSection cv={cv} accent="#118ab2" />
            <EducationSection cv={cv} accent="#118ab2" />
          </div>
          <aside className="space-y-5">
            <SkillsSection cv={cv} pillClassName="border-[#06d6a0]/30 bg-[#06d6a0]/10 text-slate-900" />
            <LanguageSection cv={cv} />
            <CertificationSection cv={cv} />
            <AwardsSection cv={cv} />
            <ReferencesSection cv={cv} />
            <CustomSections sections={cv.customSections} />
          </aside>
        </main>
      </div>
    </article>
  );
}

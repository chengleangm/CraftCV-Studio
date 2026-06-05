import type { CVTemplateProps } from "@/types/cv";
import {
  AwardsSection,
  CertificationSection,
  ContactList,
  CustomSections,
  EducationSection,
  LanguageSection,
  ProjectSection,
  ReferencesSection,
  Section,
  SkillsSection,
  WorkSection,
  cn,
} from "./shared";

export default function AcademicCV({ cv, className }: CVTemplateProps) {
  return (
    <article className={cn("cv-paper px-16 py-11 font-serif", className)}>
      <header className="border-b border-slate-300 pb-5">
        <div className="flex items-end justify-between gap-8">
          <div>
            <h1 className="text-[36px] font-bold leading-tight text-slate-950">{cv.fullName}</h1>
            <p className="text-[13px] text-slate-600">{cv.jobTitle}</p>
          </div>
          <ContactList cv={cv} className="max-w-[300px] justify-end text-right text-[9.8px] leading-relaxed text-slate-600" separator=" / " />
        </div>
      </header>

      <main className="space-y-4 pt-6">
        <Section title="Research Profile" titleClassName="text-slate-950">
          <p className="text-[11px] leading-relaxed text-slate-700">{cv.summary}</p>
        </Section>
        <EducationSection cv={cv} accent="#334155" />
        <WorkSection cv={cv} accent="#334155" />
        <ProjectSection cv={cv} accent="#334155" />
        <div className="grid grid-cols-3 gap-7">
          <SkillsSection cv={cv} pillClassName="rounded-none border-slate-300 bg-white text-slate-800" />
          <LanguageSection cv={cv} />
          <CertificationSection cv={cv} />
        </div>
        <AwardsSection cv={cv} />
        <ReferencesSection cv={cv} />
        <CustomSections sections={cv.customSections} />
      </main>
    </article>
  );
}

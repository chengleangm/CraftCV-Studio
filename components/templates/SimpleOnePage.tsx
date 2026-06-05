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

export default function SimpleOnePage({ cv, className }: CVTemplateProps) {
  return (
    <article className={cn("cv-paper px-12 py-9 font-sans", className)}>
      <header className="flex items-start justify-between gap-6 border-b border-slate-300 pb-4">
        <div>
          <h1 className="text-[31px] font-black leading-tight text-slate-950">{cv.fullName}</h1>
          <p className="text-[12px] font-semibold text-slate-600">{cv.jobTitle}</p>
        </div>
        <ContactList cv={cv} className="max-w-[315px] justify-end text-right text-[9.5px] leading-relaxed text-slate-500" separator=" / " />
      </header>
      <main className="space-y-3.5 pt-4">
        <Section title="Summary">
          <p className="text-[10.5px] leading-relaxed text-slate-700">{cv.summary}</p>
        </Section>
        <WorkSection cv={cv} accent="#111827" />
        <ProjectSection cv={cv} accent="#111827" />
        <EducationSection cv={cv} accent="#111827" />
        <div className="grid grid-cols-4 gap-5">
          <SkillsSection cv={cv} compact pillClassName="rounded-none border-0 bg-transparent px-0 py-0 text-slate-700" />
          <LanguageSection cv={cv} />
          <CertificationSection cv={cv} />
          <AwardsSection cv={cv} />
        </div>
        <ReferencesSection cv={cv} />
        <CustomSections sections={cv.customSections} />
      </main>
    </article>
  );
}

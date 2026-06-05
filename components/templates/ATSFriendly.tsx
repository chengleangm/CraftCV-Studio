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

export default function ATSFriendly({ cv, className }: CVTemplateProps) {
  return (
    <article className={cn("cv-paper px-14 py-12 font-sans shadow-none", className)}>
      <header className="border-b border-slate-300 pb-4">
        <h1 className="text-[34px] font-bold leading-tight text-slate-950">{cv.fullName}</h1>
        <p className="text-[13px] font-semibold text-slate-700">{cv.jobTitle}</p>
        <ContactList cv={cv} className="mt-2 text-[10.5px] text-slate-600" separator=" | " />
      </header>

      <main className="space-y-4 pt-5">
        <Section title="Summary">
          <p className="text-[11px] leading-relaxed text-slate-700">{cv.summary}</p>
        </Section>
        <WorkSection cv={cv} accent="#111827" />
        <EducationSection cv={cv} accent="#111827" />
        <ProjectSection cv={cv} accent="#111827" />
        <SkillsSection cv={cv} pillClassName="rounded-none border-slate-300 bg-white px-0 py-0 text-slate-800" />
        <div className="grid grid-cols-2 gap-8">
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

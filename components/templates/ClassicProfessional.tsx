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

export default function ClassicProfessional({ cv, className }: CVTemplateProps) {
  return (
    <article className={cn("cv-paper px-16 py-12 font-serif", className)}>
      <header className="text-center">
        <h1 className="text-[39px] font-bold leading-tight text-stone-950">{cv.fullName}</h1>
        <p className="mt-1 text-[14px] uppercase tracking-[0.2em] text-stone-600">{cv.jobTitle}</p>
        <ContactList cv={cv} className="mt-4 justify-center text-[10.5px] text-stone-600" separator=" | " />
        <div className="mt-6 border-t-2 border-stone-900" />
      </header>

      <main className="space-y-5 pt-7">
        <Section title="Professional Summary" titleClassName="text-stone-900">
          <p className="text-[11.2px] leading-relaxed text-stone-700">{cv.summary}</p>
        </Section>
        <WorkSection cv={cv} accent="#57534e" />
        <EducationSection cv={cv} accent="#57534e" />
        <ProjectSection cv={cv} accent="#57534e" />
        <div className="grid grid-cols-2 gap-8">
          <SkillsSection cv={cv} pillClassName="rounded-none border-stone-300 bg-white text-stone-800" />
          <div className="space-y-5">
            <LanguageSection cv={cv} />
            <CertificationSection cv={cv} />
            <AwardsSection cv={cv} />
            <ReferencesSection cv={cv} />
          </div>
        </div>
        <CustomSections sections={cv.customSections} />
      </main>
    </article>
  );
}

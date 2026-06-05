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

export default function TwoColumn({ cv, className }: CVTemplateProps) {
  return (
    <article className={cn("cv-paper px-12 py-10 font-sans", className)}>
      <header className="grid grid-cols-[120px_1fr] gap-6 border-b border-slate-200 pb-6">
        <Photo cv={cv} square className="h-28 w-28 rounded-[6px] object-cover" />
        <div>
          <h1 className="text-[40px] font-black leading-tight text-slate-950">{cv.fullName}</h1>
          <p className="text-[14px] font-semibold text-[#7c3aed]">{cv.jobTitle}</p>
          <ContactList cv={cv} className="mt-3 text-[10px] text-slate-500" separator=" | " />
        </div>
      </header>

      <main className="mt-7 grid grid-cols-2 gap-8">
        <div className="space-y-5">
          <Section title="Profile" titleClassName="text-[#7c3aed]">
            <p className="text-[11px] leading-relaxed text-slate-700">{cv.summary}</p>
          </Section>
          <WorkSection cv={cv} accent="#7c3aed" />
          <ProjectSection cv={cv} accent="#7c3aed" />
        </div>
        <div className="space-y-5">
          <EducationSection cv={cv} accent="#7c3aed" />
          <SkillsSection cv={cv} pillClassName="border-violet-100 bg-violet-50 text-violet-950" />
          <LanguageSection cv={cv} />
          <CertificationSection cv={cv} />
          <AwardsSection cv={cv} />
          <ReferencesSection cv={cv} />
          <CustomSections sections={cv.customSections} />
        </div>
      </main>
    </article>
  );
}

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

export default function CorporateBlue({ cv, className }: CVTemplateProps) {
  return (
    <article className={cn("cv-paper font-sans", className)}>
      <header className="bg-[#0f3f75] px-14 py-10 text-white">
        <div className="flex items-center gap-6">
          <Photo cv={cv} className="h-24 w-24 border-4 border-white/80" />
          <div>
            <h1 className="text-[38px] font-black leading-tight">{cv.fullName}</h1>
            <p className="mt-1 text-[14px] font-semibold text-blue-100">{cv.jobTitle}</p>
            <ContactList cv={cv} className="mt-4 text-[10px] text-blue-50" separator="  /  " />
          </div>
        </div>
      </header>

      <main className="grid grid-cols-[1fr_250px] gap-9 px-14 py-9">
        <div className="space-y-5">
          <Section title="Executive Summary" titleClassName="text-[#0f3f75]">
            <p className="text-[11px] leading-relaxed text-slate-700">{cv.summary}</p>
          </Section>
          <WorkSection cv={cv} accent="#0f3f75" />
          <ProjectSection cv={cv} accent="#0f3f75" />
          <EducationSection cv={cv} accent="#0f3f75" />
        </div>
        <aside className="space-y-5 rounded-[6px] bg-blue-50 p-6">
          <SkillsSection cv={cv} pillClassName="border-blue-200 bg-white text-blue-950" />
          <LanguageSection cv={cv} />
          <CertificationSection cv={cv} />
          <AwardsSection cv={cv} />
          <ReferencesSection cv={cv} />
          <CustomSections sections={cv.customSections} />
        </aside>
      </main>
    </article>
  );
}

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

export default function DesignerPortfolio({ cv, className }: CVTemplateProps) {
  return (
    <article className={cn("cv-paper grid grid-cols-[300px_1fr] font-sans", className)}>
      <aside className="bg-[#f45b69] px-8 py-10 text-white">
        <Photo cv={cv} square className="h-44 w-full rounded-[4px] object-cover shadow-xl" />
        <h1 className="mt-8 text-[33px] font-black leading-none">{cv.fullName}</h1>
        <p className="mt-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-white/80">{cv.jobTitle}</p>
        <div className="mt-8 space-y-5 text-white">
          <Section title="Contact" titleClassName="text-white/70">
            <ContactList cv={cv} className="block space-y-1.5 text-[10px] text-white/[0.85]" separator="" />
          </Section>
          <SkillsSection cv={cv} pillClassName="border-white/25 bg-white/[0.12] text-white" />
          <LanguageSection cv={cv} />
        </div>
      </aside>

      <main className="px-10 py-10">
        <div className="mb-6 border-l-4 border-[#f45b69] pl-5">
          <p className="text-[12px] leading-relaxed text-slate-700">{cv.summary}</p>
        </div>
        <div className="space-y-5">
          <ProjectSection cv={cv} accent="#f45b69" />
          <WorkSection cv={cv} accent="#f45b69" />
          <EducationSection cv={cv} accent="#f45b69" />
          <div className="grid grid-cols-2 gap-6">
            <CertificationSection cv={cv} />
            <AwardsSection cv={cv} />
          </div>
          <ReferencesSection cv={cv} />
          <CustomSections sections={cv.customSections} />
        </div>
      </main>
    </article>
  );
}

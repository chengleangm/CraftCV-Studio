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

export default function ModernMinimal({ cv, className }: CVTemplateProps) {
  return (
    <article className={cn("cv-paper px-14 py-12 font-sans", className)}>
      <header className="flex items-center gap-6 border-b border-slate-200 pb-8">
        <Photo cv={cv} className="h-28 w-28 ring-4 ring-teal-100" />
        <div className="min-w-0 flex-1">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-teal-600">Professional CV</p>
          <h1 className="text-[42px] font-black leading-none text-slate-950">{cv.fullName}</h1>
          <p className="mt-2 text-[15px] font-semibold text-slate-500">{cv.jobTitle}</p>
          <ContactList cv={cv} className="mt-4 text-[10px] text-slate-500" separator="   " />
        </div>
      </header>

      <main className="grid grid-cols-[1fr_235px] gap-9 pt-8">
        <div className="space-y-6">
          <Section title="Profile" titleClassName="text-teal-700">
            <p className="text-[11px] leading-relaxed text-slate-700">{cv.summary}</p>
          </Section>
          <WorkSection cv={cv} accent="#0f766e" />
          <ProjectSection cv={cv} accent="#0f766e" />
          <EducationSection cv={cv} accent="#0f766e" />
        </div>

        <aside className="space-y-5 border-l border-slate-200 pl-7">
          <SkillsSection cv={cv} pillClassName="border-teal-100 bg-teal-50 text-teal-900" />
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

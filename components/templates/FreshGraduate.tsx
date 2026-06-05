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

export default function FreshGraduate({ cv, className }: CVTemplateProps) {
  return (
    <article className={cn("cv-paper px-12 py-10 font-sans", className)}>
      <header className="grid grid-cols-[1fr_120px] items-center gap-8 rounded-[8px] bg-[#f1f8e9] p-7">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.22em] text-lime-700">Fresh graduate profile</p>
          <h1 className="mt-2 text-[38px] font-black leading-none text-slate-950">{cv.fullName}</h1>
          <p className="mt-2 text-[13px] font-semibold text-slate-600">{cv.jobTitle}</p>
          <ContactList cv={cv} className="mt-4 text-[9.8px] text-slate-600" separator="  /  " />
        </div>
        <Photo cv={cv} className="h-28 w-28 ring-4 ring-white" />
      </header>

      <main className="mt-7 grid grid-cols-[1fr_240px] gap-8">
        <div className="space-y-5">
          <Section title="Profile" titleClassName="text-lime-700">
            <p className="text-[11px] leading-relaxed text-slate-700">{cv.summary}</p>
          </Section>
          <EducationSection cv={cv} accent="#4d7c0f" />
          <ProjectSection cv={cv} accent="#4d7c0f" />
          <WorkSection cv={cv} accent="#4d7c0f" />
        </div>
        <aside className="space-y-5 border-l border-lime-200 pl-7">
          <SkillsSection cv={cv} pillClassName="border-lime-200 bg-lime-50 text-lime-950" />
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

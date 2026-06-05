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

export default function StartupTech({ cv, className }: CVTemplateProps) {
  return (
    <article className={cn("cv-paper bg-[#f8fbfd] px-10 py-9 font-sans", className)}>
      <header className="rounded-[8px] bg-white p-8 shadow-[0_14px_40px_rgba(30,41,59,0.10)]">
        <div className="flex items-center justify-between gap-6">
          <div>
            <p className="mb-2 inline-flex rounded-full bg-cyan-100 px-3 py-1 text-[9px] font-black uppercase tracking-[0.18em] text-cyan-800">
              Startup ready
            </p>
            <h1 className="text-[39px] font-black leading-none text-slate-950">{cv.fullName}</h1>
            <p className="mt-2 text-[14px] font-semibold text-slate-500">{cv.jobTitle}</p>
          </div>
          <Photo cv={cv} className="h-24 w-24 ring-4 ring-cyan-100" />
        </div>
        <ContactList cv={cv} className="mt-6 rounded-[6px] bg-slate-950 px-4 py-3 text-[10px] text-white/[0.85]" separator="  +  " />
      </header>

      <main className="mt-8 grid grid-cols-[1fr_245px] gap-8">
        <div className="space-y-5 rounded-[8px] bg-white p-7 shadow-sm">
          <Section title="Signal" titleClassName="text-cyan-700">
            <p className="text-[11px] leading-relaxed text-slate-700">{cv.summary}</p>
          </Section>
          <WorkSection cv={cv} accent="#0891b2" />
          <ProjectSection cv={cv} accent="#0891b2" />
        </div>
        <aside className="space-y-5 rounded-[8px] bg-white p-6 shadow-sm">
          <SkillsSection cv={cv} pillClassName="border-cyan-100 bg-cyan-50 text-cyan-950" />
          <EducationSection cv={cv} accent="#0891b2" />
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

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

export default function DarkPremium({ cv, className }: CVTemplateProps) {
  return (
    <article className={cn("cv-paper bg-[#111827] px-10 py-10 font-sans text-white", className)}>
      <header className="rounded-[8px] border border-white/10 bg-white/[0.08] p-8">
        <div className="flex items-center gap-6">
          <Photo cv={cv} className="h-28 w-28 ring-4 ring-[#38bdf8]" />
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#38bdf8]">{cv.jobTitle}</p>
            <h1 className="mt-2 text-[40px] font-black leading-none text-white">{cv.fullName}</h1>
            <ContactList cv={cv} className="mt-4 text-[10px] text-white/[0.65]" separator=" / " />
          </div>
        </div>
      </header>

      <main className="mt-7 grid grid-cols-[1fr_235px] gap-7">
        <div className="space-y-5 rounded-[8px] bg-white p-7 text-slate-950">
          <Section title="Profile" titleClassName="text-sky-600">
            <p className="text-[11px] leading-relaxed text-slate-700">{cv.summary}</p>
          </Section>
          <WorkSection cv={cv} accent="#0284c7" />
          <ProjectSection cv={cv} accent="#0284c7" />
          <EducationSection cv={cv} accent="#0284c7" />
        </div>
        <aside className="space-y-5 rounded-[8px] border border-white/10 bg-white/[0.08] p-6">
          <SkillsSection cv={cv} pillClassName="border-white/[0.15] bg-white/10 text-white" />
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

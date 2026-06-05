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

export default function ElegantBlackWhite({ cv, className }: CVTemplateProps) {
  return (
    <article className={cn("cv-paper font-serif", className)}>
      <header className="bg-black px-16 py-12 text-white">
        <p className="text-[10px] uppercase tracking-[0.32em] text-white/60">{cv.jobTitle}</p>
        <h1 className="mt-3 max-w-[560px] text-[44px] font-bold leading-none">{cv.fullName}</h1>
        <ContactList cv={cv} className="mt-5 text-[10.5px] text-white/75" separator=" / " />
      </header>
      <main className="grid grid-cols-[1fr_220px] gap-10 px-16 py-10">
        <div className="space-y-5">
          <Section title="Profile">
            <p className="text-[11.2px] leading-relaxed text-neutral-700">{cv.summary}</p>
          </Section>
          <WorkSection cv={cv} accent="#000000" />
          <EducationSection cv={cv} accent="#000000" />
          <ProjectSection cv={cv} accent="#000000" />
        </div>
        <aside className="space-y-5 border-l-2 border-black pl-7">
          <SkillsSection cv={cv} pillClassName="rounded-none border-black/20 bg-neutral-50 text-black" />
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

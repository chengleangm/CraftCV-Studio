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

export default function LuxuryGold({ cv, className }: CVTemplateProps) {
  return (
    <article className={cn("cv-paper bg-[#fbfaf7] font-serif", className)}>
      <header className="grid grid-cols-[1fr_170px] items-center gap-8 border-b border-[#c9a227] px-14 py-11">
        <div>
          <p className="text-[10px] uppercase tracking-[0.34em] text-[#9c7a10]">Luxury profile</p>
          <h1 className="mt-2 text-[43px] font-bold leading-none text-[#191816]">{cv.fullName}</h1>
          <p className="mt-3 text-[14px] text-[#5f533c]">{cv.jobTitle}</p>
          <ContactList cv={cv} className="mt-4 text-[10px] text-[#5f533c]" separator=" / " />
        </div>
        <Photo cv={cv} className="h-32 w-32 border-4 border-[#c9a227]" />
      </header>

      <main className="grid grid-cols-[1fr_245px] gap-9 px-14 py-9">
        <div className="space-y-5">
          <Section title="Profile" titleClassName="text-[#9c7a10]">
            <p className="text-[11px] leading-relaxed text-stone-700">{cv.summary}</p>
          </Section>
          <WorkSection cv={cv} accent="#9c7a10" />
          <ProjectSection cv={cv} accent="#9c7a10" />
          <EducationSection cv={cv} accent="#9c7a10" />
        </div>
        <aside className="space-y-5 bg-[#191816] p-6 text-white">
          <SkillsSection cv={cv} pillClassName="border-[#c9a227]/40 bg-[#c9a227]/10 text-white" />
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

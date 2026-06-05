import type { CVTemplateProps } from "@/types/cv";
import {
  AwardsSection,
  CertificationSection,
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

export default function EuropeanStyle({ cv, className }: CVTemplateProps) {
  return (
    <article className={cn("cv-paper grid grid-cols-[210px_1fr] font-sans", className)}>
      <aside className="border-r border-slate-200 bg-[#f4f6f8] px-6 py-10">
        <Photo cv={cv} square className="h-32 w-full rounded-[2px] object-cover" />
        <div className="mt-6 space-y-5">
          <Section title="Personal Details" titleClassName="text-[#26547c]">
            <div className="space-y-2 text-[10px] leading-relaxed text-slate-700">
              {[cv.email, cv.phone, cv.address, cv.website, cv.linkedIn].filter(Boolean).map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </Section>
          <LanguageSection cv={cv} />
          <SkillsSection cv={cv} pillClassName="rounded-none border-slate-200 bg-white text-slate-800" />
        </div>
      </aside>

      <main className="px-10 py-10">
        <header className="border-b-4 border-[#26547c] pb-5">
          <h1 className="text-[36px] font-black leading-tight text-slate-950">{cv.fullName}</h1>
          <p className="mt-1 text-[12px] font-bold uppercase tracking-[0.2em] text-[#26547c]">{cv.jobTitle}</p>
        </header>
        <div className="mt-6 space-y-5">
          <Section title="Profile" titleClassName="text-[#26547c]">
            <p className="text-[11px] leading-relaxed text-slate-700">{cv.summary}</p>
          </Section>
          <WorkSection cv={cv} accent="#26547c" />
          <EducationSection cv={cv} accent="#26547c" />
          <ProjectSection cv={cv} accent="#26547c" />
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

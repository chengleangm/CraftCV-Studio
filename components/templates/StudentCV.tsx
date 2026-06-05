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

export default function StudentCV({ cv, className }: CVTemplateProps) {
  return (
    <article className={cn("cv-paper grid grid-cols-[235px_1fr] bg-white font-sans", className)}>
      <aside className="bg-[#eaf7f2] px-7 py-9">
        <Photo cv={cv} className="h-28 w-28 border-4 border-white" />
        <h1 className="mt-5 text-[25px] font-black leading-tight text-emerald-950">{cv.fullName}</h1>
        <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">{cv.jobTitle}</p>
        <div className="mt-7 space-y-5">
          <Section title="Contact" titleClassName="text-emerald-700">
            <div className="space-y-1.5 text-[10px] leading-relaxed text-slate-700">
              {[cv.email, cv.phone, cv.address, cv.website, cv.linkedIn].filter(Boolean).map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </Section>
          <EducationSection cv={cv} accent="#047857" />
          <SkillsSection cv={cv} pillClassName="border-emerald-100 bg-white text-emerald-950" />
          <LanguageSection cv={cv} />
        </div>
      </aside>

      <main className="px-10 py-9">
        <div className="rounded-[8px] border border-emerald-100 bg-emerald-50/70 p-5">
          <Section title="About" titleClassName="text-emerald-700">
            <p className="text-[10.8px] leading-relaxed text-slate-700">{cv.summary}</p>
          </Section>
        </div>
        <div className="mt-6 space-y-5">
          <ProjectSection cv={cv} accent="#047857" />
          <WorkSection cv={cv} accent="#047857" />
          <CertificationSection cv={cv} />
          <AwardsSection cv={cv} />
          <ReferencesSection cv={cv} />
          <CustomSections sections={cv.customSections} />
        </div>
      </main>
    </article>
  );
}

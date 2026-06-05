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

export default function KhmerProfessional({ cv, className }: CVTemplateProps) {
  return (
    <article className={cn("cv-paper bg-[#fbfcfd] px-12 py-10 font-sans", className)}>
      <header className="grid grid-cols-[128px_1fr] gap-7 border-b-4 border-[#1d4ed8] pb-7">
        <div className="rounded-[8px] bg-[#dc2626] p-2">
          <Photo cv={cv} square className="h-28 w-28 rounded-[4px] object-cover" />
        </div>
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#dc2626]">Modern Khmer Professional</p>
          <h1 className="mt-2 text-[40px] font-black leading-none text-slate-950">{cv.fullName}</h1>
          <p className="mt-2 text-[14px] font-semibold text-[#1d4ed8]">{cv.jobTitle}</p>
          <ContactList cv={cv} className="mt-4 text-[10px] text-slate-600" separator=" / " />
        </div>
      </header>

      <main className="mt-7 grid grid-cols-[1fr_245px] gap-8">
        <div className="space-y-5">
          <Section title="Professional Profile" titleClassName="text-[#1d4ed8]">
            <p className="text-[11px] leading-relaxed text-slate-700">{cv.summary}</p>
          </Section>
          <WorkSection cv={cv} accent="#1d4ed8" />
          <ProjectSection cv={cv} accent="#1d4ed8" />
          <EducationSection cv={cv} accent="#1d4ed8" />
        </div>
        <aside className="space-y-5 rounded-[8px] border border-slate-200 bg-white p-6">
          <SkillsSection cv={cv} pillClassName="border-blue-100 bg-blue-50 text-blue-950" />
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

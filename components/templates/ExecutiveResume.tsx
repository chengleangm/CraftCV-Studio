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

export default function ExecutiveResume({ cv, className }: CVTemplateProps) {
  return (
    <article className={cn("cv-paper px-14 py-12 font-sans", className)}>
      <header className="border-b-[3px] border-[#b08d57] pb-7">
        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#b08d57]">Executive resume</p>
        <div className="mt-2 flex items-end justify-between gap-6">
          <div>
            <h1 className="text-[42px] font-black leading-none text-slate-950">{cv.fullName}</h1>
            <p className="mt-2 text-[15px] font-semibold text-slate-600">{cv.jobTitle}</p>
          </div>
          <ContactList cv={cv} className="max-w-[310px] justify-end text-right text-[10px] leading-relaxed text-slate-500" separator=" / " />
        </div>
      </header>

      <div className="my-7 grid grid-cols-3 gap-3 text-center">
        {["Launch governance", "Operational scale", "Customer insight"].map((label) => (
          <div key={label} className="rounded-[6px] border border-[#b08d57]/25 bg-[#fbf7ef] px-4 py-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8a6a37]">{label}</p>
          </div>
        ))}
      </div>

      <main className="grid grid-cols-[1fr_245px] gap-9">
        <div className="space-y-5">
          <Section title="Leadership Profile" titleClassName="text-[#8a6a37]">
            <p className="text-[11.2px] leading-relaxed text-slate-700">{cv.summary}</p>
          </Section>
          <WorkSection cv={cv} accent="#8a6a37" />
          <ProjectSection cv={cv} accent="#8a6a37" />
          <EducationSection cv={cv} accent="#8a6a37" />
        </div>
        <aside className="space-y-5">
          <SkillsSection cv={cv} pillClassName="rounded-none border-[#b08d57]/30 bg-white text-[#624a25]" />
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

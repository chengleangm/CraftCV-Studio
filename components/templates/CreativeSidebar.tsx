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

export default function CreativeSidebar({ cv, className }: CVTemplateProps) {
  return (
    <article className={cn("cv-paper grid grid-cols-[255px_1fr] font-sans", className)}>
      <aside className="bg-[#17324d] px-8 py-10 text-white">
        <Photo cv={cv} square className="h-36 w-36 border-4 border-white/90 object-cover" />
        <div className="mt-8 h-1 w-20 bg-[#ffb86b]" />
        <div className="mt-8 space-y-6">
          <Section title="Contact" titleClassName="text-[#ffb86b]">
            <div className="space-y-2 text-[10.5px] leading-relaxed text-white/[0.82]">
              {[cv.email, cv.phone, cv.address, cv.website, cv.linkedIn].filter(Boolean).map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </Section>
          <SkillsSection cv={cv} pillClassName="border-white/20 bg-white/10 text-white" />
          <LanguageSection cv={cv} />
          <CertificationSection cv={cv} />
        </div>
      </aside>

      <main className="px-11 py-10">
        <header className="border-b border-[#ffb86b] pb-6">
          <p className="text-[10px] font-black uppercase tracking-[0.26em] text-[#e76f51]">{cv.jobTitle}</p>
          <h1 className="mt-2 text-[42px] font-black leading-[0.95] text-slate-950">{cv.fullName}</h1>
        </header>
        <div className="mt-6 space-y-5">
          <Section title="About" titleClassName="text-[#17324d]">
            <p className="text-[11px] leading-relaxed text-slate-700">{cv.summary}</p>
          </Section>
          <WorkSection cv={cv} accent="#e76f51" />
          <ProjectSection cv={cv} accent="#e76f51" />
          <EducationSection cv={cv} accent="#e76f51" />
          <AwardsSection cv={cv} />
          <ReferencesSection cv={cv} />
          <CustomSections sections={cv.customSections} />
        </div>
      </main>
    </article>
  );
}

import type { CVTemplateProps } from "@/types/cv";
import {
  AwardsSection,
  CertificationSection,
  ContactList,
  CustomSections,
  LanguageSection,
  Photo,
  ProjectSection,
  ReferencesSection,
  Section,
  SkillsSection,
  cn,
} from "./shared";

export default function TimelineResume({ cv, className }: CVTemplateProps) {
  return (
    <article className={cn("cv-paper px-12 py-10 font-sans", className)}>
      <header className="flex items-center gap-6">
        <Photo cv={cv} className="h-24 w-24 ring-4 ring-orange-100" />
        <div>
          <h1 className="text-[39px] font-black leading-none text-slate-950">{cv.fullName}</h1>
          <p className="mt-2 text-[13px] font-bold uppercase tracking-[0.18em] text-orange-600">{cv.jobTitle}</p>
          <ContactList cv={cv} className="mt-3 text-[10px] text-slate-500" separator=" / " />
        </div>
      </header>

      <main className="mt-8 grid grid-cols-[1fr_230px] gap-8">
        <div className="space-y-5">
          <Section title="Profile" titleClassName="text-orange-600">
            <p className="text-[11px] leading-relaxed text-slate-700">{cv.summary}</p>
          </Section>
          <Section title="Timeline" titleClassName="text-orange-600">
            <div className="relative space-y-4 border-l-2 border-orange-200 pl-5">
              {[...cv.workExperience, ...cv.education].map((item) => {
                const title = "role" in item ? item.role : item.degree;
                const org = "company" in item ? item.company : item.institution;
                const body = "description" in item ? item.description : item.details;
                return (
                  <article key={item.id} className="cv-item relative">
                    <span className="absolute -left-[27px] top-1 h-3 w-3 rounded-full border-2 border-white bg-orange-500" />
                    <div className="flex justify-between gap-4">
                      <div>
                        <h3 className="text-[13px] font-bold text-slate-950">{title}</h3>
                        <p className="text-[10.5px] font-semibold text-orange-700">{org}</p>
                      </div>
                      <p className="text-right text-[10px] text-slate-500">
                        {item.startDate} - {item.endDate}
                      </p>
                    </div>
                    {body ? <p className="mt-1 text-[10px] leading-relaxed text-slate-700">{body}</p> : null}
                  </article>
                );
              })}
            </div>
          </Section>
          <ProjectSection cv={cv} accent="#ea580c" />
        </div>
        <aside className="space-y-5 rounded-[8px] bg-orange-50 p-6">
          <SkillsSection cv={cv} pillClassName="border-orange-100 bg-white text-orange-950" />
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

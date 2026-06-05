import type { CVData, CustomSection, CVTemplateProps } from "@/types/cv";
import Image from "next/image";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Photo({
  cv,
  className,
  square = false,
}: {
  cv: CVData;
  className?: string;
  square?: boolean;
}) {
  if (!cv.profilePhoto) return null;

  return (
    <Image
      src={cv.profilePhoto}
      alt={`${cv.fullName} profile`}
      width={320}
      height={320}
      unoptimized
      className={cn(
        "object-cover",
        square ? "rounded-none" : "rounded-full",
        className ?? "h-24 w-24",
      )}
    />
  );
}

export function ContactList({
  cv,
  className,
  itemClassName,
  separator = " / ",
}: {
  cv: CVData;
  className?: string;
  itemClassName?: string;
  separator?: string;
}) {
  const items = [cv.email, cv.phone, cv.address, cv.website, cv.linkedIn].filter(Boolean);

  return (
    <div className={cn("flex flex-wrap", className)}>
      {items.map((item, index) => (
        <span key={item} className={itemClassName}>
          {item}
          {index < items.length - 1 ? <span className="opacity-50">{separator}</span> : null}
        </span>
      ))}
    </div>
  );
}

export function Section({
  title,
  children,
  className,
  titleClassName,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
}) {
  return (
    <section className={cn("cv-section-title", className)}>
      <h2 className={cn("mb-2 text-[10px] font-bold uppercase tracking-[0.18em]", titleClassName)}>{title}</h2>
      {children}
    </section>
  );
}

export function WorkSection({ cv, accent = "#111827" }: CVTemplateProps & { accent?: string }) {
  if (!cv.workExperience.length) return null;

  return (
    <Section title="Experience">
      <div className="space-y-3">
        {cv.workExperience.map((item) => (
          <article key={item.id} className="cv-item">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-[14px] font-bold leading-tight">{item.role}</h3>
                <p className="text-[11px] font-semibold" style={{ color: accent }}>
                  {item.company}
                </p>
              </div>
              <p className="shrink-0 text-right text-[10px] text-slate-500">
                {item.startDate} - {item.endDate}
                {item.location ? <span className="block">{item.location}</span> : null}
              </p>
            </div>
            {item.description ? <p className="mt-1 text-[10.5px] leading-relaxed text-slate-700">{item.description}</p> : null}
            {item.highlights.length ? (
              <ul className="mt-1 list-disc space-y-0.5 pl-4 text-[10px] leading-relaxed text-slate-700">
                {item.highlights.filter(Boolean).map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </Section>
  );
}

export function EducationSection({ cv, accent = "#111827" }: CVTemplateProps & { accent?: string }) {
  if (!cv.education.length) return null;

  return (
    <Section title="Education">
      <div className="space-y-2.5">
        {cv.education.map((item) => (
          <article key={item.id} className="cv-item">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-[12px] font-bold leading-tight">{item.degree}</h3>
                <p className="text-[10.5px] font-semibold" style={{ color: accent }}>
                  {item.institution}
                </p>
              </div>
              <p className="shrink-0 text-right text-[10px] text-slate-500">
                {item.startDate} - {item.endDate}
                {item.location ? <span className="block">{item.location}</span> : null}
              </p>
            </div>
            {item.details ? <p className="mt-1 text-[10px] leading-relaxed text-slate-700">{item.details}</p> : null}
          </article>
        ))}
      </div>
    </Section>
  );
}

export function ProjectSection({ cv, accent = "#111827" }: CVTemplateProps & { accent?: string }) {
  if (!cv.projects.length) return null;

  return (
    <Section title="Projects">
      <div className="space-y-2.5">
        {cv.projects.map((item) => (
          <article key={item.id} className="cv-item">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-[12px] font-bold">{item.name}</h3>
                <p className="text-[10.5px] font-semibold" style={{ color: accent }}>
                  {item.role}
                </p>
              </div>
              {item.url ? <p className="text-right text-[9.5px] text-slate-500">{item.url}</p> : null}
            </div>
            {item.description ? <p className="mt-1 text-[10px] leading-relaxed text-slate-700">{item.description}</p> : null}
            {item.highlights.length ? (
              <ul className="mt-1 list-disc space-y-0.5 pl-4 text-[10px] leading-relaxed text-slate-700">
                {item.highlights.filter(Boolean).map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </Section>
  );
}

export function SkillsSection({
  cv,
  pillClassName,
  compact = false,
}: CVTemplateProps & {
  pillClassName?: string;
  compact?: boolean;
}) {
  if (!cv.skills.length) return null;

  return (
    <Section title="Skills">
      <div className={cn("flex flex-wrap gap-1.5", compact && "gap-1")}>
        {cv.skills.map((skill) => (
          <span
            key={skill.id}
            className={cn(
              "rounded-full border border-slate-200 px-2 py-1 text-[9.5px] font-semibold text-slate-700",
              pillClassName,
            )}
          >
            {skill.name}
            {skill.level ? <span className="font-normal opacity-70"> - {skill.level}</span> : null}
          </span>
        ))}
      </div>
    </Section>
  );
}

export function LanguageSection({ cv }: CVTemplateProps) {
  if (!cv.languages.length) return null;

  return (
    <Section title="Languages">
      <div className="space-y-1">
        {cv.languages.map((language) => (
          <div key={language.id} className="flex items-center justify-between gap-3 text-[10px]">
            <span className="font-semibold">{language.name}</span>
            <span className="text-slate-500">{language.level}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function CertificationSection({ cv }: CVTemplateProps) {
  if (!cv.certifications.length) return null;

  return (
    <Section title="Certifications">
      <div className="space-y-1.5">
        {cv.certifications.map((item) => (
          <div key={item.id} className="cv-item text-[10px] leading-snug">
            <p className="font-bold">{item.name}</p>
            <p className="text-slate-500">
              {item.issuer}
              {item.date ? `, ${item.date}` : ""}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function AwardsSection({ cv }: CVTemplateProps) {
  if (!cv.awards.length) return null;

  return (
    <Section title="Awards">
      <div className="space-y-1.5">
        {cv.awards.map((item) => (
          <div key={item.id} className="cv-item text-[10px] leading-relaxed">
            <p className="font-bold">{item.title}</p>
            <p className="text-slate-500">
              {item.organization}
              {item.date ? `, ${item.date}` : ""}
            </p>
            {item.description ? <p className="text-slate-700">{item.description}</p> : null}
          </div>
        ))}
      </div>
    </Section>
  );
}

export function ReferencesSection({ cv }: CVTemplateProps) {
  if (!cv.references.length) return null;

  return (
    <Section title="References">
      <div className="space-y-1.5">
        {cv.references.map((item) => (
          <div key={item.id} className="cv-item text-[10px] leading-relaxed">
            <p className="font-bold">{item.name}</p>
            <p className="text-slate-600">
              {item.relationship}
              {item.company ? `, ${item.company}` : ""}
            </p>
            <p className="text-slate-500">
              {[item.email, item.phone].filter(Boolean).join(" / ")}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function CustomSections({ sections }: { sections: CustomSection[] }) {
  if (!sections.length) return null;

  return (
    <>
      {sections.map((section) => (
        <Section key={section.id} title={section.title}>
          <ul className="list-disc space-y-0.5 pl-4 text-[10px] leading-relaxed text-slate-700">
            {section.items.filter(Boolean).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>
      ))}
    </>
  );
}

export function SidebarBasics({ cv, dark = false }: CVTemplateProps & { dark?: boolean }) {
  return (
    <div className="space-y-4">
      <Photo cv={cv} className="h-24 w-24 border-4 border-white shadow-md" />
      <Section title="Contact" titleClassName={dark ? "text-white/70" : undefined}>
        <div className={cn("space-y-1.5 text-[10px] leading-relaxed", dark ? "text-white/[0.82]" : "text-slate-700")}>
          {[cv.email, cv.phone, cv.address, cv.website, cv.linkedIn].filter(Boolean).map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </Section>
      <SkillsSection
        cv={cv}
        compact
        pillClassName={dark ? "border-white/20 bg-white/10 text-white" : "border-slate-200 bg-white"}
      />
      <LanguageSection cv={cv} />
      <CertificationSection cv={cv} />
    </div>
  );
}

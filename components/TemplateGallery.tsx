"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, LayoutGrid } from "lucide-react";
import Link from "next/link";
import { templates } from "@/data/templates";
import type { TemplateMeta } from "@/types/cv";

interface TemplateGalleryProps {
  limit?: number;
  showHeader?: boolean;
}

function MiniTemplate({ template }: { template: TemplateMeta }) {
  const commonLine = "h-1.5 rounded-full bg-slate-200";

  if (template.layout === "sidebar") {
    return (
      <div className="grid h-full grid-cols-[32%_1fr] bg-white">
        <div className="p-2" style={{ backgroundColor: template.accent }}>
          <div className="h-8 rounded-full bg-white/75" />
          <div className="mt-4 space-y-1.5">
            <div className="h-1.5 rounded-full bg-white/75" />
            <div className="h-1.5 rounded-full bg-white/55" />
            <div className="h-1.5 w-2/3 rounded-full bg-white/55" />
          </div>
        </div>
        <div className="space-y-2 p-3">
          <div className="h-4 rounded-full bg-slate-900" />
          <div className={commonLine} />
          <div className="mt-4 h-2 rounded-full" style={{ backgroundColor: template.accent }} />
          <div className={commonLine} />
          <div className={commonLine} />
          <div className="h-1.5 w-2/3 rounded-full bg-slate-200" />
        </div>
      </div>
    );
  }

  if (template.layout === "timeline") {
    return (
      <div className="h-full bg-white p-3">
        <div className="h-4 w-3/5 rounded-full bg-slate-900" />
        <div className="mt-2 h-2 w-2/5 rounded-full" style={{ backgroundColor: template.accent }} />
        <div className="mt-5 space-y-3 border-l-2 pl-3" style={{ borderColor: template.accent }}>
          {[0, 1, 2].map((item) => (
            <div key={item}>
              <div className="h-2 rounded-full bg-slate-300" />
              <div className="mt-1.5 h-1.5 w-4/5 rounded-full bg-slate-200" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (template.layout === "ats" || template.layout === "one-column") {
    return (
      <div className="h-full bg-white p-3">
        <div className="h-4 w-3/5 rounded-full bg-slate-900" />
        <div className="mt-2 h-1.5 w-4/5 rounded-full bg-slate-200" />
        <div className="mt-4 h-2 rounded-full" style={{ backgroundColor: template.accent }} />
        <div className="mt-3 space-y-2">
          {[0, 1, 2, 3, 4, 5].map((item) => (
            <div key={item} className={item % 2 ? "h-1.5 w-4/5 rounded-full bg-slate-200" : commonLine} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-white p-3">
      <div className="h-4 w-3/5 rounded-full bg-slate-900" />
      <div className="mt-2 h-2 w-2/5 rounded-full" style={{ backgroundColor: template.accent }} />
      <div className="mt-5 grid grid-cols-[1fr_38%] gap-3">
        <div className="space-y-2">
          <div className={commonLine} />
          <div className={commonLine} />
          <div className="h-1.5 w-3/4 rounded-full bg-slate-200" />
          <div className="mt-4 h-2 rounded-full" style={{ backgroundColor: template.accent }} />
          <div className={commonLine} />
          <div className={commonLine} />
        </div>
        <div className="space-y-2 rounded-[4px] bg-slate-50 p-2">
          <div className="h-2 rounded-full bg-slate-300" />
          <div className={commonLine} />
          <div className={commonLine} />
          <div className="h-1.5 w-2/3 rounded-full bg-slate-200" />
        </div>
      </div>
    </div>
  );
}

export default function TemplateGallery({ limit, showHeader = true }: TemplateGalleryProps) {
  const visibleTemplates = limit ? templates.slice(0, limit) : templates;

  return (
    <section className="mx-auto max-w-7xl px-4 py-14">
      {showHeader ? (
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-black text-slate-700 shadow-sm">
              <LayoutGrid className="h-4 w-4 text-teal-600" />
              Template gallery
            </div>
            <h2 className="text-3xl font-black text-slate-950 sm:text-4xl">Choose a professional starting point.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
              Each template has a different layout, typography, spacing system, header style, and color direction while keeping A4 export in mind.
            </p>
          </div>
          {limit ? (
            <Link href="/templates" className="inline-flex items-center gap-2 rounded-[8px] bg-white px-4 py-2.5 text-sm font-black text-slate-700 shadow-sm">
              Browse all
              <ArrowRight className="h-4 w-4" />
            </Link>
          ) : null}
        </div>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visibleTemplates.map((template, index) => (
          <motion.article
            key={template.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.25, delay: Math.min(index * 0.025, 0.25) }}
            className="group rounded-[10px] border border-white/80 bg-white/[0.82] p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="h-56 overflow-hidden rounded-[8px] border border-slate-200 bg-slate-100">
              <MiniTemplate template={template} />
            </div>
            <div className="p-2">
              <div className="mt-3 flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-base font-black text-slate-950">{template.name}</h3>
                  <p className="mt-1 min-h-[48px] text-xs leading-relaxed text-slate-500">{template.description}</p>
                </div>
                <span className="mt-1 h-4 w-4 shrink-0 rounded-full" style={{ backgroundColor: template.accent }} />
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {template.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-1 text-[10px] font-bold text-slate-600">
                    <Check className="h-3 w-3" />
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/builder?template=${template.id}`}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-[8px] bg-slate-950 px-3 py-2.5 text-sm font-black text-white transition group-hover:bg-slate-800"
              >
                Use template
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

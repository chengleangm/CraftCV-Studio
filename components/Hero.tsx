"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, FileDown, LayoutTemplate, PenLine } from "lucide-react";
import Link from "next/link";
import { templates } from "@/data/templates";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/70 soft-grid">
      <div className="mx-auto grid min-h-[620px] max-w-7xl items-center gap-10 px-4 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:py-20">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="relative z-10">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-black text-slate-700 shadow-sm">
            <CheckCircle2 className="h-4 w-4 text-teal-600" />
            Autosave, live preview, A4 PDF export
          </div>
          <h1 className="max-w-3xl text-5xl font-black leading-[0.98] text-slate-950 sm:text-6xl lg:text-7xl">
            Build a polished CV without fighting the layout.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            CraftCV Studio combines a structured editor, instant template switching, photo upload, and precise PDF export in a clean SaaS workspace.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/builder"
              className="inline-flex items-center gap-2 rounded-[8px] bg-slate-950 px-5 py-3 text-sm font-black text-white shadow-xl shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              <PenLine className="h-4 w-4" />
              Start building
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/templates"
              className="inline-flex items-center gap-2 rounded-[8px] border border-slate-200 bg-white px-5 py-3 text-sm font-black text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300"
            >
              <LayoutTemplate className="h-4 w-4" />
              View templates
            </Link>
          </div>
          <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
            {[
              ["20", "templates"],
              ["A4", "export"],
              ["Local", "autosave"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-[8px] border border-white/80 bg-white/75 p-4 shadow-sm backdrop-blur">
                <p className="text-2xl font-black text-slate-950">{value}</p>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, rotate: 1 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative z-10"
        >
          <div className="glass-card rounded-[12px] p-4">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-black text-slate-950">Live CV workspace</p>
                <p className="text-xs text-slate-500">Editor, template picker, preview, export</p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-1.5 text-xs font-black text-teal-700">
                <FileDown className="h-3.5 w-3.5" />
                PDF
              </span>
            </div>
            <div className="grid gap-4 md:grid-cols-[220px_1fr]">
              <div className="rounded-[10px] bg-slate-950 p-4 text-white">
                <div className="mb-4 h-3 w-24 rounded-full bg-white/30" />
                <div className="space-y-3">
                  {["Profile", "Experience", "Education", "Projects", "Skills"].map((item) => (
                    <div key={item} className="rounded-[8px] bg-white/10 px-3 py-2 text-xs font-bold text-white/80">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {templates.slice(0, 4).map((template, index) => (
                  <motion.div
                    key={template.id}
                    animate={{ y: index % 2 === 0 ? [0, -6, 0] : [0, 6, 0] }}
                    transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut" }}
                    className="min-h-[180px] rounded-[8px] border border-slate-200 bg-white p-3 shadow-sm"
                  >
                    <div className="mb-3 h-3 w-20 rounded-full" style={{ backgroundColor: template.accent }} />
                    <div className="grid grid-cols-[36%_1fr] gap-3">
                      <div className="space-y-2">
                        <div className="h-16 rounded-[4px]" style={{ backgroundColor: `${template.accent}22` }} />
                        <div className="h-2 rounded-full bg-slate-200" />
                        <div className="h-2 rounded-full bg-slate-200" />
                        <div className="h-2 w-2/3 rounded-full bg-slate-200" />
                      </div>
                      <div className="space-y-2">
                        <div className="h-4 rounded-full bg-slate-900" />
                        <div className="h-2 rounded-full bg-slate-200" />
                        <div className="h-2 w-4/5 rounded-full bg-slate-200" />
                        <div className="pt-3">
                          <div className="h-2 rounded-full bg-slate-300" />
                          <div className="mt-2 h-2 rounded-full bg-slate-200" />
                          <div className="mt-2 h-2 w-3/4 rounded-full bg-slate-200" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

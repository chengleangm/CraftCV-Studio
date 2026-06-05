"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, LayoutTemplate } from "lucide-react";
import { templates } from "@/data/templates";
import type { TemplateId } from "@/types/cv";

interface TemplateSelectorProps {
  selectedTemplate: TemplateId;
  onSelect: (templateId: TemplateId) => void;
}

export default function TemplateSelector({ selectedTemplate, onSelect }: TemplateSelectorProps) {
  return (
    <div className="glass-panel rounded-[10px] p-3">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-[8px] bg-slate-950 text-white">
            <LayoutTemplate className="h-4 w-4" />
          </span>
          <div>
            <p className="text-sm font-black text-slate-950">Templates</p>
            <p className="text-xs text-slate-500">Switch instantly without losing edits</p>
          </div>
        </div>
        <span className="hidden rounded-full bg-teal-50 px-3 py-1 text-xs font-bold text-teal-700 sm:inline-flex">
          {templates.length} styles
        </span>
      </div>

      <div className="scrollbar-thin flex gap-2 overflow-x-auto pb-1">
        {templates.map((template) => {
          const isSelected = template.id === selectedTemplate;

          return (
            <button
              key={template.id}
              type="button"
              onClick={() => onSelect(template.id)}
              className="relative flex min-w-[180px] items-center gap-3 rounded-[8px] border border-slate-200 bg-white px-3 py-2 text-left transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
              title={`Use ${template.name}`}
            >
              <span
                className="h-11 w-8 shrink-0 rounded-[3px] border border-slate-200"
                style={{
                  background: `linear-gradient(90deg, ${template.accent} 0 22%, #ffffff 22% 100%)`,
                }}
              />
              <span className="min-w-0">
                <span className="block truncate text-xs font-black text-slate-900">{template.name}</span>
                <span className="block text-[10px] capitalize text-slate-500">{template.layout.replace("-", " ")}</span>
              </span>
              <AnimatePresence>
                {isSelected ? (
                  <motion.span
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.7, opacity: 0 }}
                    className="absolute right-2 top-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-950 text-white"
                  >
                    <Check className="h-3 w-3" />
                  </motion.span>
                ) : null}
              </AnimatePresence>
            </button>
          );
        })}
      </div>
    </div>
  );
}

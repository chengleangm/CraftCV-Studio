"use client";

import { motion } from "framer-motion";
import { templateComponents } from "@/data/templates";
import type { CVData, TemplateId } from "@/types/cv";

interface CVPreviewProps {
  cv: CVData;
  templateId: TemplateId;
  exportId?: string;
  framed?: boolean;
}

export default function CVPreview({ cv, templateId, exportId = "cv-export-root", framed = true }: CVPreviewProps) {
  const Template = templateComponents[templateId] ?? templateComponents["modern-minimal"];

  return (
    <div className={framed ? "rounded-[10px] bg-slate-200/70 p-4 shadow-inner" : undefined}>
      <motion.div
        key={templateId}
        id={exportId}
        initial={{ opacity: 0, y: 10, scale: 0.99 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="mx-auto w-fit"
      >
        <Template cv={cv} />
      </motion.div>
    </div>
  );
}

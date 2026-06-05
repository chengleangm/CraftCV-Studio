"use client";

import { Download } from "lucide-react";
import { useState } from "react";

interface ExportPDFButtonProps {
  targetId?: string;
  fileName?: string;
}

function sanitizeFileName(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function ExportPDFButton({ targetId = "cv-export-root", fileName = "professional-cv" }: ExportPDFButtonProps) {
  const [isExporting, setIsExporting] = useState(false);

  async function exportPDF() {
    const element = document.getElementById(targetId);
    if (!element || isExporting) return;

    setIsExporting(true);
    const paper = element.querySelector(".cv-paper");
    paper?.classList.add("cv-exporting");

    try {
      await document.fonts?.ready;
      const html2canvas = (await import("html2canvas")).default;
      const { jsPDF } = await import("jspdf");

      const canvas = await html2canvas(element, {
        backgroundColor: "#ffffff",
        scale: 2,
        useCORS: true,
        allowTaint: true,
        logging: false,
      });

      const imageData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = 210;
      const pageHeight = 297;
      const imageHeight = (canvas.height * pageWidth) / canvas.width;

      let heightLeft = imageHeight;
      let position = 0;

      pdf.addImage(imageData, "PNG", 0, position, pageWidth, imageHeight, undefined, "FAST");
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - imageHeight;
        pdf.addPage();
        pdf.addImage(imageData, "PNG", 0, position, pageWidth, imageHeight, undefined, "FAST");
        heightLeft -= pageHeight;
      }

      pdf.save(`${sanitizeFileName(fileName) || "professional-cv"}.pdf`);
    } finally {
      paper?.classList.remove("cv-exporting");
      setIsExporting(false);
    }
  }

  return (
    <button
      type="button"
      onClick={exportPDF}
      disabled={isExporting}
      className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-slate-950 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-slate-800 disabled:cursor-wait disabled:opacity-70"
    >
      <Download className="h-4 w-4" />
      {isExporting ? "Exporting..." : "Export PDF"}
    </button>
  );
}

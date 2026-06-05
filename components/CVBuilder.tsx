"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Eye, FileDown, Save } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import type { Dispatch, SetStateAction } from "react";
import { useEffect, useMemo, useSyncExternalStore } from "react";
import { defaultCV } from "@/data/defaultCV";
import { getTemplateMeta, isTemplateId } from "@/data/templates";
import type { CVData, TemplateId } from "@/types/cv";
import CVForm from "./CVForm";
import CVPreview from "./CVPreview";
import ExportPDFButton from "./ExportPDFButton";
import TemplateSelector from "./TemplateSelector";

const CV_STORAGE_KEY = "craftcv:cv-data";
const TEMPLATE_STORAGE_KEY = "craftcv:template-id";
const DEFAULT_TEMPLATE: TemplateId = "modern-minimal";

interface BuilderSnapshot {
  cv: CVData;
  selectedTemplate: TemplateId;
  hydrated: boolean;
  lastSavedAt: string;
}

const serverSnapshot: BuilderSnapshot = {
  cv: defaultCV,
  selectedTemplate: DEFAULT_TEMPLATE,
  hydrated: false,
  lastSavedAt: "",
};

let builderSnapshot: BuilderSnapshot = serverSnapshot;
let hasLoadedSnapshot = false;
const listeners = new Set<() => void>();

function mergeCVData(value: Partial<CVData> | null): CVData {
  if (!value) return defaultCV;

  return {
    ...defaultCV,
    ...value,
    workExperience: Array.isArray(value.workExperience) ? value.workExperience : defaultCV.workExperience,
    education: Array.isArray(value.education) ? value.education : defaultCV.education,
    skills: Array.isArray(value.skills) ? value.skills : defaultCV.skills,
    languages: Array.isArray(value.languages) ? value.languages : defaultCV.languages,
    projects: Array.isArray(value.projects) ? value.projects : defaultCV.projects,
    certifications: Array.isArray(value.certifications) ? value.certifications : defaultCV.certifications,
    awards: Array.isArray(value.awards) ? value.awards : defaultCV.awards,
    references: Array.isArray(value.references) ? value.references : defaultCV.references,
    customSections: Array.isArray(value.customSections) ? value.customSections : defaultCV.customSections,
  };
}

function formatSavedTime() {
  return new Intl.DateTimeFormat("en", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date());
}

function loadSnapshot() {
  if (typeof window === "undefined") return serverSnapshot;
  if (hasLoadedSnapshot) return builderSnapshot;

  const queryTemplate = new URLSearchParams(window.location.search).get("template");
  const savedTemplate = localStorage.getItem(TEMPLATE_STORAGE_KEY);
  const savedCV = localStorage.getItem(CV_STORAGE_KEY);
  let cv = defaultCV;

  if (savedCV) {
    try {
      cv = mergeCVData(JSON.parse(savedCV) as Partial<CVData>);
    } catch {
      cv = defaultCV;
    }
  }

  builderSnapshot = {
    cv,
    selectedTemplate: isTemplateId(queryTemplate)
      ? queryTemplate
      : isTemplateId(savedTemplate)
        ? savedTemplate
        : DEFAULT_TEMPLATE,
    hydrated: true,
    lastSavedAt: "",
  };
  hasLoadedSnapshot = true;

  return builderSnapshot;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function notifyListeners() {
  listeners.forEach((listener) => listener());
}

function persistSnapshot(nextSnapshot: BuilderSnapshot) {
  builderSnapshot = {
    ...nextSnapshot,
    hydrated: true,
    lastSavedAt: formatSavedTime(),
  };
  hasLoadedSnapshot = true;

  if (typeof window !== "undefined") {
    localStorage.setItem(CV_STORAGE_KEY, JSON.stringify(builderSnapshot.cv));
    localStorage.setItem(TEMPLATE_STORAGE_KEY, builderSnapshot.selectedTemplate);
  }

  notifyListeners();
}

function updateSnapshot(updater: (previous: BuilderSnapshot) => BuilderSnapshot) {
  persistSnapshot(updater(loadSnapshot()));
}

function resetSnapshot() {
  builderSnapshot = {
    cv: defaultCV,
    selectedTemplate: DEFAULT_TEMPLATE,
    hydrated: true,
    lastSavedAt: formatSavedTime(),
  };
  hasLoadedSnapshot = true;

  if (typeof window !== "undefined") {
    localStorage.removeItem(CV_STORAGE_KEY);
    localStorage.removeItem(TEMPLATE_STORAGE_KEY);
  }

  notifyListeners();
}

interface CVBuilderProps {
  mode?: "builder" | "preview";
}

export default function CVBuilder({ mode = "builder" }: CVBuilderProps) {
  const searchParams = useSearchParams();
  const snapshot = useSyncExternalStore(subscribe, loadSnapshot, () => serverSnapshot);
  const { cv, hydrated, lastSavedAt, selectedTemplate } = snapshot;

  useEffect(() => {
    const queryTemplate = searchParams.get("template");

    if (isTemplateId(queryTemplate) && queryTemplate !== selectedTemplate) {
      updateSnapshot((previous) => ({ ...previous, selectedTemplate: queryTemplate }));
    }
  }, [searchParams, selectedTemplate]);

  const selectedMeta = useMemo(() => getTemplateMeta(selectedTemplate), [selectedTemplate]);

  const setCv: Dispatch<SetStateAction<CVData>> = (value) => {
    updateSnapshot((previous) => ({
      ...previous,
      cv: typeof value === "function" ? value(previous.cv) : value,
    }));
  };

  const setSelectedTemplate = (templateId: TemplateId) => {
    updateSnapshot((previous) => ({ ...previous, selectedTemplate: templateId }));
  };

  function resetCV() {
    resetSnapshot();
  }

  if (!hydrated) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="glass-panel h-[70vh] animate-pulse rounded-[12px]" />
      </div>
    );
  }

  if (mode === "preview") {
    return (
      <div className="mx-auto max-w-[1680px] px-4 pb-10 pt-4">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/builder"
            className="inline-flex items-center gap-2 rounded-[8px] border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:border-slate-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to editor
          </Link>
          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-bold text-slate-500 shadow-sm sm:inline-flex">
              <Save className="h-3.5 w-3.5" />
              Saved locally {lastSavedAt}
            </span>
            <ExportPDFButton fileName={`${cv.fullName}-${selectedMeta.name}`} />
          </div>
        </div>

        <TemplateSelector selectedTemplate={selectedTemplate} onSelect={setSelectedTemplate} />

        <div className="mt-4 overflow-auto rounded-[12px] border border-white/80 bg-slate-900/[0.08] p-4 shadow-inner scrollbar-thin">
          <CVPreview cv={cv} templateId={selectedTemplate} framed={false} />
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[1800px] px-4 pb-8 pt-4">
      <TemplateSelector selectedTemplate={selectedTemplate} onSelect={setSelectedTemplate} />

      <div className="mt-4 grid gap-4 xl:grid-cols-[560px_minmax(0,1fr)]">
        <motion.aside
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="glass-card max-h-none overflow-y-auto rounded-[12px] p-4 scrollbar-thin xl:max-h-[calc(100vh-150px)]"
        >
          <CVForm cv={cv} setCv={setCv} onReset={resetCV} />
        </motion.aside>

        <motion.section
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="glass-card rounded-[12px] p-4"
        >
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-[8px] bg-slate-950 text-white">
                  <Eye className="h-4 w-4" />
                </span>
                <div>
                  <h2 className="text-sm font-black text-slate-950">Live preview</h2>
                  <p className="text-xs text-slate-500">{selectedMeta.name}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-bold text-slate-500 shadow-sm">
                <Save className="h-3.5 w-3.5" />
                Saved {lastSavedAt}
              </span>
              <Link
                href="/preview"
                className="inline-flex items-center gap-2 rounded-[8px] border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:border-slate-300"
              >
                <FileDown className="h-4 w-4" />
                Preview
              </Link>
              <ExportPDFButton fileName={`${cv.fullName}-${selectedMeta.name}`} />
            </div>
          </div>

          <div className="max-h-none overflow-auto rounded-[10px] bg-slate-900/[0.08] p-4 scrollbar-thin xl:max-h-[calc(100vh-245px)]">
            <CVPreview cv={cv} templateId={selectedTemplate} />
          </div>
        </motion.section>
      </div>
    </div>
  );
}

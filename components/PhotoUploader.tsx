"use client";

import { ImagePlus, X } from "lucide-react";
import Image from "next/image";

interface PhotoUploaderProps {
  value: string;
  onChange: (value: string) => void;
}

export default function PhotoUploader({ value, onChange }: PhotoUploaderProps) {
  function handleFile(file: File | undefined) {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        onChange(reader.result);
      }
    };
    reader.readAsDataURL(file);
  }

  return (
    <div className="rounded-[8px] border border-slate-200 bg-white/80 p-4">
      <div className="flex items-center gap-4">
        <div className="h-20 w-20 overflow-hidden rounded-full border border-slate-200 bg-slate-100">
          {value ? <Image src={value} alt="Profile preview" width={80} height={80} unoptimized className="h-full w-full object-cover" /> : null}
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-slate-900">Profile photo</p>
          <p className="mt-1 text-xs text-slate-500">Upload a square or portrait image. It is stored locally in your browser.</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <label className="inline-flex cursor-pointer items-center gap-2 rounded-[8px] bg-slate-950 px-3 py-2 text-xs font-bold text-white transition hover:bg-slate-800">
              <ImagePlus className="h-4 w-4" />
              Upload
              <input
                type="file"
                accept="image/*"
                className="sr-only"
                onChange={(event) => handleFile(event.target.files?.[0])}
              />
            </label>
            {value ? (
              <button
                type="button"
                title="Remove photo"
                onClick={() => onChange("")}
                className="inline-flex items-center gap-2 rounded-[8px] border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-700 transition hover:border-rose-200 hover:text-rose-600"
              >
                <X className="h-4 w-4" />
                Remove
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

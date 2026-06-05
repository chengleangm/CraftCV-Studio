import { FileText, LayoutTemplate, PenLine } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/70 bg-white/75 backdrop-blur-xl no-print">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-[8px] bg-slate-950 text-white">
            <FileText className="h-4 w-4" />
          </span>
          <span className="max-w-[165px] truncate text-sm font-black text-slate-950 sm:max-w-none sm:text-base">
            Only for HORN CHHUYHAUN
          </span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          <Link href="/templates" className="rounded-[8px] px-3 py-2 text-sm font-bold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950">
            Templates
          </Link>
          <Link href="/builder" className="rounded-[8px] px-3 py-2 text-sm font-bold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950">
            Builder
          </Link>
          <Link href="/preview" className="rounded-[8px] px-3 py-2 text-sm font-bold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950">
            Export
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/templates"
            className="hidden items-center gap-2 rounded-[8px] border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-700 transition hover:border-slate-300 sm:inline-flex"
          >
            <LayoutTemplate className="h-4 w-4" />
            Gallery
          </Link>
          <Link
            href="/builder"
            className="inline-flex items-center gap-2 rounded-[8px] bg-slate-950 px-3 py-2 text-sm font-bold text-white shadow-lg shadow-slate-950/20 transition hover:bg-slate-800"
          >
            <PenLine className="h-4 w-4" />
            <span className="hidden sm:inline">Build CV</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

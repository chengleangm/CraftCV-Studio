import { Suspense } from "react";
import CVBuilder from "@/components/CVBuilder";
import Navbar from "@/components/Navbar";

export default function PreviewPage() {
  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={<div className="mx-auto max-w-7xl px-4 py-10"><div className="glass-panel h-[70vh] animate-pulse rounded-[12px]" /></div>}>
          <CVBuilder mode="preview" />
        </Suspense>
      </main>
    </>
  );
}

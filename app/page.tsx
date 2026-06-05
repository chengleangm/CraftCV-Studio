import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TemplateGallery from "@/components/TemplateGallery";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TemplateGallery limit={8} />
        <section className="border-t border-white/70 bg-white/55 px-4 py-14">
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
            {[
              ["Structured editor", "Edit every CV field with repeatable sections for experience, education, projects, awards, references, and more."],
              ["Instant template switching", "Try all 20 professional layouts without re-entering content or breaking your resume flow."],
              ["A4 PDF export", "Export the rendered CV with html2canvas and jsPDF so the final document matches the preview."],
            ].map(([title, text]) => (
              <article key={title} className="rounded-[10px] border border-white/80 bg-white/[0.85] p-6 shadow-sm">
                <h3 className="text-lg font-black text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

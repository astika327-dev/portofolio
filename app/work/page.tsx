import Image from 'next/image';
import { FadeIn, ScaleIn } from "../animation";

export default function Work() {
  return (
    <main>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <FadeIn>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-center">
            My Work
          </h1>
          <p className="mt-4 text-lg md:text-xl text-center max-w-3xl mx-auto text-ink-subtle">
            A collection of projects that showcase my passion for creating beautiful and functional web experiences.
          </p>
        </FadeIn>
      </div>

      <div className="py-16 md:py-24 bg-bg-alt">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-1 gap-16">
            <FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h2 className="text-4xl font-bold">PromptCraft</h2>
                  <p className="mt-2 text-lg text-ink-subtle">
                    Prompt builder with reusable patterns and an audit‑friendly preview.
                  </p>
                  <ul className="mt-4 text-ink-subtle list-disc list-inside">
                    <li>Reusable prompt modules so writers stay consistent.</li>
                    <li>Preview pane mirrors the final output for quick reviews.</li>
                    <li>Versioned templates to support audit trails and iterations.</li>
                  </ul>
                   <div className="mt-4">
                    <a className="btn btn--primary" href="https://astika322-dev.github.io/promptcraft/" target="_blank" rel="noopener">Live</a>
                    <a className="btn btn--ghost ml-4" href="https://github.com/astika322-dev/promptcraft" target="_blank" rel="noopener">Source</a>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <ScaleIn>
                    <Image src="/assets/pcimage.png" alt="PromptCraft interface preview" loading="lazy" width={600} height={400} className="rounded-lg" />
                  </ScaleIn>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <ScaleIn>
                    <Image src="/assets/opsplaybookimage.png" alt="Ops Playbook checklists preview" loading="lazy" width={600} height={400} className="rounded-lg" />
                  </ScaleIn>
                </div>
                <div>
                  <h2 className="text-4xl font-bold">Ops Playbook</h2>
                  <p className="mt-2 text-lg text-ink-subtle">
                    Unified SOP/QA kit: checklists, incident notes, and audit templates.
                  </p>
                   <ul className="mt-4 text-ink-subtle list-disc list-inside">
                    <li>Centralized SOP library with printable checklists.</li>
                    <li>Incident capture that keeps context for follow-ups.</li>
                    <li>Audit templates to make compliance reviews painless.</li>
                  </ul>
                   <div className="mt-4">
                    <a className="btn btn--primary" href="https://astika322-dev.github.io/opsplaybook-hospitality/" target="_blank" rel="noopener">Live</a>
                    <a className="btn btn--ghost ml-4" href="https://github.com/astika322-dev/opsplaybook-hospitality" target="_blank" rel="noopener">Source</a>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h2 className="text-4xl font-bold">Mini-Tools</h2>
                  <p className="mt-2 text-lg text-ink-subtle">
                   Small JS utilities: quote calculator, SOP printer, and name helper.
                  </p>
                  <ul className="mt-4 text-ink-subtle list-disc list-inside">
                    <li>Lightweight utilities for quick on-the-floor decisions.</li>
                    <li>Focused UI that runs on any device without setup.</li>
                    <li>Print-friendly outputs for teams that need hard copies.</li>
                  </ul>
                   <div className="mt-4">
                    <a className="btn btn--primary" href="https://astika322-dev.github.io/minitools/" target="_blank" rel="noopener">Live</a>
                    <a className="btn btn--ghost ml-4" href="https://github.com/astika322-dev/minitools" target="_blank" rel="noopener">Source</a>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <ScaleIn>
                    <Image src="/assets/minitoolsimage.png" alt="Mini-Tools preview" loading="lazy" width={600} height={400} className="rounded-lg" />
                  </ScaleIn>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </main>
  );
}

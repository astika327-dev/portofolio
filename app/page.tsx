import Image from 'next/image';
import Link from 'next/link';
import { FadeIn, ScaleIn } from "./animation";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto px-4 py-24">
        <FadeIn>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-center">
            A Digital Craftsman
          </h1>
          <p className="mt-4 text-lg md:text-xl text-center max-w-3xl mx-auto text-ink-subtle">
            I build elegant and performant web experiences for businesses that value quality and precision.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="flex justify-center mt-8">
            <Link href="/contact" className="btn btn--primary">
              Get in Touch
            </Link>
          </div>
        </FadeIn>
      </div>

      <div className="py-24 bg-bg-alt" id="work">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center">Featured Work</h2>
            <p className="mt-2 text-lg text-center text-ink-subtle">
             A sample of purpose-built tools spanning AI guidance, hospitality operations, and utility scripts.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <ScaleIn>
              <div className="p-8 bg-surface rounded-lg">
                <Image className="rounded-lg" src="/assets/pcimage.png" alt="PromptCraft interface preview" loading="lazy" width="400" height="200" />
                <h3 className="text-2xl font-bold mt-4">PromptCraft</h3>
                <p className="mt-2 text-ink-subtle">
                  Prompt builder with reusable patterns and an audit‑friendly preview.
                </p>
                 <div className="mt-4">
                  <a className="btn btn--primary" href="https://astika322-dev.github.io/promptcraft/" target="_blank" rel="noopener">Live</a>
                  <a className="btn btn--ghost ml-4" href="https://github.com/astika322-dev/promptcraft" target="_blank" rel="noopener">Source</a>
              </div>
              </div>
            </ScaleIn>
            <ScaleIn delay={0.1}>
              <div className="p-8 bg-surface rounded-lg">
                 <Image className="rounded-lg" src="/assets/opsplaybookimage.png" alt="Ops Playbook checklists preview" loading="lazy" width="400" height="200" />
                <h3 className="text-2xl font-bold mt-4">Ops Playbook</h3>
                <p className="mt-2 text-ink-subtle">
                  Unified SOP/QA kit: checklists, incident notes, and audit templates.
                </p>
                 <div className="mt-4">
                <a className="btn btn--primary" href="https://astika322-dev.github.io/opsplaybook-hospitality/" target="_blank" rel="noopener">Live</a>
                <a className="btn btn--ghost ml-4" href="https://github.com/astika322-dev/opsplaybook-hospitality" target="_blank" rel="noopener">Source</a>
              </div>
              </div>
            </ScaleIn>
            <ScaleIn delay={0.2}>
              <div className="p-8 bg-surface rounded-lg">
                <Image className="rounded-lg" src="/assets/minitoolsimage.png" alt="Mini-Tools preview" loading="lazy" width="400" height="200" />
                <h3 className="text-2xl font-bold mt-4">Mini‑Tools</h3>
                <p className="mt-2 text-ink-subtle">
                  Small JS utilities: quote calculator, SOP printer, and name helper.
                </p>
                 <div className="mt-4">
                 <a className="btn btn--primary" href="https://astika322-dev.github.io/minitools/" target="_blank" rel="noopener">Live</a>
                <a className="btn btn--ghost ml-4" href="https://github.com/astika322-dev/minitools" target="_blank" rel="noopener">Source</a>
              </div>
              </div>
            </ScaleIn>
          </div>
        </div>
      </div>
    </main>
  );
}

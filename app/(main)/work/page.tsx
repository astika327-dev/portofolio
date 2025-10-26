import Image from 'next/image';

export default function Work() {
  return (
    <main id="main-content" tabIndex={-1}>
      <section className="page-hero">
        <p className="eyebrow">Work</p>
        <h1>Lean products and ops tooling built to keep delivery predictable.</h1>
        <p>Each project here balances speed, documentation, and pragmatic feature sets so teams can keep momentum without overbuilt systems.</p>
      </section>

      <section className="section project-section" aria-labelledby="promptcraft-heading">
        <div className="project-layout">
          <div className="project-layout__media">
            <Image src="/assets/pcimage.png" alt="PromptCraft interface preview" loading="lazy" width={600} height={400} />
          </div>
          <div className="project-layout__content">
            <p className="eyebrow">AI &amp; Writing</p>
            <h2 id="promptcraft-heading">PromptCraft</h2>
            <p>Prompt builder with reusable patterns and an audit‑friendly preview.</p>
            <ul className="feature-list">
              <li>Reusable prompt modules so writers stay consistent.</li>
              <li>Preview pane mirrors the final output for quick reviews.</li>
              <li>Versioned templates to support audit trails and iterations.</li>
            </ul>
            <div className="project-card__actions">
              <a className="btn btn--primary" href="https://astika327-dev.github.io/promptcraft/" target="_blank" rel="noopener">Live</a>
              <a className="btn btn--ghost" href="https://github.com/astika327-dev/promptcraft" target="_blank" rel="noopener">Source</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section project-section" aria-labelledby="opsplaybook-heading">
        <div className="project-layout project-layout--flip">
          <div className="project-layout__media">
            <Image src="/assets/opsplaybookimage.png" alt="Ops Playbook checklists preview" loading="lazy" width={600} height={400} />
          </div>
          <div className="project-layout__content">
            <p className="eyebrow">Ops Systems</p>
            <h2 id="opsplaybook-heading">Ops Playbook</h2>
            <p>Unified SOP/QA kit: checklists, incident notes, and audit templates.</p>
            <ul className="feature-list">
              <li>Centralized SOP library with printable checklists.</li>
              <li>Incident capture that keeps context for follow-ups.</li>
              <li>Audit templates to make compliance reviews painless.</li>
            </ul>
            <div className="project-card__actions">
              <a className="btn btn--primary" href="https://astika327-dev.github.io/opsplaybook-hospitality/" target="_blank" rel="noopener">Live</a>
              <a className="btn btn--ghost" href="https://github.com/astika327-dev/opsplaybook-hospitality" target="_blank" rel="noopener">Source</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section project-section" aria-labelledby="minitools-heading">
        <div className="project-layout">
          <div className="project-layout__media">
            <Image src="/assets/minitoolsimage.png" alt="Mini-Tools preview" loading="lazy" width={600} height={400} />
          </div>
          <div className="project-layout__content">
            <p className="eyebrow">Web Utils</p>
            <h2 id="minitools-heading">Mini‑Tools</h2>
            <p>Small JS utilities: quote calculator, SOP printer, and name helper.</p>
            <ul className="feature-list">
              <li>Lightweight utilities for quick on-the-floor decisions.</li>
              <li>Focused UI that runs on any device without setup.</li>
              <li>Print-friendly outputs for teams that need hard copies.</li>
            </ul>
            <div className="project-card__actions">
              <a className="btn btn--primary" href="https://astika327-dev.github.io/minitools/" target="_blank" rel="noopener">Live</a>
              <a className="btn btn--ghost" href="https://github.com/astika327-dev/minitools" target="_blank" rel="noopener">Source</a>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="cta__content">
          <h2>Have a project in mind?</h2>
          <p>Short message, clear ask. Open for freelance and collaboration.</p>
          <div className="cta__actions">
            <a className="btn btn--ghost" href="mailto:astika327@gmail.com">Email</a>
            <a className="btn btn--ghost" href="https://wa.me/6282146178461" target="_blank" rel="noopener">WhatsApp</a>
            <a className="btn btn--ghost" href="https://github.com/astika327-dev" target="_blank" rel="noopener">GitHub</a>
          </div>
        </div>
      </section>
    </main>
  );
}

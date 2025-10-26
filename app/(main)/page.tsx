import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <section className="hero">
        <div className="hero__text">
          <p className="eyebrow">Ops-first generalist</p>
          <h1 className="hero__title">Builder, Operator,<br />Problem‑solver.</h1>
          <p className="hero__lead">I turn messy problems into clean systems—lean web, responsible AI, and ops tooling.</p>
          <div className="hero__actions">
            <Link href="/work" className="btn btn--primary">See projects</Link>
            <Link href="/contact" className="btn btn--ghost">Get in touch</Link>
          </div>
          <dl className="hero__meta">
            <div className="meta-item">
              <dt>Availability</dt>
              <dd>Available for work</dd>
            </div>
            <div className="meta-item">
              <dt>Location</dt>
              <dd>Bali (UTC+8)</dd>
            </div>
          </dl>
        </div>
        <div className="hero__panel">
          <div className="panel-card">
            <h2>About</h2>
            <p>Ops‑first generalist with a content background who builds small, durable web tools.</p>
            <ul className="panel-list">
              <li>Ships fast with clear acceptance criteria</li>
              <li>Prefers simplicity over ceremony</li>
              <li>Writes docs and checklists people actually use</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="focus-heading">
        <div className="section__header">
          <h2 id="focus-heading">Core disciplines</h2>
          <p className="section__lede">Lean web builds, responsible AI usage, and operations systems that keep teams calm and productive.</p>
        </div>
        <div className="card-grid card-grid--three">
          <article className="card card--focus">
            <h3>Web</h3>
            <ul>
              <li>Semantic HTML</li>
              <li>Modern CSS (Flex/Grid, variables)</li>
              <li>Basic JS (DOM, fetch, modules)</li>
              <li>Git &amp; GitHub Pages</li>
            </ul>
          </article>
          <article className="card card--focus">
            <h3>AI</h3>
            <ul>
              <li>Prompt design systems</li>
              <li>Review &amp; evaluation loops</li>
              <li>Grounding &amp; fact‑checking discipline</li>
              <li>Workflow automation ideas</li>
            </ul>
          </article>
          <article className="card card--focus">
            <h3>Soft &amp; Tools</h3>
            <ul>
              <li>Clarity, bias to action</li>
              <li>Ownership &amp; follow‑through</li>
              <li>Figma/Canva, Notion, Google Suite</li>
              <li>Chrome DevTools, VS Code</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section" aria-labelledby="projects-heading">
        <div className="section__header">
          <h2 id="projects-heading">Featured work</h2>
          <p className="section__lede">A sample of purpose-built tools spanning AI guidance, hospitality operations, and utility scripts.</p>
        </div>
        <div className="project-grid">
          <article className="project-card">
            <Image className="project-card__media" src="/assets/pcimage.png" alt="PromptCraft interface preview" loading="lazy" width="400" height="200" />
            <div className="project-card__body">
              <div className="project-card__top">
                <h3>PromptCraft</h3>
                <span className="project-card__tag">AI &amp; Writing</span>
              </div>
              <p>Prompt builder with reusable patterns and an audit‑friendly preview.</p>
              <div className="project-card__actions">
                <a className="btn btn--primary" href="https://astika322-dev.github.io/promptcraft/" target="_blank" rel="noopener">Live</a>
                <a className="btn btn--ghost" href="https://github.com/astika322-dev/promptcraft" target="_blank" rel="noopener">Source</a>
              </div>
            </div>
          </article>
          <article className="project-card">
            <Image className="project-card__media" src="/assets/opsplaybookimage.png" alt="Ops Playbook checklists preview" loading="lazy" width="400" height="200" />
            <div className="project-card__body">
              <div className="project-card__top">
                <h3>Ops Playbook</h3>
                <span className="project-card__tag">Ops Systems</span>
              </div>
              <p>Unified SOP/QA kit: checklists, incident notes, and audit templates.</p>
              <div className="project-card__actions">
                <a className="btn btn--primary" href="https://astika322-dev.github.io/opsplaybook-hospitality/" target="_blank" rel="noopener">Live</a>
                <a className="btn btn--ghost" href="https://github.com/astika322-dev/opsplaybook-hospitality" target="_blank" rel="noopener">Source</a>
              </div>
            </div>
          </article>
          <article className="project-card">
            <Image className="project-card__media" src="/assets/minitoolsimage.png" alt="Mini-Tools preview" loading="lazy" width="400" height="200" />
            <div className="project-card__body">
              <div className="project-card__top">
                <h3>Mini‑Tools</h3>
                <span className="project-card__tag">Web Utils</span>
              </div>
              <p>Small JS utilities: quote calculator, SOP printer, and name helper.</p>
              <div className="project-card__actions">
                <a className="btn btn--primary" href="https://astika322-dev.github.io/minitools/" target="_blank" rel="noopener">Live</a>
                <a className="btn btn--ghost" href="https://github.com/astika322-dev/minitools" target="_blank" rel="noopener">Source</a>
              </div>
            </div>
          </article>
        </div>
        <div className="section__footer">
          <Link href="/work" className="link-arrow">Explore the full case studies ↗</Link>
        </div>
      </section>

      <section className="cta">
        <div className="cta__content">
          <h2>Ready to brief?</h2>
          <p>Short message, clear ask. Open for freelance and collaboration.</p>
          <div className="cta__actions">
            <a className="btn btn--ghost" href="mailto:astika322@gmail.com">Email</a>
            <a className="btn btn--ghost" href="https://wa.me/6282146178461" target="_blank" rel="noopener">WhatsApp</a>
            <a className="btn btn--ghost" href="https://github.com/astika322-dev" target="_blank" rel="noopener" id="profile-link">GitHub</a>
          </div>
        </div>
      </section>
    </main>
  );
}

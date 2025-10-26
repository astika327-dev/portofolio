export default function About() {
  return (
    <main id="main-content" tabIndex={-1}>
      <section className="page-hero">
        <p className="eyebrow">About</p>
        <h1>Ops‑first generalist with a content background who builds small, durable web tools.</h1>
        <p>I optimize workflows, document knowledge, and ship pragmatic features—preferably with simple tech that’s easy to maintain.</p>
      </section>

      <section className="section" aria-labelledby="approach-heading">
        <div className="section__header">
          <h2 id="approach-heading">How I work</h2>
          <p className="section__lede">Reliable delivery, practical scope, and documentation that keeps teams aligned.</p>
        </div>
        <div className="pill-grid">
          <div className="pill">Ships fast with clear acceptance criteria</div>
          <div className="pill">Prefers simplicity over ceremony</div>
          <div className="pill">Writes docs and checklists people actually use</div>
        </div>
      </section>

      <section className="section" aria-labelledby="background-heading">
        <div className="section__header">
          <h2 id="background-heading">What clients count on</h2>
          <p className="section__lede">The mix of production skills and operations habits that keeps projects moving without drama.</p>
        </div>
        <div className="card-grid card-grid--two">
          <article className="card">
            <h3>Builder mindset</h3>
            <ul>
              <li>Semantic HTML layouts that stay accessible</li>
              <li>Modern CSS architecture with Flex/Grid and variables</li>
              <li>Browser-friendly JS (DOM, fetch, modules)</li>
              <li>Version control via Git &amp; GitHub Pages</li>
            </ul>
          </article>
          <article className="card">
            <h3>Operator discipline</h3>
            <ul>
              <li>Prompt design systems with evaluation loops</li>
              <li>Grounding, fact-checking, and review checkpoints</li>
              <li>Workflow automation ideas for repeatable tasks</li>
              <li>Clear communication in Notion, Google Suite, and Figma</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section" aria-labelledby="tools-heading">
        <div className="section__header">
          <h2 id="tools-heading">Tools I keep close</h2>
          <p className="section__lede">Chrome DevTools, VS Code, and the content systems that make collaboration frictionless.</p>
        </div>
        <ul className="inline-list">
          <li>Figma</li>
          <li>Canva</li>
          <li>Notion</li>
          <li>Google Suite</li>
          <li>Chrome DevTools</li>
          <li>VS Code</li>
        </ul>
      </section>

      <section className="cta">
        <div className="cta__content">
          <h2>Need a steady operator?</h2>
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

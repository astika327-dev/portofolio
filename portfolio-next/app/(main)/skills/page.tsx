export default function Skills() {
  return (
    <main id="main-content" tabIndex={-1}>
      <section className="page-hero">
        <p className="eyebrow">Skills</p>
        <h1>Modern Web Development, AI Integration, and Project Management Expertise.</h1>
        <p>This stack enables rapid delivery of high-quality, well-documented, and maintainable web solutions.</p>
      </section>

      <section className="section" aria-labelledby="skills-heading">
        <div className="section__header">
          <h2 id="skills-heading">Capabilities</h2>
          <p className="section__lede">A combination of modern technologies and proven methodologies to deliver robust and scalable web applications.</p>
        </div>
        <div className="card-grid card-grid--three">
          <article className="card card--focus">
            <h3>Pengembangan Web</h3>
            <ul>
              <li>Pengembangan Frontend</li>
              <li>Pengembangan Aplikasi Web (Full-Stack)</li>
              <li>Pengembangan Game (Berbasis Web)</li>
              <li>JavaScript, React.js, Next.js, Node.js</li>
              <li>HTML5, CSS3</li>
            </ul>
          </article>
          <article className="card card--focus">
            <h3>AI &amp; Data</h3>
            <ul>
              <li>Pengembangan dengan Bantuan AI</li>
              <li>Rekayasa Prompt (Prompt Engineering)</li>
              <li>Integrasi API</li>
              <li>Analisis Data</li>
            </ul>
          </article>
          <article className="card card--focus">
            <h3>Manajemen &amp; DevOps</h3>
            <ul>
              <li>Manajemen Proyek</li>
              <li>DevOps</li>
              <li>Deployment (Penerapan Aplikasi)</li>
              <li>Refactoring Kode</li>
              <li>Perencanaan Arsitektur</li>
              <li>Git, Vercel (Platform)</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section" aria-labelledby="cert-heading">
        <div className="section__header">
          <h2 id="cert-heading">Certificates</h2>
          <p className="section__lede">Structured learning that backs the daily practice.</p>
        </div>
        <div className="card-grid card-grid--two">
          <article className="card card--cert">
            <h3>freeCodeCamp — Responsive Web Design</h3>
            <p>Projects: Survey Form, Tribute Page, Technical Docs, Product Landing, Portfolio.</p>
            <a className="btn btn--ghost" href="https://www.freecodecamp.org/certification/astika/responsive-web-design" target="_blank" rel="noopener">View credential</a>
          </article>
          <article className="card card--cert">
            <h3>freeCodeCamp — Front End Development Libraries</h3>
            <p>React components, state management basics, and UI libraries.</p>
            <a className="btn btn--ghost" href="https://www.freecodecamp.org/certification/astika/front-end-development-libraries" target="_blank" rel="noopener">View credential</a>
          </article>
        </div>
      </section>

      <section className="section section--highlight" id="resume" aria-labelledby="resume-heading">
        <div className="section__header">
          <h2 id="resume-heading">Resume snapshot</h2>
          <p className="section__lede">One page. Results only.</p>
        </div>
        <div className="resume-panel">
          <div className="resume-panel__body">
            <h3>Summary</h3>
            <ul>
              <li>Full-Stack Web Developer (React, Next.js, Node.js)</li>
              <li>AI-assisted Development & Prompt Engineering</li>
              <li>Project Management & DevOps</li>
            </ul>
          </div>
          <div className="resume-panel__actions">
            <a className="btn btn--primary" href="/assets/Putu-Astika-Resume.pdf" target="_blank" rel="noopener">View PDF</a>
            <button className="btn btn--ghost" type="button" data-print>Print</button>
            <button className="btn btn--ghost" type="button" data-share>Share</button>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="cta__content">
          <h2>Let’s collaborate</h2>
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

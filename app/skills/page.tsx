'use client';

export default function Skills() {
  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        url: window.location.href,
      }).catch(console.error);
    } else {
      // Fallback for browsers that don't support the Web Share API
      alert("Sharing is not supported on this browser.");
    }
  };

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
            <h3>Web Development</h3>
            <ul>
              <li>Frontend Development</li>
              <li>Full-Stack Web Application Development</li>
              <li>Web-Based Game Development</li>
              <li>JavaScript, React.js, Next.js, Node.js</li>
              <li>HTML5, CSS3</li>
            </ul>
          </article>
          <article className="card card--focus">
            <h3>AI &amp; Data</h3>
            <ul>
              <li>AI-Assisted Development</li>
              <li>Prompt Engineering</li>
              <li>API Integration</li>
              <li>Data Analysis</li>
            </ul>
          </article>
          <article className="card card--focus">
            <h3>Management &amp; DevOps</h3>
            <ul>
              <li>Project Management</li>
              <li>DevOps</li>
              <li>Deployment</li>
              <li>Code Refactoring</li>
              <li>Architecture Planning</li>
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
            <button className="btn btn--ghost" type="button" onClick={handlePrint}>Print</button>
            <button className="btn btn--ghost" type="button" onClick={handleShare}>Share</button>
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

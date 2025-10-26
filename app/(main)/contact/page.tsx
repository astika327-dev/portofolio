export default function Contact() {
  return (
    <main id="main-content" tabIndex={-1}>
      <section className="page-hero">
        <p className="eyebrow">Contact</p>
        <h1>Short message, clear ask. Open for freelance and collaboration.</h1>
        <p>Outline the problem, the desired outcome, and where the work will live. I’ll reply within one business day.</p>
      </section>

      <section className="section" aria-labelledby="channels-heading">
        <div className="section__header">
          <h2 id="channels-heading">Preferred channels</h2>
          <p className="section__lede">Pick the lane that suits your workflow. I keep response windows tight.</p>
        </div>
        <div className="card-grid card-grid--three">
          <article className="card card--contact">
            <h3>Email</h3>
            <p>Detailed briefs, attachments, and timelines.</p>
            <a className="btn btn--ghost" href="mailto:astika327@gmail.com">astika327@gmail.com</a>
          </article>
          <article className="card card--contact">
            <h3>WhatsApp</h3>
            <p>Fast check-ins or voice notes when async isn’t enough.</p>
            <a className="btn btn--ghost" href="https://wa.me/6282146178461" target="_blank" rel="noopener">+62 821 4617 8461</a>
          </article>
          <article className="card card--contact">
            <h3>GitHub</h3>
            <p>See build history, source, and documentation habits.</p>
            <a className="btn btn--ghost" href="https://github.com/astika327-dev" target="_blank" rel="noopener">github.com/astika327-dev</a>
          </article>
        </div>
      </section>

      <section className="section" aria-labelledby="logistics-heading">
        <div className="section__header">
          <h2 id="logistics-heading">Logistics</h2>
          <p className="section__lede">Transparent about availability, timezone, and how to kick things off.</p>
        </div>
        <div className="logistics-grid">
          <div className="logistics-card">
            <h3>Availability</h3>
            <p>Available for work</p>
          </div>
          <div className="logistics-card">
            <h3>Location</h3>
            <p>Denpasar, Bali</p>
          </div>
          <div className="logistics-card">
            <h3>Timezone</h3>
            <p>UTC+8</p>
          </div>
        </div>
      </section>
    </main>
  );
}

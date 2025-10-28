import { FadeIn, ScaleIn } from "../animation";

export default function Contact() {
  return (
    <main>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <FadeIn>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-center">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg md:text-xl text-center max-w-3xl mx-auto text-ink-subtle">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.
          </p>
        </FadeIn>
      </div>

      <div className="py-16 md:py-24 bg-bg-alt">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center">Contact Me</h2>
            <p className="mt-2 text-lg text-center text-ink-subtle">
              Feel free to reach out through any of the channels below.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <ScaleIn>
              <div className="p-8 bg-surface rounded-lg text-center">
                <h3 className="text-2xl font-bold">Email</h3>
                <p className="mt-2 text-ink-subtle">
                  <a href="mailto:astika322@gmail.com" className="text-primary hover:underline">astika322@gmail.com</a>
                </p>
              </div>
            </ScaleIn>
            <ScaleIn delay={0.1}>
              <div className="p-8 bg-surface rounded-lg text-center">
                <h3 className="text-2xl font-bold">WhatsApp</h3>
                <p className="mt-2 text-ink-subtle">
                  <a href="https://wa.me/6282146178461" target="_blank" rel="noopener" className="text-primary hover:underline">+62 821 4617 8461</a>
                </p>
              </div>
            </ScaleIn>
            <ScaleIn delay={0.2}>
              <div className="p-8 bg-surface rounded-lg text-center">
                <h3 className="text-2xl font-bold">GitHub</h3>
                <p className="mt-2 text-ink-subtle">
                  <a href="https://github.com/astika322-dev" target="_blank" rel="noopener" className="text-primary hover:underline">astika322-dev</a>
                </p>
              </div>
            </ScaleIn>
          </div>
        </div>
      </div>
    </main>
  );
}

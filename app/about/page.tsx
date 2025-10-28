import { FadeIn, ScaleIn } from "../animation";

export default function About() {
  return (
    <main>
      <div className="container mx-auto px-4 py-24">
        <FadeIn>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-center">
            About Me
          </h1>
          <p className="mt-4 text-lg md:text-xl text-center max-w-3xl mx-auto text-ink-subtle">
            I am a passionate web developer with a focus on creating beautiful, functional, and user-centered digital experiences.
          </p>
        </FadeIn>
      </div>

      <div className="py-24 bg-bg-alt">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center">How I Work</h2>
            <p className="mt-2 text-lg text-center text-ink-subtle">
             My approach is rooted in collaboration, precision, and a commitment to excellence.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <ScaleIn>
              <div className="p-8 bg-surface rounded-lg">
                <h3 className="text-2xl font-bold">Builder Mindset</h3>
                <p className="mt-2 text-ink-subtle">
                  I thrive on turning complex problems into elegant solutions, always with a focus on quality and performance.
                </p>
              </div>
            </ScaleIn>
            <ScaleIn delay={0.1}>
              <div className="p-8 bg-surface rounded-lg">
                <h3 className="text-2xl font-bold">Operator Discipline</h3>
                <p className="mt-2 text-ink-subtle">
                  I believe in meticulous planning, clear communication, and a process that ensures projects are delivered on time and within budget.
                </p>
              </div>
            </ScaleIn>
            <ScaleIn delay={0.2}>
              <div className="p-8 bg-surface rounded-lg">
                <h3 className="text-2xl font-bold">User-Centric Approach</h3>
                <p className="mt-2 text-ink-subtle">
                  I design with the end-user in mind, creating intuitive and engaging experiences that drive results.
                </p>
              </div>
            </ScaleIn>
          </div>
        </div>
      </div>
    </main>
  );
}

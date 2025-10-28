import { FadeIn, ScaleIn } from "../animation";

export default function Skills() {
  return (
    <main>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <FadeIn>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-center">
            My Skills
          </h1>
          <p className="mt-4 text-lg md:text-xl text-center max-w-3xl mx-auto text-ink-subtle">
            A combination of modern technologies and proven methodologies to deliver robust and scalable web applications.
          </p>
        </FadeIn>
      </div>

      <div className="py-16 md:py-24 bg-bg-alt">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center">Capabilities</h2>
            <p className="mt-2 text-lg text-center text-ink-subtle">
              I specialize in a range of technologies to deliver exceptional results.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <ScaleIn>
              <div className="p-8 bg-surface rounded-lg">
                <h3 className="text-2xl font-bold">Web Development</h3>
                <ul className="mt-2 text-ink-subtle list-disc list-inside">
                  <li>Frontend Development</li>
                  <li>Full-Stack Web Application Development</li>
                  <li>Web-Based Game Development</li>
                </ul>
              </div>
            </ScaleIn>
            <ScaleIn delay={0.1}>
              <div className="p-8 bg-surface rounded-lg">
                <h3 className="text-2xl font-bold">AI & Data</h3>
                 <ul className="mt-2 text-ink-subtle list-disc list-inside">
                  <li>AI-Assisted Development</li>
                  <li>Prompt Engineering</li>
                  <li>API Integration</li>
                  <li>Data Analysis</li>
                </ul>
              </div>
            </ScaleIn>
            <ScaleIn delay={0.2}>
              <div className="p-8 bg-surface rounded-lg">
                <h3 className="text-2xl font-bold">Management & DevOps</h3>
                <ul className="mt-2 text-ink-subtle list-disc list-inside">
                  <li>Project Management</li>
                  <li>DevOps</li>
                  <li>Deployment</li>
                  <li>Code Refactoring</li>
                  <li>Architecture Planning</li>
                </ul>
              </div>
            </ScaleIn>
          </div>
        </div>
      </div>
    </main>
  );
}

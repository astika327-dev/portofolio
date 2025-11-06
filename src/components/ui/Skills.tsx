import AnimatedSection from "./AnimatedSection";

export default function Skills() {
  return (
    <AnimatedSection>
      <section id="skills" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold font-heading text-center">Skills</h2>
          <div className="mt-8 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold font-heading">
                Languages & Frameworks
              </h3>
              <ul>
                <li>TypeScript</li>
                <li>JavaScript (ES6+)</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Node.js</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold font-heading">
                Styling & UI
              </h3>
              <ul>
                <li>Tailwind CSS</li>
                <li>Framer Motion</li>
                <li>Radix UI</li>
                <li>Shadcn/UI</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold font-heading">
                Backend & Data
              </h3>
              <ul>
                <li>Headless CMS (Sanity, Strapi)</li>
                <li>PostgreSQL</li>
                <li>Vercel</li>
                <li>Docker</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold font-heading">
                Design & Strategy
              </h3>
              <ul>
                <li>Figma</li>
                <li>UI/UX Design</li>
                <li>Performance Optimization</li>
                <li>SEO</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}

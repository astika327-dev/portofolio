export default function Skills() {
  return (
    <section id="skills" className="p-4">
      <h2 className="text-2xl font-bold">Skills</h2>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-lg font-semibold">Languages & Frameworks</h3>
          <ul>
            <li>TypeScript</li>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Node.js</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Styling & UI</h3>
          <ul>
            <li>Tailwind CSS</li>
            <li>Framer Motion</li>
            <li>Radix UI</li>
            <li>Shadcn/UI</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Backend & Data</h3>
          <ul>
            <li>Headless CMS (Sanity, Strapi)</li>
            <li>PostgreSQL</li>
            <li>Vercel</li>
            <li>Docker</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Design & Strategy</h3>
          <ul>
            <li>Figma</li>
            <li>UI/UX Design</li>
            <li>Performance Optimization</li>
            <li>SEO</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

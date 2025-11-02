export default function Projects() {
  return (
    <section id="projects" className="p-4">
      <h2 className="text-2xl font-bold">Projects</h2>
      <div className="mt-4 grid grid-cols-1 gap-4">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">
              <a href="https://cleanpro-beryl.vercel.app/" target="_blank" rel="noopener noreferrer">
                Cleanpro
              </a>
            </h3>
            <p className="text-sm text-muted-foreground">A website for a cleaning service company.</p>
          </div>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">
              <a href="https://bali-webdevelover.com" target="_blank" rel="noopener noreferrer">
                Bali WebDevelover
              </a>
            </h3>
            <p className="text-sm text-muted-foreground">A website for a web development studio.</p>
          </div>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">
              <a href="https://promptcraft-v2.vercel.app/" target="_blank" rel="noopener noreferrer">
                PromptCraft
              </a>
            </h3>
            <p className="text-sm text-muted-foreground">A tool for crafting and managing prompts.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

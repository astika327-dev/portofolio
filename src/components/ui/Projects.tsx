import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold font-serif text-center">Projects</h2>
        <div className="mt-8 grid grid-cols-1 gap-8">
          <div className="bg-card rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <Image src="https://images.unsplash.com/photo-1686178827149-6d55c72d81df?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xlYW5pbmclMjBzZXJ2aWNlc3xlbnwwfHwwfHx8MA==&fm=jpg&q=60&w=3000" alt="Cleanpro" className="w-full h-48 object-cover" width={600} height={400} />
            <div className="p-6">
              <h3 className="text-xl font-serif font-semibold">
                <a href="https://cleanpro-beryl.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Cleanpro
                </a>
              </h3>
              <p className="mt-2 text-muted-foreground">A website for a cleaning service company.</p>
            </div>
          </div>
          <div className="bg-card rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <Image src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcG1lbnQlMjBhZ2VuY3l8ZW58MHx8MHx8fDA=&fm=jpg&q=60&w=3000" alt="Bali WebDevelover" className="w-full h-48 object-cover" width={600} height={400} />
            <div className="p-6">
              <h3 className="text-xl font-serif font-semibold">
                <a href="https://bali-webdevelover.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Bali WebDevelover
                </a>
              </h3>
              <p className="mt-2 text-muted-foreground">A website for a web development studio.</p>
            </div>
          </div>
          <div className="bg-card rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <Image src="https://images.unsplash.com/photo-1644088379091-d574269d422f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaCUyMGFic3RyYWN0fGVufDB8fDB8fHww&fm=jpg&q=60&w=3000" alt="PromptCraft" className="w-full h-48 object-cover" width={600} height={400} />
            <div className="p-6">
              <h3 className="text-xl font-serif font-semibold">
                <a href="https://promptcraft-v2.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  PromptCraft
                </a>
              </h3>
              <p className="mt-2 text-muted-foreground">A tool for crafting and managing prompts.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-32 px-4 relative overflow-hidden bg-black/20">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

          {/* Image / Abstract Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
               <img
                  src="https://placehold.co/800x1000/111/333?text=Profile+Image" // TODO: User to replace
                  alt="Putu Astika"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
               />
               {/* Overlay Gradient */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

               <div className="absolute bottom-6 left-6 right-6">
                 <div className="text-xs font-mono text-primary mb-1">Putu Astika</div>
                 <div className="text-lg font-serif italic text-white/80">&quot;Simplicity is the ultimate sophistication.&quot;</div>
               </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -z-10 top-10 -left-10 w-full h-full border border-white/5 rounded-2xl" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-7"
          >
             <h2 className="text-4xl md:text-5xl font-bold font-serif mb-8 leading-tight">
              Design-driven development for the <span className="italic text-gray-400">modern web</span>.
             </h2>

             <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I am a full-stack developer based in Bali, specializing in bridging the gap between functional complexity and visual elegance.
                </p>
                <p>
                  My approach is rooted in the belief that a website should be more than just information—it should be an experience. I combine technical expertise with a keen eye for design to create digital products that stand out in a crowded market.
                </p>
                <p>
                   Whether you need a high-performance marketing site or a complex web application, I bring a commitment to quality and detail to every line of code.
                </p>
             </div>

             <div className="mt-10 flex items-center gap-6">
                <div className="flex flex-col">
                   <span className="text-3xl font-bold text-white">3+</span>
                   <span className="text-sm text-muted-foreground uppercase tracking-wider">Years Exp.</span>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div className="flex flex-col">
                   <span className="text-3xl font-bold text-white">20+</span>
                   <span className="text-sm text-muted-foreground uppercase tracking-wider">Projects</span>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

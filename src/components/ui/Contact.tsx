"use client";
import { Mail, MessageCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-background to-background" />
      
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6 tracking-tight">Let&apos;s Create Something Extraordinary</h2>
          <p className="text-muted-foreground leading-relaxed text-lg max-w-2xl mx-auto">
            Ready to start your next project? I&apos;m currently open for new opportunities.
            Let&apos;s connect and discuss how we can bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.a
            href="mailto:astika327@gmail.com"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group flex flex-col items-center justify-center p-10 bg-white/5 border border-white/10 rounded-3xl hover:border-white/30 hover:bg-white/10 transition-all duration-500"
          >
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-white/10">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold font-serif mb-2">Email</h3>
            <p className="text-muted-foreground text-sm mb-6 text-center">
              Drop me a line for collaborations or inquiries.
            </p>
            <span className="inline-flex items-center text-white font-medium group-hover:underline">
              Send a Message <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.a>

          <motion.a
            href="https://wa.me/6282146178461"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group flex flex-col items-center justify-center p-10 bg-white/5 border border-white/10 rounded-3xl hover:border-green-500/30 hover:bg-green-500/5 transition-all duration-500"
          >
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-white/10 group-hover:border-green-500/50 group-hover:bg-green-500/20">
              <MessageCircle className="w-6 h-6 text-white group-hover:text-green-500 transition-colors" />
            </div>
            <h3 className="text-xl font-bold font-serif mb-2 group-hover:text-green-500 transition-colors">WhatsApp</h3>
            <p className="text-muted-foreground text-sm mb-6 text-center">
              Chat with me directly for a faster response.
            </p>
            <span className="inline-flex items-center text-white group-hover:text-green-500 font-medium group-hover:underline transition-colors">
              Chat Now <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}

"use client";
import { Mail, MessageCircle, Send, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
      
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Get in Touch</h2>
          <p className="text-muted-foreground leading-relaxed text-lg max-w-2xl mx-auto">
            Ready to start your next project? I'm currently open for new opportunities. 
            Let's connect and discuss how we can bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.a
            href="mailto:astika327@gmail.com"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group flex flex-col items-center justify-center p-8 bg-card border border-border/50 rounded-2xl hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold font-serif mb-2">Email</h3>
            <p className="text-muted-foreground text-sm mb-6 text-center">
              Drop me a line for collaborations or inquiries.
            </p>
            <span className="inline-flex items-center text-primary font-medium group-hover:underline">
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
            className="group flex flex-col items-center justify-center p-8 bg-card border border-border/50 rounded-2xl hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <MessageCircle className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-xl font-bold font-serif mb-2">WhatsApp</h3>
            <p className="text-muted-foreground text-sm mb-6 text-center">
              Chat with me directly for a faster response.
            </p>
            <span className="inline-flex items-center text-green-500 font-medium group-hover:underline">
              Chat Now <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}

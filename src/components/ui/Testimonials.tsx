"use client";
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Made Wirawan",
    role: "Owner, Dewi Sri Spa",
    content: "Astika delivered an exceptional website that perfectly captures the essence of our spa. The design is elegant, and it has significantly increased our online bookings.",
    rating: 5,
    avatar: "🧘",
  },
  {
    id: 2,
    name: "Ketut Suryadi",
    role: "Manager, Azure Bali Restaurant",
    content: "Professional, fast, and attentive to details. Our restaurant website looks stunning and loads incredibly fast. Highly recommended!",
    rating: 5,
    avatar: "🍽️",
  },
  {
    id: 3,
    name: "Nyoman Adi",
    role: "Founder, BaliRide",
    content: "The booking system Astika built for our motorbike rental business is flawless. Customers can book easily, and we've automated most of our operations.",
    rating: 5,
    avatar: "🛵",
  },
  {
    id: 4,
    name: "Wayan Dharma",
    role: "Hotel Operations Manager",
    content: "The Hotel Ops Command Center has transformed how we manage daily operations. Real-time monitoring has reduced our response time by 50%.",
    rating: 5,
    avatar: "🏨",
  },
  {
    id: 5,
    name: "Putu Kirana",
    role: "Owner, U2CleanPro",
    content: "Our new website has doubled our conversion rate. Astika understood exactly what we needed for our cleaning service business.",
    rating: 5,
    avatar: "✨",
  },
  {
    id: 6,
    name: "Gede Santika",
    role: "CEO, Tech Startup",
    content: "Working with Astika was a pleasure. The code quality is excellent, documentation is thorough, and communication was always clear.",
    rating: 5,
    avatar: "💼",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-emerald-400 font-mono text-sm tracking-wider uppercase mb-2 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold font-serif tracking-tight text-foreground mb-4">
            What Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real feedback from real clients. I take pride in delivering exceptional results and building lasting relationships.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all duration-300 group"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-white/5 group-hover:text-white/10 transition-colors">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500/20 to-blue-500/20 flex items-center justify-center text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-medium text-white text-sm">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">Ready to start your project?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium transition-all duration-300 shadow-lg shadow-emerald-500/20"
          >
            Let&apos;s Work Together
          </a>
        </motion.div>
      </div>
    </section>
  );
}

"use client";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { FADE_IN_ANIMATION_VARIANTS } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone } from "lucide-react";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Contact form submitted:", data);
    // In a real application, you would send this data to a server.
    // For this demo, we'll just show a success message.
    setSubmitted(true);
  };

  return (
    <div className="container mx-auto max-w-screen-lg px-4 py-16">
      <motion.div
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        } as Variants}
        className="flex flex-col items-center"
      >
        <motion.h1
          variants={FADE_IN_ANIMATION_VARIANTS}
          className="text-4xl font-bold font-serif text-center mb-4"
        >
          Contact Me
        </motion.h1>
        <motion.p
          variants={FADE_IN_ANIMATION_VARIANTS}
          className="text-lg text-muted-foreground text-center mb-12 max-w-2xl"
        >
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of an amazing team. Feel free to reach out.
        </motion.p>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div variants={FADE_IN_ANIMATION_VARIANTS}>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Enter your name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  rows={5}
                  required
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={submitted}
              >
                {submitted ? "Message Sent!" : "Send Message"}
              </Button>
              {submitted && (
                <p className="text-center text-sm text-muted-foreground pt-2">
                  Thanks for reaching out! I&apos;ll get back to you soon.
                </p>
              )}
            </form>
          </motion.div>
          <motion.div
            variants={FADE_IN_ANIMATION_VARIANTS}
            className="flex flex-col justify-center space-y-6"
          >
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <a
                  href="mailto:hello@astika.dev"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  hello@astika.dev
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-muted-foreground">+62 123 4567 890</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
"use client";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { FADE_IN_ANIMATION_VARIANTS } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

const ContactPage = () => {
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const getButtonText = () => {
    switch (status) {
      case "loading":
        return (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        );
      case "success":
        return "Message Sent!";
      case "error":
        return "Try Again";
      default:
        return "Send Message";
    }
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
          opportunities to be part of an amazing team. Feel free to reach out by
          filling out the form below.
        </motion.p>

        <div className="w-full max-w-md">
          <motion.div variants={FADE_IN_ANIMATION_VARIANTS}>
            {status === "success" ? (
              <div className="text-center p-8 bg-secondary rounded-lg">
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p className="text-muted-foreground">
                  Your message has been sent successfully. I will get back to you
                  as soon as possible.
                </p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                    disabled={status === "loading"}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    disabled={status === "loading"}
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
                    disabled={status === "loading"}
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={status === "loading"}
                >
                  {getButtonText()}
                </Button>
                {status === "error" && (
                  <p className="text-center text-sm text-red-500 pt-2">
                    Something went wrong. Please try again later.
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
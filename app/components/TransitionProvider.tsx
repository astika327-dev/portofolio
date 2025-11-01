"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default TransitionProvider;

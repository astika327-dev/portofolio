"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SpotlightProps = {
  className?: string;
  fill?: string;
};

export const Spotlight = ({ className, fill }: SpotlightProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [rect, setRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect());
    }
  }, []);

  const { width = 0, height = 0 } = rect || {};

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "absolute z-0 opacity-0",
        "pointer-events-none",
        className
      )}
    >
      <svg
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox={`0 0 ${width} ${height}`}
        className="absolute inset-0"
      >
        <g>
          <motion.path
            d={`M.5,${height / 2} C.5,${height / 2} ${width * 0.25},${
              height * 0.25
            } ${width / 2},.5 C${width * 0.75},${height * 0.25} ${
              width - 0.5
            },${height / 2} ${width / 2},${height - 0.5} C${width * 0.25},${
              height * 0.75
            } .5,${height / 2} .5,${height / 2} Z`}
            fill={fill || "white"}
            opacity="0.2"
          />
        </g>
      </svg>
    </motion.div>
  );
};

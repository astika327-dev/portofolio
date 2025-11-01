import React from "react";
import { Url } from "url";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}

const Button = ({ children, onClick, href, className }: ButtonProps) => {
  const Component = href ? "a" : "button";
  return (
    <Component
      href={href}
      onClick={onClick}
      className={`px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${className}`}
    >
      {children}
    </Component>
  );
};

export default Button;

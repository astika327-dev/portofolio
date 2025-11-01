import React from "react";

interface SkillTagProps {
  children: React.ReactNode;
}

const SkillTag = ({ children }: SkillTagProps) => {
  return (
    <div className="px-3 py-1 text-sm font-medium text-white bg-gray-700 rounded-full">
      {children}
    </div>
  );
};

export default SkillTag;

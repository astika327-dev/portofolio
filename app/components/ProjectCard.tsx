import React from "react";
import Image from "next/image";
import Button from "./Button";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  sourceUrl: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  liveUrl,
  sourceUrl,
}: ProjectCardProps) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <Image src={image} alt={title} width={400} height={200} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="mt-2 text-gray-400">{description}</p>
        <div className="mt-4 flex gap-4">
          <Button href={liveUrl} className="w-full text-center">
            Live
          </Button>
          <Button href={sourceUrl} className="w-full text-center">
            Source
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

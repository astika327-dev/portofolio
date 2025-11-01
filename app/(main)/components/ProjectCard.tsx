import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import MagicButton from "../../../components/ui/MagicButton";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  sourceUrl:string;
}

const ProjectCard = ({
  title,
  description,
  image,
  liveUrl,
  sourceUrl,
}: ProjectCardProps) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden h-full flex flex-col">
      <Image
        src={image}
        alt={title}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="mt-2 text-gray-400 flex-grow">{description}</p>
        <div className="mt-4 flex gap-4">
          <a href={liveUrl} className="w-full">
            <MagicButton
              title="Live"
              icon={<FaExternalLinkAlt />}
              position="right"
            />
          </a>
          <a href={sourceUrl} className="w-full">
            <MagicButton
              title="Source"
              icon={<FaGithub />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

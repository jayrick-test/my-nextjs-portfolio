/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentProps, ReactNode } from "react";
import Image from "next/image";

type ProjectCardTypes = {
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  doings: (string | ReactNode)[];
} & Pick<ComponentProps<typeof Image>, "src" | "alt">;

const ProjectCard: React.FC<ProjectCardTypes> = ({
  description,
  doings,
  title,
  alt,
  src,
}) => {
  return (
    <div className="w-full rounded-xl overflow-hidden shadow-xl">
      <div className="min-h-80 relative w-full h-auto border-b-4 border-b-slate-300 ">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          quality={100}
          className="block object-cover w-full h-auto object-top-left"
        />
      </div>
      <div className="p-4 space-y-4">
        <h3 className="font-bold text-3xl">{title}</h3>
        <p className="font-medium text-lg text-slate-700">{description}</p>

        <ul className="list-disc list-inside space-y-1.5">
          {doings.map((doing, index) => (
            <li key={`${index}-${title}-project-card`}>{doing}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;

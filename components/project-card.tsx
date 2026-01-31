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
    <div className="w-full rounded-xl overflow-hidden shadow-xl border border-slate-100">
      <div className="min-h-80 relative w-full h-auto">
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
        <h2 className="font-bold text-4xl">{title}</h2>
        <p className="text-slate-600">{description}</p>

        <ul className="list-disc space-y-1.5 px-8 py-4">
          {doings.map((doing, index) => (
            <li key={`${index}-${title}-project-card`}>{doing}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;

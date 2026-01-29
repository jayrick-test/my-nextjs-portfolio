import Image from "next/image";
import { ComponentProps } from "react";

type MiniProjectCardProps = {
  title: string | React.ReactNode;
  description: string | React.ReactNode;
} & Pick<ComponentProps<typeof Image>, "src" | "alt">;

const MiniProjectCard: React.FC<MiniProjectCardProps> = ({
  title,
  description,
  src,
  alt,
}) => {
  return (
    <div className="relative w-full flex group min-h-96 h-auto rounded-2xl shadow-lg overflow-hidden cursor-pointer">
      <div className="relative z-0 h-full w-full">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          quality={100}
          className="block object-cover w-full h-auto object-top-left aspect-square"
          priority
        />
      </div>
      <div className="absolute bottom-0 h-full w-full opacity-0 group-hover:cursor-pointer group-hover:opacity-100 transition-opacity duration-300 bg-black/30 z-10 flex items-end justify-center">
        <div className="text-center p-4 text-white w-full">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default MiniProjectCard;

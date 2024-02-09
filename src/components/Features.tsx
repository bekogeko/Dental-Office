import React from "react";
import Image from "next/image";
interface FeaturesProps {
  imgSrc: string;
  title: string;
  description: string;
}
function Features({ imgSrc, title, description }: FeaturesProps) {
  return (
    <>
      <div className="flex  flex-col items-center gap-y-2">
        <Image
          src={imgSrc}
          alt="image"
          width={90}
          height={90}
          className="h-auto w-auto"
        />
        <div>
          {" "}
          <h2 className="text-center font-medium">{title}</h2>
          <p className="w-80 text-center font-light text-gray-500">
            {description}
          </p>
        </div>
      </div>
    </>
  );
}

export default Features;

import Image from "next/image";
import React from "react";
interface DiplomaCardProps {
  title: string;
  description: string;
  imageSrc: string;
}
function DiplomaCard({ title, imageSrc, description }: DiplomaCardProps) {
  return (
    <div className=" grid  grid-cols-1 flex-col-reverse pt-8  md:grid-cols-2">
      <Image
        src={imageSrc}
        alt="your company"
        className="w-full"
        width={250}
        height={150}
      />
      <div className=" flex flex-col items-center justify-center   md:px-12">
        <div>
          {" "}
          <h2 className=" mb-8 text-3xl   font-extrabold  text-shark-950">
            {title}
          </h2>
          <p className="    font-light  text-shark-500">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default DiplomaCard;

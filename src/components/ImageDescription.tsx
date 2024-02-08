import React from "react";
import Button from "./ui/Button";
import Image from "next/image";
import Dental from "public/images/dental-white.svg";
import Prosthesis from "/public/images/prosthesis.svg";
interface ImageDescriptionProps {
  bg: string;
  title: string;
  description: string;
}
function ImageDescription({ bg, title, description }: ImageDescriptionProps) {
  return (
    <div className={bg}>
      <div className=" place-items-cente mx-auto  my-12 grid max-w-7xl   grid-cols-1 gap-12 py-12  md:grid-cols-2">
        <div className=" mx-4 flex  flex-col gap-y-6">
          <div className=" flex h-14  w-14 items-center justify-center rounded-xl bg-shark-950">
            <Image src={Dental} alt="dental" />
          </div>
          <h2 className=" text-3xl font-extrabold   text-shark-950">{title}</h2>
          <p className="   w-3/4 text-shark-950">{description}</p>
          <span className="   w-32">
            <Button variant="default" href="/iletisim">
              İletişime Geç
            </Button>
          </span>
        </div>

        <Image
          src={Prosthesis}
          alt="ımage"
          width={697}
          height={697}
          className="hidden rounded-xl md:block"
        />
      </div>
    </div>
  );
}

export default ImageDescription;

import Image from "next/image";
import React from "react";
import Button from "./ui/Button";
import BG from "/public/images/hero-bg-ımage.png";
import Slice from "/public/images/slice.svg";
import Navbar from "./Navbar";
interface HeroProps {
  title: string;
  description: string;
  active: boolean;
}
function Hero({ title, description, active }: HeroProps) {
  return (
    <>
      <div className="absolute z-20 flex  h-screen w-full flex-col items-center  justify-center  gap-y-6 bg-black  bg-opacity-50">
        <div className="flex flex-col items-center gap-y-3">
          <h1 className=" text-4xl   font-light text-white">{title}</h1>
          <p className=" font-medium text-white">{description}</p>
        </div>
        {active ? (
          <Button variant="xl" href="/iletisim">
            İletişime Geç <span className="ml-6">&rarr;</span>
          </Button>
        ) : (
          <div className="hidden">...</div>
        )}
      </div>
      <Image
        src={BG}
        alt="dskds"
        className="h-screen w-auto object-cover md:w-screen"
      />{" "}
      <Image src={Slice} alt="sasas" className=" absolute bottom-0  z-40" />
      <Navbar />
    </>
  );
}

export default Hero;

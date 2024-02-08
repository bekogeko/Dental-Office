import React from "react";
import DiplomaCard from "~/components/DiplomaCard";
import Footer from "~/components/Footer";
import Hero from "~/components/Hero";

const Diploma = [
  {
    imageSrc: "/images/diploma.svg",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum doloremque ut consectetur, rem cumque animi molestias modi perspiciatis accusantium quas! Perspiciatis, exercitationem ut quae magni, dicta esse doloremque corporis necessitatibus officiis libero, nisi architecto nam beatae! Quos unde error dicta.",
    title: "Stay on top of customer support",
  },
  {
    imageSrc: "/images/diploma.svg",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum doloremque ut consectetur, rem cumque animi molestias modi perspiciatis accusantium quas! Perspiciatis, exercitationem ut quae magni, dicta esse doloremque corporis necessitatibus officiis libero, nisi architecto nam beatae! Quos unde error dicta.",
    title: "Stay on top of customer support",
  },
  {
    imageSrc: "/images/diploma.svg",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum doloremque ut consectetur, rem cumque animi molestias modi perspiciatis accusantium quas! Perspiciatis, exercitationem ut quae magni, dicta esse doloremque corporis necessitatibus officiis libero, nisi architecto nam beatae! Quos unde error dicta.",
    title: "Stay on top of customer support",
  },
];

function Sertifikalar() {
  return (
    <div>
      <Hero description="" title="Sertifika" />
      <div className="mx-auto my-36 flex     max-w-7xl flex-col gap-y-10 divide-y ">
        {Diploma.map((data) => (
          <DiplomaCard
            title={data.title}
            imageSrc={data.imageSrc}
            description={data.description}
          ></DiplomaCard>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Sertifikalar;

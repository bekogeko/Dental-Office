import React from "react";
import Hero from "~/components/Hero";
import Form from "~/components/Form";
import Features from "~/components/Features";
import Footer from "~/components/Footer";
const FeatureData = [
  {
    title: "Adres ",
    description: "Çalışlar caddesi Celal Nuri sk Bahçelievler İstanbul",
    imgSrc: "images/Feature-Image/feature-1.svg",
  },
  {
    title: "Telefon numarası",
    description: " (0212) 556 42 46",
    imgSrc: "images/Feature-Image/feature-2.svg",
  },
  {
    title: "Email",
    description: "gultekingulestan@example.com",
    imgSrc: "images/Feature-Image/feature-3.svg",
  },
];
function index() {
  return (
    <>
      <Hero title="İletişim" description="" active={false} />
      <div className="items-cen ter flex flex-col items-center gap-y-12">
        <div className=" flex  flex-wrap items-center  justify-evenly gap-y-6  ">
          {FeatureData.map((data) => (
            <Features
              title={data.title}
              description={data.description}
              imgSrc={data.imgSrc}
            />
          ))}
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.0658026017722!2d28.868484476769062!3d41.00193291981438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb489e95630d%3A0x70a714bbc5221dc6!2sMaster%20Dent%20Di%C5%9F%20Laboratuar%C4%B1!5e0!3m2!1str!2str!4v1707607621350!5m2!1str!2str"
          className="w-full max-w-7xl rounded-md"
          height={575}
          loading="lazy"
        ></iframe>
        <Form />
      </div>{" "}
      <Footer />
    </>
  );
}

export default index;

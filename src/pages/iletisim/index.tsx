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
      <Hero title="İletişim" description="" />
      <div className="flex flex-col items-center gap-y-12">
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387270.8503218433!2d-122.41923659816238!3d37.774929498158886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807f71dd0001%3A0xe5a022b0b6524e9!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2suk!4v1588200668781!5m2!1sen!2suk"
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

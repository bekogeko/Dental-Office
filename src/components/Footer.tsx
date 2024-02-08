import Link from "next/link";
import React from "react";
import Image from "next/image";
import Instagram from "public/images/instagram-logo.svg";
import Facebook from "public/images/facebook-logo.svg";
const FooterData = [
  { text: "Ana Sayfa", href: "/" },
  { text: "Sertifikalar", href: "/sertifikalar" },
  { text: "Hakkımızda", href: "/Hakkimizda" },
  { text: "İletişim", href: "/iletisim" },
];
function Footer() {
  return (
    <>
      <div className="flex flex-col items-center gap-y-6  bg-shark-950 py-24 font-light text-gray-200">
        <div className="flex flex-wrap gap-x-6 ">
          {FooterData.map((data) => (
            <Link href={data.href}>{data.text}</Link>
          ))}
        </div>
        <div className="flex gap-x-4">
          <Link href={"https://www.instagram.com/gultekin.bg/"}>
            <Image src={Instagram} alt="logo" />
          </Link>
          <Link
            href={
              "https://m.facebook.com/p/Master-Dental-Di%C5%9F-protez-laboratuvar%C4%B1-100063561924679/"
            }
          >
            <Image src={Facebook} alt="logo" />
          </Link>
        </div>
        <p>
          © {new Date().getFullYear()} gultekingulestan.com, Inc. All rights
          reserved.
        </p>
      </div>
    </>
  );
}

export default Footer;

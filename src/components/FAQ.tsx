import Image from "next/image";
import React from "react";
import Images from "public/images/faq-ımage.svg";
const FaqData = [
  {
    title: "Diş Protezlerinin Bakımı Nasıl Yapılmalıdır?",
    Description:
      "Diş protezlerinin uzun ömürlü olması için, günlük temizlik ve düzenli kontroller önemlidir. Diş teknisyenleri, doğru bakım yöntemleri hakkında bilgi verebilir.",
  },
  {
    title: " Porselen Diş Kaplamaları Ne Kadar Dayanıklıdır?",
    Description:
      "Porselen diş kaplamalarının dayanıklılığı, doğru bir şekilde bakıldığında ve ağız hijyeni korunduğunda uzun yıllar sürebilir. Diş teknisyenleri, kaplamaların bakımı ve dayanıklılığı hakkında danışmanlık sağlar.",
  },

  {
    title: "Diş İmplantları Ne Kadar Sürede Tamamlanır?",
    Description:
      "Diş implantları, genellikle birkaç ay süren bir süreçtir; ancak, implant yerleştirildikten sonra geçici bir protez takılabilir. Diş teknisyenleri, implant süreci hakkında bilgi verir ve implant üretimi konusunda destek sağlar.",
  },
  {
    title: "Estetik Diş Rekonstrüksiyonu İçin Hangi Seçenekler Sunulur?",
    Description:
      "Estetik diş rekonstrüksiyonunda, porselen diş kaplamaları, veneers ve bonding gibi çeşitli seçenekler sunulur. Diş teknisyenleri, hastaların ihtiyaçlarına ve tercihlerine göre en uygun çözümleri önerir ve uygular.",
  },
];
function FAQ() {
  return (
    <>
      <div className="mx-auto grid max-w-7xl grid-cols-1 flex-wrap items-center   py-32 md:grid-cols-2">
        <div>
          <Image src={Images} alt="ımage" />
        </div>
        <div className="flex flex-col divide-y ">
          {FaqData.map((data) => (
            <div divide-y-2>
              <div className="my-5    ">
                <h3 className=" mb-2  text-xl  font-bold">{data.title} </h3>
                <p className="  text-gray-500 "> {data.Description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FAQ;

import React from "react";
import Footer from "~/components/Footer";
import Hero from "~/components/Hero";
import ImageDescription from "~/components/ImageDescription";

function Hakkımızda() {
  return (
    <div className="flex flex-col gap-y-32">
      <Hero title="Hakkımızda" description="" />
      <ImageDescription
        bg=""
        title="Hakkımızda"
        description="Master dent Diş Laboratuvarı, yenilikçi ve kaliteli diş protezleri üreterek müşterilerine güvenilir, estetik ve uzun ömürlü gülüşler sunmayı hedeflemektedir. Müşteri memnuniyetini ön planda tutar."
      />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-2 ">
        <div className="rounded-md bg-slate-200 p-12">
          <h2 className=" mb-4  text-4xl font-semibold"> Vizyonumuz</h2>
          <p className="text-gray-600">
            Master dent Diş Laboratuvarı olarak, yenilikçi ve kaliteli diş
            protezleri ile müşterilerimize güvenilir, estetik ve uzun ömürlü
            gülüşler sağlamak. Diş teknisyenliğindeki en son teknolojiyi ve en
            iyi uygulama yöntemlerini kullanarak, sektörde lider bir konuma
            ulaşmak ve müşterilerimizin beklentilerini aşmak.
          </p>
        </div>
        <div className="rounded-md  bg-slate-200 p-12">
          <h2 className="mb-4   text-4xl font-semibold ">Misyonumuz</h2>
          <p className="text-gray-600">
            Mükemmelliği hedefleyen bir yaklaşımla, her bir müşterinin özel
            ihtiyaçlarına odaklanarak, en kaliteli diş protezlerini üretmek ve
            sunmak. Müşteri memnuniyetini en üst düzeyde tutarak, etik değerlere
            bağlı, güvenilir, saygın ve sosyal sorumluluk sahibi bir işletme
            olmak. Master_dent Diş Laboratuvarı olarak, diş sağlığı alanında
            topluma katkıda bulunmayı ve insanların yaşam kalitesini artırmayı
            misyon edinmek.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Hakkımızda;

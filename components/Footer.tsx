import React from "react";
import { MdLocationOn } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <main className="w-full flex flex-col justify-between items-center md:flex-row md:px-5 xl:px-[16%] max-w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1240px] 2xl:max-w-[1536px] mx-auto">
      <section className="py-8 flex flex-col gap-2 w-[50%]">
        <a className="flex flex-col items-center justify-center" href="">
          <img
            className="w-40"
            src="https://muahangtaikho.vn/media/banner/logo_bestbuys-logo-2.png"
            alt=""
          />
          <p className="text-xl font-medium">Công ty xnk và phân phối hikawa</p>
        </a>
        <p className="flex items-center gap-2">
          <MdLocationOn className="text-3xl text-primary" />
          <span className="text-[12px]">
            Số 11 Phố Mộ Lao - P.Mỗ Lao - Q.Hà Đông - TP. Hà Nội
          </span>
        </p>
        <a className="flex items-center gap-2" href="">
          <FaPhoneSquareAlt className="text-3xl text-primary" />
          <span className="text-[12px]">02222.999.999-02222.666.666</span>
        </a>
        <a className="flex items-center gap-2" href="">
          <FaPhoneSquareAlt className="text-3xl text-primary" />
          <span className="text-[12px]">0999.999.999-0666.666.666</span>
        </a>
        <div className="flex text-3xl gap-2">
          <FaFacebook className="text-blue-600" />
          <FaTwitter className="text-blue-400" />
          <MdOutgoingMail className="text-orange-600" />
          <FaYoutube className="text-red-600" />
        </div>
      </section>
      <section className="w-[50%] flex flex-col items-center">
        <div>
          <p className="uppercase text-lg font-medium">FANPAGE của chúng tôi</p>
        </div>
        <div className="w-full flex flex-col gap-5 items-center">
          <img
            className="h-[120px] w-[60%]"
            src="https://muahangtaikho.vn/media/banner/23_Jul66a0cac4bf622aa1d63ec1d39ba7bdba.png"
            alt=""
          />
          <img
            className="h-[120px] w-[60%]"
            src="https://muahangtaikho.vn/static/assets/default/images/mapmoi.png"
            alt=""
          />
        </div>
      </section>
    </main>
  );
};

export default Footer;

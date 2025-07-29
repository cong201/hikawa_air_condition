import React from "react";
import Image from "next/image";
import { MdLocationOn } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { PiClockCountdown } from "react-icons/pi";
import { FaPeopleCarry } from "react-icons/fa";
import { FcCalendar } from "react-icons/fc";
import { LuHandCoins } from "react-icons/lu";

const Footer = () => {
  return (
    <main>
      <div className="hidden md:flex w-full bg-primary flex-col py-2 mt-[200px] md:flex-row md:px-5 xl:px-[12%] justify-between max-w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1240px] 2xl:max-w-[1536px] mx-auto">
        <div className="flex items-center gap-4">
          <PiClockCountdown className="text-4xl text-yellow-400" />
          <p className="text-white text-[14px] font-medium">
            Tiện ích và tiết kiệm thời gian <br />
            Trải nghiệm mua sắm trực tuyến dễ dàng
          </p>
        </div>
        <div className="flex items-center gap-4">
          <FaPeopleCarry className="text-4xl text-yellow-400" />
          <p className="text-white text-[14px] font-medium">
            Giao hàng cực nhanh <br /> trong vòng 30 phút
          </p>
        </div>
        <div className="flex items-center gap-4">
          <FcCalendar className="text-4xl text-yellow-400" />
          <p className="text-white text-[14px] font-medium">
            Thời gian làm việc
            <br />
            tất cả các ngày trong tuần 830h - 21h30 kể cả CN
          </p>
        </div>
        <div className="flex items-center gap-4">
          <LuHandCoins className="text-4xl text-yellow-400" />
          <p className="text-white text-[14px] font-medium">
            GIÁ RẺ NHẤT HÀ NỘI
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col justify-between items-center md:flex-row md:px-5 xl:px-[16%] max-w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1240px] 2xl:max-w-[1536px] mx-auto">
        <section className="py-4 flex flex-col gap-4 w-full md:w-[50%] pl-4 md:px-0">
          <a className="flex flex-col items-center justify-center" href="">
            <Image
              src="https://muahangtaikho.vn/media/banner/logo_bestbuys-logo-2.png"
              alt=""
              width={160}
              height={40}
            />
            <p className="text-xl font-medium">
              Công ty xnk và phân phối hikawa
            </p>
          </a>
          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-2">
              <MdLocationOn className="hidden md:block text-3xl text-primary" />
              <p className="text-[16px] font-medium md:hidden">Địa chỉ:</p>
              <span className="text-[16px] md:text-[12px]">
                Số 11 Phố Mộ Lao - P.Mỗ Lao - Q.Hà Đông - TP. Hà Nội
              </span>
            </p>
            <a className="flex items-center gap-2" href="">
              <FaPhoneSquareAlt className="hidden md:block text-3xl text-primary" />
              <p className="text-[16px] font-medium md:hidden">Số đt:</p>
              <span className="text-[16px] md:text-[12px]">
                02222.999.999-02222.666.666
              </span>
            </a>
            <a className="flex items-center gap-2" href="">
              <FaPhoneSquareAlt className="hidden md:block text-3xl text-primary" />
              <p className="text-[16px] font-medium md:hidden">Số đt:</p>
              <span className="text-[16px] md:text-[12px]">
                0999.999.999-0666.666.666
              </span>
            </a>
            <a className="flex items-center gap-2" href="">
              <FaPhoneSquareAlt className="hidden md:block text-3xl text-primary" />
              <p className="text-[16px] font-medium md:hidden">Số đt:</p>
              <span className="text-[16px] md:text-[12px]">
                0999.999.999-0666.666.666
              </span>
            </a>
            <a className="text-blue-500 md:hidden" href="">
              (Xem bản đồ)
            </a>
          </div>
          <div className="hidden md:flex text-3xl gap-2">
            <a href="">
              <FaFacebook className="text-blue-600" />
            </a>
            <a href="">
              <FaTwitter className="text-blue-400" />
            </a>
            <a href="">
              <MdOutgoingMail className="text-orange-600" />
            </a>
            <a href="">
              <FaYoutube className="text-red-600" />
            </a>
          </div>
        </section>
        <section className="md:block w-full md:w-[50%] hidden flex-col items-center">
          <div>
            <p className="uppercase text-lg font-medium">
              FANPAGE của chúng tôi
            </p>
          </div>
          <div className="w-full flex flex-col gap-5 items-center">
            <a href="">
              <Image
                src="https://muahangtaikho.vn/media/banner/23_Jul66a0cac4bf622aa1d63ec1d39ba7bdba.png"
                alt=""
                width={300}
                height={120}
              />
            </a>
            <a href="">
              <Image
                src="https://muahangtaikho.vn/static/assets/default/images/mapmoi.png"
                alt=""
                width={300}
                height={120}
              />
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Footer;

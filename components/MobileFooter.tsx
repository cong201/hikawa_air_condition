"use client";
import React, { useEffect } from "react";
import { FaPhone } from "react-icons/fa6";
import { SiZalo } from "react-icons/si";
import { FaMapMarkerAlt } from "react-icons/fa";

const MobileFooter = () => {
  useEffect(() => {
    document.body.style.paddingBottom = "80px";
    return () => {
      document.body.style.paddingBottom = "";
    };
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] h-20 bg-primary md:hidden shadow-md">
      <div className="flex items-center justify-between h-full px-6 py-2">
        <a className="flex flex-col items-center justify-center" href="">
          <FaPhone className="text-3xl text-blue-500" />
          <p className="text-xs text-white mt-1">Hotline</p>
        </a>
        <a className="flex flex-col items-center justify-center" href="">
          <SiZalo className="text-3xl text-blue-500" />
          <p className="text-xs text-white mt-1">Zalo</p>
        </a>
        <a className="flex flex-col items-center justify-center" href="">
          <SiZalo className="text-3xl text-blue-500" />
          <p className="text-xs text-white mt-1">Zalo</p>
        </a>
        <a className="flex flex-col items-center justify-center" href="">
          <FaMapMarkerAlt className="text-3xl text-blue-500" />
          <p className="text-xs text-white mt-1">Địa chỉ</p>
        </a>
      </div>
    </div>
  );
};

export default MobileFooter;

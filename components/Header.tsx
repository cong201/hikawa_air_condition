"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { CiFaceSmile } from "react-icons/ci";
import { TiArrowSortedDown } from "react-icons/ti";

const products = [
  { id: 1, name: "TỔNG KHO ĐIỀU HÒA" },
  { id: 2, name: "TỔNG KHO TỦ LẠNH" },
  { id: 3, name: "TỔNG KHO TIVI - GIÁ RẺ NHẤT HÀ NỘI" },
  { id: 4, name: "TỔNG KHO MÁY GIẶT" },
  { id: 5, name: "ĐIỀU HÒA ÂM TRẦN" },
  { id: 6, name: "TỦ ĐÔNG - TỦ MÁT" },
  { id: 7, name: "NỘI THẤT NHÀ BẾP" },
  { id: 8, name: "DÀN ÂM THANH" },
];
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main>
      {/* Connect on mobile */}
      <section className="flex w-full items-center justify-between bg-blue-500 z-50 py-1 px-2 md:hidden">
        <div className="flex items-center gap-1">
          <FaPhoneSquareAlt className="rounded-4xl z-100 text-[14px]" />
          <a className="text-yellow-200 text-[11px]" href="">
            Đặt Hàng Trực Tuyến : 0999.999.999 - 0888.888.888
          </a>
        </div>
        <div className="flex gap-0.5">
          <CiFaceSmile className="rounded-4xl bg-yellow-400" />
          <TiArrowSortedDown className="text-yellow-400" />
        </div>
      </section>

      {/* Search section */}
      <section className="py-4 md:py-0 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-full">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          {/* Logo */}
          <a href="" className="flex justify-center md:justify-start">
            <img
              className="w-40"
              src="https://muahangtaikho.vn/media/banner/logo_bestbuys-logo-2.png"
              alt=""
            />
          </a>
          <div className="hidden md:flex items-center justify-center gap-5">
            <div className="text-primary flex flex-col justify-center items-center">
              <FaPhoneVolume className="text-3xl" />
              <p>Hotline</p>
            </div>
            <div className="flex flex-col text-2xl text-blue-600 font-bold">
              <a href="" className="animate-pulse">
                0999.999.999
              </a>
              <a href="" className="animate-pulse">
                0888.888.888
              </a>
              <a href="" className="animate-pulse">
                0666.666.666
              </a>
            </div>
          </div>
          <div className=" flex justify-center md:max-w-xl md:relative">
            <div className="w-full relative flex">
              <span className="absolute left-2 top-2 text-gray-700 text-xl">
                <CiSearch />
              </span>
              <Input className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-r-none rounded-l-md focus:outline-none focus-visible:ring-0 focus-visible:border-primary focus:border-primary" />
              <Button className="bg-primary border border-primary text-white px-8 rounded-l-none hover:bg-transparent hover:text-primary transition hover:cursor-pointer">
                Search
              </Button>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a
              href=""
              className="text-center text-gray-700 hover:text-primary transition relative"
            >
              <div className="text-2xl">
                <GoHeart />
              </div>
              <div className="text-xs leading-3">Wish</div>
              <span className="absolute -right-1 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                5
              </span>
            </a>
            <a
              href=""
              className="text-center text-gray-700 hover:text-primary transition relative"
            >
              <div className="text-2xl">
                <FaShoppingBag />
              </div>
              <div className="text-xs leading-3">Cart</div>
              <span className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                4
              </span>
            </a>
            <a
              href=""
              className="text-center text-gray-700 hover:text-primary transition relative"
            >
              <div className="text-2xl">
                <FaUserAlt />
              </div>
              <div className="text-xs leading-3">User</div>
            </a>
          </div>
        </div>
      </section>

      {/* Navbar */}
      <section className="bg-gray-800">
        <div className="w-full flex flex-col md:flex-row md:px-5 xl:px-[60px] max-w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1240px] 2xl:max-w-[1536px] mx-auto">
          <div
            className="px-8 md:py-4 py-2 bg-primary flex items-center gap-2 cursor-pointer justify-center md:justify-start"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="ml-2 text-white uppercase font-medium">
              Danh sách sản phẩm
            </span>
            <FaBars className="text-white block md:hidden" />
            <IoMdArrowDroprightCircle className="text-white hidden md:block" />
          </div>

          <div className="hidden md:flex items-center justify-between flex-grow pl-12">
            {products.map((product) => (
              <div key={product.id} className="flex items-center capitalize">
                <a className="text-gray-300 hover:text-white transition text-[12px] text-center font-medium hover:cursor-pointer">
                  {product.name}
                </a>
              </div>
            ))}
          </div>
          {isOpen && (
            <div className="md:hidden w-full bg-gray-900 px-4 py-3 flex flex-col gap-2">
              {products.map((product) => (
                <div key={product.id} className="capitalize">
                  <a className="text-gray-300 hover:text-white transition text-[14px] font-medium hover:cursor-pointer">
                    {product.name}
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Header;

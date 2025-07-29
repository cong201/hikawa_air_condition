"use client";
import React, { useState } from "react";
import Image from "next/image";
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
import { products } from "@/data/products";

interface Product {
  id: number;
  name: string;
  href: string;
  current: boolean;
  productCategory: any[];
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showProductCategory, setShowProductCategory] = useState(false);

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
    setShowProductCategory(true);
  };

  const handleMouseLeave = () => {
    setShowProductCategory(false);
  };

  return (
    <main className="w-full flex flex-col md:px-5 xl:px-[8%] max-w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1240px] 2xl:max-w-[1536px] mx-auto">
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
      <section className="mb-[10px] md:mb-0">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          {/* Logo */}
          <a href="" className="flex justify-center md:justify-start">
            <Image
              src="https://muahangtaikho.vn/media/banner/logo_bestbuys-logo-2.png"
              alt=""
              width={160}
              height={40}
            />
          </a>
          <div className="hidden md:flex items-center justify-center gap-5">
            <div className="text-primary flex flex-col justify-center items-center">
              <FaPhoneVolume className="text-3xl" />
              <p>Hotline</p>
            </div>
            <div className="flex flex-col text-xl text-blue-600 font-bold">
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
      <section
        className="bg-gray-800 w-screen relative left-1/2 -translate-x-1/2"
        onMouseLeave={handleMouseLeave}
      >
        <div className="w-full flex flex-col md:flex-row xl:px-[8%]">
          <div
            className="px-2 md:py-4 py-2 bg-primary flex items-center gap-2 cursor-pointer justify-center md:justify-start"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="ml-2 text-white uppercase font-medium">
              Danh sách sản phẩm
            </span>
            <FaBars className="text-white block md:hidden" />
            <IoMdArrowDroprightCircle className="text-white hidden md:block" />
          </div>
          <div className="hidden md:flex items-center justify-between flex-grow pl-2 relative">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="flex items-center capitalize relative"
                onMouseOver={() => handleProductClick(product)}
                onMouseLeave={() => handleMouseLeave()}
              >
                <a className="text-gray-300 hover:text-white transition text-[12px] text-center font-medium hover:cursor-pointer">
                  {product.name}
                </a>
                {showProductCategory &&
                  selectedProduct &&
                  selectedProduct.id === product.id &&
                  selectedProduct.productCategory.length > 0 && (
                    <div className="absolute top-full left-0 bg-gray-800 p-4 z-10 w-max">
                      {selectedProduct.productCategory.map((category: any) => (
                        <div key={category.id}>
                          <a className="text-gray-300 hover:text-white transition text-[12px] font-medium hover:cursor-pointer whitespace-nowrap">
                            {category.name}
                          </a>
                        </div>
                      ))}
                    </div>
                  )}
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

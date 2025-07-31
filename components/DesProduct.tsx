import React from "react";
import { IoMdAddCircle } from "react-icons/io";
import { Button } from "./ui/button";
const DesProduct = () => {
  return (
    <div className="flex flex-row justify-center items-center w-[70%] gap-10">
      <section className="flex flex-row gap-4 items-center justify-center">
        <div>
          <img
            className="w-[180px]"
            src="https://muahangtaikho.vn/media/product/250_4600_rt22.png"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-bold hover:text-yellow-600 hover:cursor-pointer">
            Tủ lạnh Samsung RT22FARBDSA - 236 Lít Inverter
          </h1>
          <div className="flex flex-row justify-between">
            <p className="flex gap-2">
              <span className="font-semibold">Hãng:</span>
              <span>Samsung</span>
            </p>
            <p className="flex gap-2">
              <span className="font-semibold">Xuất xứ:</span>
              <span>Samsung</span>
            </p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="flex gap-2">
              <span className="font-semibold">Mã hàng:</span>
              <span>Samsung</span>
            </p>
            <p className="flex gap-2">
              <span className="font-semibold">Kho hàng:</span>
              <span className="text-green-400">Còn hàng</span>
            </p>
          </div>
          <p className="flex gap-2">
            <span className="font-semibold">Bảo hành:</span>
            <span>Chính hãng 24 tháng toàn quốc</span>
          </p>
          <div className="flex items-center gap-2">
            <IoMdAddCircle className="text-[18px] text-yellow-600" />
            <span className="text-yellow-600">So sánh</span>
          </div>
        </div>
      </section>
      <section>
        <p className="flex gap-2 items-center ">
          <span className="font-semibold">Giá thường:</span>
          <span className="text-gray-300 text-lg line-through">8.750.000đ</span>
        </p>
        <p className="flex gap-2 items-center">
          <span className="font-semibold">Giá bán:</span>
          <span className="text-red-600 text-xl font-bold">4.750.000đ</span>
          <div className="bg-red-500 p-0.5 text-[12px] rounded-[4px]">
            <span className="text-white font-medium">-25%</span>
          </div>
        </p>
      </section>
    </div>
  );
};

export default DesProduct;

import React from "react";
import {
  airCondition,
  washing,
  fridge,
  television,
  products,
} from "@/data/products";
import { IoIosArrowRoundForward } from "react-icons/io";

const MainProducts = () => {
  return (
    <main>
      {products.map((product, index) => (
        <section
          key={index}
          className="flex justify-between border-t-2 border-primary mt-6 items-center"
        >
          <div className="flex items-center gap-6">
            <div className="bg-primary p-1">
              <p className="uppercase text-lg font-medium text-white">
                {product.name}
              </p>
            </div>
            {product.productCategory.length > 0 && (
              <div className="flex gap-10 ">
                {product.productCategory.map((category, index) => (
                  <a key={index} href="" className="text-[16px] uppercase">
                    {category.name}
                  </a>
                ))}
              </div>
            )}
          </div>
          <a className="underline flex items-center text-sm font-[400]" href="">
            Xem tất cả <IoIosArrowRoundForward />
          </a>
        </section>
      ))}
    </main>
  );
};

export default MainProducts;

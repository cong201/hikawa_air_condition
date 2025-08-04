"use client";
import { useEffect, useState } from "react";
import { products } from "@/data/products";
import { Card, CardContent } from "@/components/CardProduct";
import { IoIosArrowRoundForward } from "react-icons/io";

const dataProducts = [
  {
    name: "Tủ lạnh Toshiba GR-RS775WI-PMV(06)-MG Inverter 596 lít",
    oldPrice: "19.000.000",
    newPrice: "17.500.000",
    percent: "25%",
  },
  {
    name: "Tủ lạnh Toshiba GR-RS775WI-PMV(06)-MG Inverter 596 lít",
    oldPrice: "18.000.000",
    newPrice: "17.500.000",
    percent: "30%",
  },
  {
    name: "Tủ lạnh Toshiba GR-RS775WI-PMV(06)-MG Inverter 596 lít",
    oldPrice: "20.000.000",
    newPrice: "17.500.000",
    percent: "30%",
  },
  {
    name: "Tủ lạnh Toshiba GR-RS775WI-PMV(06)-MG Inverter 596 lít",
    oldPrice: "21.000.000",
    newPrice: "15.500.000",
    percent: "30%",
  },
  {
    name: "Tủ lạnh Toshiba GR-RS775WI-PMV(06)-MG Inverter 596 lít",
    oldPrice: "23.000.000",
    newPrice: "17.500.000",
    percent: "30%",
  },
  {
    name: "Tủ lạnh Toshiba GR-RS775WI-PMV(06)-MG Inverter 596 lít",
    oldPrice: "19.000.000",
    newPrice: "17.500.000",
    percent: "40%",
  },
  {
    name: "Tủ lạnh Toshiba GR-RS775WI-PMV(06)-MG Inverter 596 lít",
    oldPrice: "19.000.000",
    newPrice: "17.500.000",
    percent: "66%",
  },
  {
    name: "Tủ lạnh Toshiba GR-RS775WI-PMV(06)-MG Inverter 596 lít",
    oldPrice: "23.000.000",
    newPrice: "17.500.000",
    percent: "30%",
  },
  {
    name: "Tủ lạnh Toshiba GR-RS775WI-PMV(06)-MG Inverter 596 lít",
    oldPrice: "19.000.000",
    newPrice: "17.500.000",
    percent: "40%",
  },
  {
    name: "Tủ lạnh Toshiba GR-RS775WI-PMV(06)-MG Inverter 596 lít",
    oldPrice: "19.000.000",
    newPrice: "17.500.000",
    percent: "66%",
  },
  {
    name: "Tủ lạnh Toshiba GR-RS775WI-PMV(06)-MG Inverter 596 lít",
    oldPrice: "23.000.000",
    newPrice: "17.500.000",
    percent: "30%",
  },
  {
    name: "Tủ lạnh Toshiba GR-RS775WI-PMV(06)-MG Inverter 596 lít",
    oldPrice: "19.000.000",
    newPrice: "17.500.000",
    percent: "40%",
  },
  {
    name: "Tủ lạnh Toshiba GR-RS775WI-PMV(06)-MG Inverter 596 lít",
    oldPrice: "19.000.000",
    newPrice: "17.500.000",
    percent: "66%",
  },
];

const MainProducts = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  if (isMobile === null) return null;
  const visibleProducts = isMobile
    ? dataProducts.slice(0, 3)
    : dataProducts.slice(0, 5);
  return (
    <main>
      {products.map((product, index) => (
        <div key={index}>
          <section className="flex justify-between border-t-2 border-primary mt-6 items-center">
            <div className="flex items-center gap-6">
              <div className="bg-primary p-1 rounded-bl-xl rounded-br-xl">
                <p className="uppercase text-sm font-medium text-white italic px-2 py-1">
                  {product.name}
                </p>
              </div>
              {product.productCategory.length > 0 && (
                <div className="hidden sm:flex gap-10">
                  {product.productCategory.map((category, index) => (
                    <a
                      key={index}
                      href=""
                      className="text-[14px] uppercase font-medium"
                    >
                      {category.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a
              className="flex items-center text-sm font-medium text-blue-400"
              href=""
            >
              Xem tất cả <IoIosArrowRoundForward />
            </a>
          </section>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-5 px-1 mt-[8px] gap-2">
              {visibleProducts.map((product, index) => (
                <Card key={index}>
                  <CardContent
                    name={product.name}
                    oldPrice={product.oldPrice}
                    newPrice={product.newPrice}
                    percent={product.percent}
                  />
                </Card>
              ))}
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default MainProducts;

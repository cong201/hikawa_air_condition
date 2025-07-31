import { Card, CardContent } from "@/components/CardProduct";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
];
const SaleProducts = () => {
  return (
    <div>
      <section className="hidden sm:flex bg-orange-400 p-[40px] w-full flex-col items-center justify-center gap-[20px] border border-gray-500">
        <div className="bg-orange-600 flex items-center rounded-2xl justify-center w-[50%]">
          <a className="text-[30px] text-white font-bold italic" href="">
            Xả hàng - Không lợi nhuận
          </a>
        </div>
        <Carousel className="w-full">
          <CarouselContent className="-ml-1">
            {dataProducts.map((product, index) => (
              <CarouselItem key={index} className="pl-1 basis-1/5">
                <div>
                  <Card>
                    <CardContent
                      name={product.name}
                      oldPrice={product.oldPrice}
                      newPrice={product.newPrice}
                      percent={product.percent}
                    />
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </div>
  );
};

export default SaleProducts;

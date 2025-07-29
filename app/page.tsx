import MainProducts from "@/components/homePages/MainProducts";
import SaleProducts from "@/components/homePages/SaleProducts";

export default function Home() {
  return (
    <main className="w-full mt-[20px] flex flex-col md:px-5 xl:px-[8%] max-w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1240px] 2xl:max-w-[1536px] mx-auto">
      <SaleProducts />
      <MainProducts />
    </main>
  );
}

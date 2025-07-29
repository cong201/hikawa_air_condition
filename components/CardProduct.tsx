import * as React from "react";
import { RiPriceTagFill } from "react-icons/ri";
import { Checkbox } from "@/components/ui/checkbox";

import { cn } from "@/lib/utils";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col border shadow-sm",
        className
      )}
      {...props}
    />
  );
}

function CardContent({
  className,
  name,
  oldPrice,
  newPrice,
  percent,
  ...props
}: React.ComponentProps<"div"> & {
  name: string;
  oldPrice: string;
  newPrice: string;
  percent: string;
}) {
  return (
    <div className="p-4" {...props}>
      <div data-slot="card-content" />
      <div className="flex flex-col gap-4">
        <div className="relative">
          <img
            src="https://muahangtaikho.vn/media/product/250_3468_t____l___nh_side_by_side_680l__rs62r5001m9sv_.png"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute -top-5 -left-5">
            <RiPriceTagFill className="text-[52px] text-red-500 font-medium" />
            <p className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[14px] font-bold">
              -{percent}
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="font-medium text-[15px]">{name}</p>
          <span className="text-[15px] text-gray-400 line-through">
            {oldPrice}
          </span>
          <span className="text-[20px] font-bold text-red-500 flex">
            {newPrice} <p className="underline">đ</p>
          </span>
          <div className="flex gap-1 items-center">
            <Checkbox className="border-black border-2" />
            <span>Thêm vào so sánh</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Card, CardContent };


import { FaHeart, FaShoppingCart } from "react-icons/fa";
import React from "react";
import Image from "next/image";
import Sumka from "@/assets/images/sumka.png";
import Img2 from "@/public/clothes.png";
import Img3 from "@/public/clothes.png";
import Img4 from "@/public/clothes.png";

const products = [
  {
    name: "Бутса Nike Mercurial Superfly 8 FG",
    oldPrice: "750 000",
    newPrice: "500 000",
    image: Sumka,
  },
  {
    name: "Бутса Nike Mercurial Superfly 8 FG",
    oldPrice: "750 000",
    newPrice: "500 000",
    image: Img2,
  },
  {
    name: "Бутса Nike Mercurial Superfly 8 FG",
    oldPrice: "750 000",
    newPrice: "500 000",
    image: Sumka,
  },
  {
    name: "Бутса Nike Mercurial Superfly 8 FG",
    oldPrice: "750 000",
    newPrice: "500 000",
    image: Img4,
  },
];

const Index = () => {
  return (
    <div className="bg-custom-gray font-Fira-sans min-h-screen mt-[30px] pt-[30px]">
      <div className="container mx-auto p-1">
        <h1 className=" text-[32px] text-center lg:text-left lg:text-4xl font-medium leading-normal mb-[42px]">
          Акция
        </h1>
        <div className=" flex justify-center">
          <div className="grid  lg:mx-0 grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-[24px]">
            {products.map((product, index) => (
              <div
                key={index}
                className="border rounded-lg overflow-hidden shadow-lg  w-[292px] bg-white relative cursor-pointer transform transition-transform "
              >
                <div className="relative pt-[25px]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={242}
                    height={194}
                    className="w-full hover:scale-95 duration-300"
                  />
                  <button className="absolute top-2 right-2  p-1 rounded-full  transition-colors hover:bg-gray-200">
                    <i className="bi bi-heart text-[18px] bg-transparent font-bold cursor-pointer"></i>
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 w-[216px]">
                    {product.name}
                  </h3>
                  <div className="text-red-500 font-bold text-xl">
                    {product.newPrice} uzs
                  </div>
                  <div className="text-gray-500 line-through mb-1">
                    {product.oldPrice} uzs
                  </div>
                  <button className="flex w-full items-center justify-center gap-3 py-[15px] bg-[#FBD029] rounded-br-md rounded-bl-md">
                    <i className="bi bi-cart3"></i>
                    Корзина
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
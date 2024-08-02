"use client";
import { FaShoppingCart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import productsApi from "@/components/service/product";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Index = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await productsApi.get();

      if (response.data) {
        const products = Array.isArray(response.data) ? response.data : response.data.products;
        if (Array.isArray(products)) {
          setData(products);
        } 
      } 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="font-Fira-sans min-h-screen pb-12">
      <div className="flex justify-center">
        <div className="flex flex-col gap-4 sm:flex-col lg:flex-row">
          {data.length > 0 ? (
            data.map((product) => {
              const { image_url, product_name, product_id, cost, discount } = product;
              return (
                <div
                  key={product_id}
                  className="border rounded-lg overflow-hidden shadow-lg w-[292px] bg-white relative cursor-pointer transform transition-transform hover:scale-105"
                >
                  <div className="relative pt-[25px]">
                    {image_url?.length > 0 ? (
                      <Image
                        src={image_url[0]}
                        alt={product_name}
                        width={242}
                        height={194}
                        className="w-full"
                        priority
                      />
                    ) : (
                      <div className="w-[242px] h-[194px] bg-gray-200 flex items-center justify-center">
                        No Image
                      </div>
                    )}
                    <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md transition-colors hover:bg-gray-200">
                      <FiHeart />
                    </button>
                  </div>
                  <div className="p-4">
                    <Link href={`/products`} className="text-lg font-bold mb-2 w-[216px]">
                      {product_name}
                    </Link>
                    <div className="text-red-500 font-bold text-xl">
                      {cost - (cost * discount) / 100} uzs
                    </div>
                    <div className="text-gray-500 line-through mb-1">
                      {cost} uzs
                    </div>
                    <button className="mt-4 w-full bg-yellow-500 text-white py-2 rounded-lg flex items-center justify-center transition-colors hover:bg-yellow-600">
                      <FaShoppingCart className="mr-2" /> Add to Cart
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div>No Products Available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;

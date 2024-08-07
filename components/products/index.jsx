"use client";
import { FaShoppingCart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import productsApi from "@/components/service/product";
import LikePost from "@/components/service/like";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Basket from "@/components/service/karzina";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ text, bg }) => {
  const [data, setData] = useState([]);
  const [likedItems, setLikedItems] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await productsApi.get();
        const products = response.data?.products || response.data || [];
        setData(products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
    const storedLikedItems = localStorage.getItem("likedItems");
    if (storedLikedItems) {
      setLikedItems(JSON.parse(storedLikedItems));
    }
  }, []);

  const handleLike = async (id) => {
    try {
      const response = await LikePost.postLike(id);
      const updatedLikedItems = response.data
        ? [...likedItems, id]
        : likedItems.filter((itemId) => itemId !== id);

      setLikedItems(updatedLikedItems);
      localStorage.setItem("likedItems", JSON.stringify(updatedLikedItems));
      toast.success(response.data ? "Product added to wishlist" : "Product removed from wishlist");
    } catch (error) {
      console.error("Error liking product:", error);
      toast.error("Error liking product");
    }
  };

  const handleBasket = async (id) => {
    try {
      const response = await Basket.basketPost({ productId: id, quantity: 1 });
      if (response.data) {
        toast.success("Product added to basket successfully");
      } else {
        console.error("Failed to add product to basket:", response);
        toast.error("Failed to add product to basket");
      }
    } catch (error) {
      console.error("Error adding product to basket:", error);
      toast.error("Error adding product to basket");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="font-Fira-sans mt-4 pb-1">
        <div className="flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-4">
            {data.length > 0 ? (
              data.map((product) => (
                <div
                  key={product.product_id}
                  className="border rounded-lg overflow-hidden shadow-lg w-full bg-white relative cursor-pointer transform transition-transform hover:scale-105"
                >
                  <div className="relative w-full h-48">
                    {product.image_url?.length > 0 ? (
                      <Image
                        src={product.image_url[0]}
                        alt={product.product_name}
                        layout="fill"
                        objectFit="cover"
                        className="w-full h-full"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        No Image
                      </div>
                    )}
                    <button
                      className={`absolute top-2 right-2 p-1 rounded-full shadow-md transition-colors ${
                        likedItems.includes(product.product_id)
                          ? "bg-red-500 text-white"
                          : "bg-white hover:bg-gray-200"
                      }`}
                      onClick={() => handleLike(product.product_id)}
                    >
                      <FiHeart />
                    </button>
                  </div>
                  <div className="p-4">
                    <Link href={`/product/${product.product_id}`} className="text-md font-bold mb-2 block">
                      {product.product_name}
                    </Link>
                    <div className="text-red-500 font-bold text-lg">
                      {product.cost - (product.cost * product.discount) / 100} uzs
                    </div>
                    <div className="text-gray-500 line-through mb-1 text-sm">
                      {product.cost} uzs
                    </div>
                    <button
                      onClick={() => handleBasket(product.product_id)}
                      className="mt-2 w-full bg-yellow-500 text-white py-1 rounded-lg flex items-center justify-center transition-colors hover:bg-yellow-600 text-sm"
                    >
                      <FaShoppingCart className="mr-1" /> Корзина
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div>No products available</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;

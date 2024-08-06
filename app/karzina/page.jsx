"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Basket from "@/components/service/karzina";
import click from "@/public/click.png";
import payme from "@/public/payme.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Index = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await Basket.get();
        setProducts(response.data.map((product) => ({
          ...product,
          count: product.count || 0,
        })));
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const handleProductUpdate = (id, action) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.product_id === id
          ? { ...product, count: action === "increment" ? product.count + 1 : Math.max(product.count - 1, 0) }
          : product
      )
    );
  };

  const handleDeleteProduct = async (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.product_id !== id)
    );
    try {
      await Basket.basketdel(id);
      toast.success("Product deleted successfully");
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Failed to delete product. Please try again later.");
    }
  };

  const totalSum = products.reduce((total, product) => total + product.count * product.cost, 0);

  return (
    <>
      <ToastContainer />
      <div className="bg-custom-gray p-4 md:p-8">
        <div className="container mx-auto">
          <div className="flex flex-col justify-center items-center sm:justify-center gap-6 md:gap-8 lg:flex-row">
            <div className="w-full max-w-md md:max-w-3xl lg:w-2/3 h-auto rounded-lg bg-white p-4 md:p-6">
              <div className="flex justify-between items-center pt-4 pb-4">
                <h1 className="text-lg md:text-xl font-bold">Ваша корзина</h1>
                <button onClick={() => setProducts([])} className="text-red-500">Очистить все</button>
              </div>
              <div className="space-y-4">
                {products.length ? (
                  products.map((product) => (
                    <div key={product.product_id} className="flex flex-col md:flex-row gap-4 border rounded-lg overflow-hidden p-4 bg-custom-gray relative">
                      <button onClick={() => handleDeleteProduct(product.product_id)} className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white flex justify-center items-center">
                        <DeleteOutlineOutlinedIcon />
                      </button>
                      <Image src={product.image_url[0]} alt={product.product_name} width={145} height={100} className="w-full md:w-[145px] h-[100px] object-cover" />
                      <div className="flex-1 flex flex-col justify-between">
                        <div className="font-bold text-lg md:text-xl">{product.product_name}</div>
                        <div className="flex items-center gap-2">
                          <button onClick={() => handleProductUpdate(product.product_id, "decrement")} className="bg-white border w-8 h-8 flex items-center justify-center font-bold rounded-full">-</button>
                          <span>{product.count}</span>
                          <button onClick={() => handleProductUpdate(product.product_id, "increment")} className="bg-white border w-8 h-8 flex items-center justify-center font-bold rounded-full">+</button>
                          <span className="pl-4 text-lg font-bold">{(product.count * product.cost).toLocaleString()} uzs</span>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div>No products in the basket</div>
                )}
              </div>
              <h3 className="pt-4 pb-4 text-lg font-semibold">Все информация о доставке</h3>
              <p className="max-w-md">Если у вас имеется вопросы позвоните по номеру:+998 (99) 995 55 65</p>
            </div>
            <div className="w-full max-w-sm lg:max-w-[504px] h-auto bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="text-lg font-semibold mb-2">Итого</div>
                <div className="flex flex-col gap-4 mb-4">
                  <div className="flex justify-between"><span>Кол-во товаров:</span><span>{products.length}</span></div>
                  <div className="flex justify-between"><span>Сумма:</span><span className="font-semibold">{totalSum.toLocaleString()} UZS</span></div>
                </div>
                <form>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Имя / Фамилия</label>
                    <input id="name" type="text" placeholder="Имя / Фамилия" className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Ваш номер</label>
                    <input id="phone" type="text" placeholder="+998 _ _ _ _ _ _ _" className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">Адрес доставки</label>
                    <div className="relative">
                      <input id="address" type="text" placeholder="Область/город/улица/дом" className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" />
                      <button type="button" className="absolute right-0 top-0 mt-2 mr-2 text-yellow-500">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="text-lg font-semibold mb-2">Тип оплаты</div>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <button type="button" className="px-3 py-2 text-sm font-semibold text-gray-700 border rounded-lg flex items-center justify-center">
                      <Image src={click} alt="click" className="w-20 h-10" />
                    </button>
                    <button type="button" className="flex justify-center items-center px-4 py-2 text-sm font-semibold text-gray-700 border rounded-lg">
                      <Image src={payme} alt="payme" className="w-[80px] h-[38px]" />
                    </button>
                    <button type="button" className="px-3 py-2 text-sm font-semibold text-gray-700 border rounded-lg">Через карту</button>
                    <button type="button" className="px-3 py-2 text-sm font-semibold text-gray-700 border rounded-lg">Банковский счёт</button>
                  </div>
                  <button type="submit" className="w-full px-4 py-2 mt-4 text-white bg-yellow-500 rounded-lg font-semibold">Купить</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;

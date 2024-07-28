"use client";

import React from "react";
import { GlobalCard } from '@/components/ui'
import Image from "next/image";
import HomeIcon from "@/public/u_home-alt.svg";
import Next from "@/public/right (2).svg";

const Index = () => {
  return (
    <main>
      <section className="pt-5 pb-[83px] bg-[#F2F2F2]">
        <div className="container mx-auto px-2.8">
          <nav className="text-gray-500 flex text-sm mb-4 flex-wrap items-center">
            <Image src={HomeIcon} alt="img" className="mr-1" />
            <a href="/" className="hover:underline mr-1">
              Главная
            </a>{" "}
            <Image src={Next} className="mr-1" alt="img" />{" "}
            <p className="text-gray-500">Продукты</p>
            <Image src={Next} className="ml-1 mr-1" alt="img" />{" "}
            <p className="text-black">Оплата и Доставка</p>
          </nav>
          <div className="min-h-screen bg-[#F2F2F2] flex flex-col lg:flex-row">
            <aside className="w-full lg:w-[187px] h-64 p-6 bg-white shadow-md mb-4 lg:mb-0">
              <nav className="space-y-4">
                <div className="flex items-center">
                  <div className="w-1 h-12 bg-yellow-400 mr-2"></div>
                  <div className="space-y-1">
                    <a
                      href="#"
                      className="block text-gray-700 font-bold hover:underline"
                    >
                      Оплата и Доставка
                    </a>
                  </div>
                </div>
              </nav>
            </aside>

            <main className="flex-1 pl-0 lg:pl-6 bg-[#F2F2F2]">
              <div className="bg-white w-full lg:w-[714px] h-auto p-10 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Способы оплаты</h2>
                <p className="mb-4">
                  Для того, чтобы оплатить товар, Вам нужно перейти в «Корзину»
                  и выбрать тот товар, который Вы хотите купить.
                </p>
                <p className="mb-6">
                  После перехода в Корзину, откроется список товаров, которые Вы
                  добавили. Далее, нажимаем кнопку «Оформить заказ». В окне,
                  появится «Контактная информация» и «Способы доставки», которые
                  Вам не обходимо заполнить.
                </p>
                <p className="mb-6">
                  Вы можете выбрать более подходящий для Вас способ оплаты:
                  -Оплата на месте; -Оплата по терминалу; -Оплата через
                  платёжные системы, такие как CLICK, Payme.
                </p>
                <p className="mb-6">
                  Оплатить покупки можно наличными при получении. Убедительная
                  просьба вначале ознакомиться с товаром, убедиться в отсутствии
                  дефектов в присутствии курьера, после чего оплачивать сумму.
                </p>
                <h2 className="text-2xl font-bold mt-4 mb-4">Доставка</h2>
                <p className="mb-4">Тарифы на доставку товаров по Ташкенту:</p>
                <p className="mb-6">
                  -20.000 сум для товаров до 150.000 сум -Бесплатная доставка
                  для всех товаров от 150.000 сум
                </p>
                <p className="mb-6">
                  Тарифы на доставку товаров по всех регионов: -Платная доставка
                  для всех товаров по согласованной цене -Бесплатная установка
                  для всех тренажеров
                </p>
                
              </div>
            </main>
          </div>
          <div className="mt-10">
            <GlobalCard/>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
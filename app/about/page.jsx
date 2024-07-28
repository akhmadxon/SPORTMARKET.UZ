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
            <p className="text-black">О нас</p>
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
                      О нас
                    </a>
                    <a
                      href="#"
                      className="block text-gray-700 font-bold hover:underline"
                    >
                      Вканансия
                    </a>
                  </div>
                </div>
              </nav>
            </aside>

            <main className="flex-1 pl-0 lg:pl-6 bg-[#F2F2F2]">
              <div className="bg-white w-full lg:w-[714px] h-auto p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">7 SPORT MARKET</h2>
                <p className="mb-4">
                  В составе томатов в большом количестве содержатся сахар,
                  клетчатка, пектины, бета-каротин, витамины B1, B2, B5, B6, B9,
                  C, K, H и PP, а также нужные организму человека.
                </p>
                <p className="mb-4">
                  Овощи содержат в себе много полезных витаминов, которые
                  укрепляют здоровье и иммунитет и являются необходимым
                  компонентом в рационе человека. Тепличный помидор - всегда
                  доступен для вас и в сети супермаркетов “Makro” вы всегда
                  можете найти его по выгодной цене и заказать их с доставкой в
                  Ташкенте.
                </p>
                <p className="mb-4">
                  В составе томатов в большом количестве содержатся сахар,
                  клетчатка, пектины, бета-каротин, витамины B1, B2, B5, B6, B9,
                  C, K, H и PP, а также нужные организму человека.
                </p>
                <p className="mb-4">
                  Овощи содержат в себе много полезных витаминов, которые
                  укрепляют здоровье и иммунитет и являются необходимым
                  компонентом в рационе человека. Тепличный помидор - всегда
                  доступен для вас и в сети супермаркетов “Makro” вы всегда
                  можете найти его по выгодной цене и заказать их с доставкой в
                  Ташкенте.
                </p>
                <div className="flex justify-between items-center mt-4 flex-wrap">
                  <div className="flex  space-x-4 mb-4 lg:mb-0">
                    <a href="#" className="text-black ">
                      Поделиться:
                      <i className="bi bi-share ml-1"></i>
                    </a>
                    <a href="#" className="text-black bold ">
                      Распечатать:
                      <i className="bi bi-printer ml-1"></i>
                    </a>
                  </div>
                  <button className="text-gray-500 hover:text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </main>
          </div>
          <div className="mt-10">
            <GlobalCard />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Modal from "@/components/signin/index";
import logo from "../../assets/icons/logo.svg";
import Shop from "../../public/shop.svg";
import User from "../../public/u_user.svg";
import Heart from "../../public/u_heart-sign.svg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const data = [
    { title: "Продукты", path: "/product" },
    { title: "Контакты", path: "/single" },
    { title: "Оплата и Доставка", path: "/delivery" },
    { title: "Новости", path: "/news" },
    { title: "О нас", path: "/about" },
    
  ];

  
  return (
    <>
    <Modal
        open={open}
        handleClose={handleClose}
        handleOpen={() => handleOpen(false)}
      />
      <nav>
        <div className="w-full bg-[#1F1D14]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center">
                <Link href="/">
                  <Image src={logo} width={189} height={59} alt="logo" />
                </Link>
              </div>
              <div className="flex items-center lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-white focus:outline-none"
                >
                  <i
                    className={`bi ${isOpen ? "bi-x" : "bi-list"} text-2xl`}
                  ></i>
                </button>
              </div>
              <div className="hidden lg:flex lg:items-center lg:gap-8">
                <ul className="flex items-center gap-8">
                  {data.map((item, index) => (
                    <li key={index}>
                      <Link href={item.path} className="text-white hover:text-orange-300">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-8">
                  <p className=" text-white flex cursor-pointer hover:text-orange-300 items-center gap-1">
                    <i className="bi bi-telephone text-white"></i>
                      +998 (90) 120-00-39
                  </p>
                  <p className="text-white cursor-pointer flex hover:text-orange-300 items-center gap-2">
                    <i className="bi bi-envelope text-white"></i>
                    info@gmail.com
                  </p>  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4 flex items-center justify-between">
            <div className="flex items-center gap-4 lg:gap-10">
              <button className="flex items-center gap-4 lg:gap-10 px-4 py-2 lg:px-10 lg:py-3 rounded bg-black text-white">
                <i className="bi bi-stack"></i>
                <span className="hidden lg:inline">Каталог</span>
              </button>
              <div className="relative  w-[100px]  lg:w-[402px] h-10 lg:h-12 md:w-[302px] sm:w-full flex ">
                <input
                  type="text"
                  className="w-full h-full py-2 px-4 lg:px-10 rounded outline-none bg-[#F2F2F2] placeholder:text-black"
                  placeholder="Поиск"
                />
                <i className="bi bi-search absolute top-2 right-3 lg:top-3"></i>
              </div>
            </div>
            <div className="flex items-center gap-4 lg:gap-8">
              <button className="rounded bg-[#F2F2F2] text-black p-3 lg:p-4"
               onClick={handleOpen}>
                <Image src={User} alt="User" />
              </button>
              <Link
                  href="/wishlist"
                  className="rounded bg-[#F2F2F2] text-black p-3 lg:p-4"
                >
                  <Image src={Heart} alt="heart" />
                </Link>
              <Link
                  href="/karzina"
                  className="flex items-center gap-2 lg:gap-4 px-4 py-2 lg:px-10 lg:py-3 rounded bg-[#F2F2F2] text-black"
                >
                  <Image src={Shop} alt="shop" />
                  <span className="hidden sm:hidden lg:block">Корзина</span>
                </Link>

            </div>
          </div>
        </div>
        {isOpen && (
          <div className="lg:hidden bg-[#1F1D14]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <ul className="flex flex-col gap-4">
                {data.map((item, index) => (
                  <li key={index}>
                    <Link href={item.path} className="text-white">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Header;
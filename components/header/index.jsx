"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "../../assets/icons/logo.svg";
import Shop from "../../public/shop.svg";
import User from "../../public/u_user.svg";
import Heart from "../../public/u_heart-sign.svg";

function HeaderComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { title: "Продукты", path: "/products" },
    { title: "Контакты", path: "/contacts" },
    { title: "Оплата и Доставка", path: "/payment" },
    { title: "Новости", path: "/news" },
    { title: "О нас", path: "/about" },
  ];

  return (
    <>
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
                <MenuItems items={menuItems} />
                <ContactInfo />
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
              <div className="relative w-[100px] lg:w-[402px] h-10 lg:h-12 md:w-[302px] sm:w-full flex">
                <input
                  type="text"
                  className="w-full h-full py-2 px-4 lg:px-10 rounded outline-none bg-[#F2F2F2] placeholder:text-black"
                  placeholder="Поиск"
                />
                <i className="bi bi-search absolute top-2 right-3 lg:top-3"></i>
              </div>
            </div>
            <UserActions />
          </div>
        </div>
        {isOpen && (
          <MobileMenu items={menuItems} />
        )}
      </nav>
    </>
  );
}

function MenuItems({ items }) {
  return (
    <ul className="flex items-center gap-8">
      {items.map((item, index) => (
        <li key={index}>
          <Link href={item.path} className="text-white">
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function ContactInfo() {
  return (
    <div className="flex items-center gap-8">
      <p className="text-white flex items-center gap-1">
        <i className="bi bi-telephone text-white"></i>
        <p className="text-white text-xs font-normal font-['Fira Sans']">
          +998 (90)
        </p>
        120-00-39
      </p>
      <p className="text-white flex items-center gap-2">
        <i className="bi bi-envelope text-white"></i>
        aesonbuhonov@gmail.com
      </p>
    </div>
  );
}

function UserActions() {
  return (
    <div className="flex items-center gap-4 lg:gap-8">
      <button className="rounded bg-[#F2F2F2] text-black p-3 lg:p-4">
        <Image src={User} alt="User" />
      </button>
      <button className="rounded bg-[#F2F2F2] text-black p-3 lg:p-4">
        <Image src={Heart} alt="Heart" />
      </button>
      <button className="flex items-center gap-2 lg:gap-4 px-4 py-2 lg:px-10 lg:py-3 rounded bg-[#F2F2F2] text-black">
        <Image src={Shop} alt="Shop" />
        <span className="hidden lg:inline">Корзина</span>
      </button>
    </div>
  );
}

function MobileMenu({ items }) {
  return (
    <div className="lg:hidden bg-[#1F1D14]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <ul className="flex flex-col gap-4">
          {items.map((item, index) => (
            <li key={index}>
              <Link href={item.path} className="text-white">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-4 mt-4">
          <p className="text-white flex items-center gap-2">
            <i className="bi bi-telephone text-white"></i>
            <span className="text-xs font-normal">
              +998 (90) 120-00-39
            </span>
          </p>
          <p className="text-white flex items-center gap-2">
            <i className="bi bi-envelope text-white"></i>
            aesonbuhonov@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;

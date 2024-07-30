import React from 'react';
import Image from 'next/image';
import Car from '@/public/car.png';
import Order from '@/public/order.png';
import Foiz from '@/public/aksiya.png';
import List from '@/public/list.png';

const advantages = [
  {
    icon: Car,
    text: 'Доставка по всему Узбекистану',
  },
  {
    icon: Order,
    text: 'Доставка по всему Узбекистану',
  },
  {
    icon: Foiz,
    text: 'Скидки и акции',
  },
  {
    icon: List,
    text: 'Широкий ассортимент товаров',
  },
];

const Advantages = () => {
  return (
    <div className="py-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-center">Преимущества</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {advantages.map((advantage, index) => (
          <div className="bg-white w-full max-w-xs h-[289px] flex flex-col items-center justify-center hover:scale-105 rounded-lg shadow-md p-6 text-center transition-transform duration-300" key={index}>
            <Image className="w-16 h-16 mb-4" src={advantage.icon} alt={advantage.text} />
            <p className="text-lg text-gray-700">{advantage.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advantages;

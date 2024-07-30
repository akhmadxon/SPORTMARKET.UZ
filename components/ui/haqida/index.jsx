import Next from '@/public/next-up.svg'
import React from 'react';
import Image from 'next/image';
import Brend from '@/public/brend group.png'

const Index = () => {
  return (
    <div className="py-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-center sm:text-left">O нас</h2>
      <div className="bg-black max-w-full sm:w-[1240px] h-auto sm:h-[367px] gap-1 text-white p-8 rounded-lg mb-6 mx-auto">
        <p className="mb-4 max-w-full sm:w-[719px] opacity-80 mt-10 ml-0 sm:ml-10 text-white text-xl font-normal font-['SF Pro Display'] leading-7">
          Интернет магазин спортивных товаров 
          предлагает широкий ассортимент продукции с доставкой по Ташкенту, области и другим регионам Узбекистана. 
          Ведется работа как с розничными покупателями, так и с оптовыми клиентами. 
          Разнообразие форм оплаты заметно упрощает процесс приобретения товара. 
          Действует гибкая система скидок. 
        </p>
        <div className="flex justify-center sm:justify-end">
          <Image className="cursor-pointer text-4xl opacity-80 w-[112px] h-9 relative" src={Next} alt='next-icon'></Image>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 max-w-full sm:w-[1240px] h-auto sm:h-[154px] mx-auto">
        <Image className='mt-5' src={Brend} alt='brend-icon'/>
      </div>
    </div>
  );
};

export default Index;

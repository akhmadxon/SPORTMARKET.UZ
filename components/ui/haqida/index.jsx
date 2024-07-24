import Next from '@/public/next-up.svg'
import React from 'react';
import Image from 'next/image';
import Brend from '@/public/brend group.png'

const Index = () => {
  return (
    <div className="py-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">O нас</h2>
      <div className="bg-black w-[1240px] h-[367px] gap-1 text-white p-8 rounded-lg mb-6">
        <p className="mb-4  w-[719px] opacity-80 mt-10 ml-10 text-white text-xl font-normal font-['SF Pro Display'] leading-7">
          Интернет магазин спортивных товаров 
          предлагает широкий ассортимент продукции с доставкой по Ташкенту, области и другим регионам Узбекистана. 
          Ведется работа как с розничными покупателями, так и с оптовыми клиентами. 
          Разнообразие форм оплаты заметно упрощает процесс приобретения товара. 
          Действует гибкая система скидок. 
        </p>
        <div className="flex  justify-end">
          <Image className="cursor-pointer text-4xl opacity-80 w-[112px] h-9 relative" src={Next}></Image>
        </div>
      </div>
      <div className="flex w-[1240px] h-[154px]  flex-wrap justify-center gap-4">
       <Image className='mt-5' src={Brend}/>
      </div>
    </div>
  );
};

export default Index;

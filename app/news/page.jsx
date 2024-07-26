  "use client";

  import React from "react";
  import { CaruselProduct } from "@/components/ui";
  import Image from "next/image";
  import HomeIcon from "@/public/u_home-alt.svg";
  import Next from "@/public/right (2).svg";

  const Index = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");

    const cards = Array(8).fill({
      title: "Как правильно выбрать эллиптический тренажер?",
      description:
        "Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовки...",
      views: 250,
      date: `${year}-${month}-${day}`,
    });

    return (
      <main>
        <section className="pt-5 pb-[83px] bg-[#F2F2F2]">
          <div className="container mx-auto px-2.8">
            <nav className="text-gray-500 flex text-sm mb-4">
              <Image src={HomeIcon} alt="img" className="mr-1" />
              <a href="/" className="hover:underline mr-1">
                Главная
              </a>{" "}
              <Image src={Next} className="mr-1" alt="img" />{" "}
              <p className="text-black">Полезные информации</p>
            </nav>
            <h1 className="text-2xl md:text-3xl font-medium mb-8">
              Полезные информации
            </h1>
            <div className="flex flex-wrap  w-full justify-between  items-start gap-[24px]">
              {cards.map((card, index) => (
                <div
                  key={index} // Add key prop here
                  className="w-full md:w-1/2 xl:w-[585px] h-auto px-6 py-9 bg-white rounded-lg"
                >
                  <h2 className="text-2xl md:text-3xl w-full md:w-96 font-medium mb-2">
                    {card.title}
                  </h2>
                  <p className="w-full md:w-96">{card.description}</p>
                  <div className="flex mt-8">
                    <div className="text-[#333333] text-sm font-normal font-['Fira Sans']">
                      <i className="bi bi-calendar pr-1"></i>
                      {card.date}
                    </div>
                    <div className="text-[#333333] text-sm font-normal font-['Fira Sans'] ml-10">
                      <i className="bi bi-eye pr-1"></i>
                      {card.views}
                    </div>
                  </div>
                </div>
              ))}
              <div className="Frame48097055 h-[54px] cursor-pointer hover:bg-[#fbd029] px-10 py-[15px] rounded-[5px] border-2 border-[#fbd029] justify-start items-start gap-2.5 inline-flex">
                <div className="text-black text-xl font-normal font-['Fira Sans']">
                  Показать ещё
                </div>
              </div>
            </div>
            <div className="mt-10"> {/* Added margin-top for spacing */}
              <CaruselProduct />
            </div>
          </div>
        </section>
      </main>
    );
  };

  export default Index;

import Usefull from "@/public/Usefull.png";
import Image from "next/image";

const Index = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");

  return (
    <section className="bg-[#F2F2F2] pb-20 md:pb-28 lg:pb-32">
      <p className="font-medium text-2xl md:text-3xl lg:text-4xl mb-6 md:mb-8 lg:mb-10">Полезное</p>
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="w-full lg:w-1/2 h-auto lg:h-[417px] px-4 md:px-6 lg:px-8 py-6 md:py-8 lg:py-10 bg-white rounded-lg">
          <h2 className="text-xl md:text-2xl lg:text-3xl w-full lg:w-[460px] font-medium mb-2">
            Как правильно выбрать эллиптический тренажер?
          </h2>
          <p className="w-full lg:w-[460px]">
            Эллиптические тренажёры популярны среди людей любого возраста и с
            разным уровнем физической подготовкb Эллиптические тренажёры
            популярны среди людей любого возраста и с разным уровнем физической
            подготовки...
          </p>
          <div className="flex mt-6 md:mt-8 lg:mt-10">
            <div className="text-[#333333] text-sm font-normal font-['Fira Sans']">
              <i className="bi bi-calendar pr-1"></i>
              {`${year}-${month}-${day}`}
            </div>
            <div className="text-[#333333] text-sm font-normal font-['Fira Sans'] ml-4">
              <i className="bi bi-eye pr-1"></i>
              250
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="bg-white rounded-lg h-64 md:h-72 lg:h-[350px] mb-4 md:mb-5 lg:mb-6 flex items-center justify-center">
            <Image src={Usefull} alt="image" />
          </div>
          <div className="button bg-white rounded-lg h-12 md:h-14 lg:h-[52px] hover:bg-yellow-500 flex items-center justify-center cursor-pointer">
            Посмотрет все
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;

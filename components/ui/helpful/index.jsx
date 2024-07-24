import Usefull from "@/public/Usefull.png";
import Image from "next/image";
const index = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  return (
    <section className="bg-[#F2F2F2] pb-[80px]">
      <p className="font-medium text-[32px] mb-[30px]">Полезное</p>
      <div className="flex gap-5">
        <div className="w-[50%] h-[417px] px-[35px] py-[38px] bg-white rounded-lg">
          <h2 className="text-[32px] w-[460px] font-medium mb-2">
            Как правильно выбрать эллиптический тренажер?
          </h2>
          <p className="w-[460px]">
            Эллиптические тренажёры популярны среди людей любого возраста и с
            разным уровнем физической подготовкb Эллиптические тренажёры
            популярны среди людей любого возраста и с разным уровнем физической
            подготовки...
          </p>
          <div className="flex">
          <div className="012022 text-[#333333] text-sm mt-20  font-normal font-['Fira Sans']">
          <i className="bi bi-calendar pr-1"></i>
             {`${year}-${month}-${day}`}
          </div>
          <div className="012022 text-[#333333] text-sm mt-20 ml-10  font-normal font-['Fira Sans']">
          <i className="bi bi-eye  pr-1"></i>
             250
          </div>
          </div>
        </div>
        <div className="w-[50%]">
          <div className="bg-white rounded-lg h-[350px] mb-[15px] flex items-center justify-center">
            <Image src={Usefull} alt="image" />
          </div>
          <div className="button bg-white rounded-lg h-[52px] hover:bg-yellow-500 flex items-center justify-center cursor-pointer">
            Посмотрет все
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;

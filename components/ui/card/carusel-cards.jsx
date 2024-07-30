import Image from "next/image";
import { Butsa } from "@/assets/images/";

function Index({ text, bg }) {
  return (
    <div className="group w-full sm:w-[292px] h-auto sm:h-[416px] rounded-md relative overflow-hidden">
      {bg && (
        <div
          style={{ background: bg }}
          className="absolute top-3 left-[-50px] py-2.5 items-center justify-center w-[200px] z-20 rotate-[-41deg]"
        >
          <p className="text-[16px] sm:text-[20px] font-bold text-white">
            {text}
          </p>
        </div>
      )}
      <button className="absolute top-3 right-3 cursor-pointer">
        <i className="bi bi-heart text-[16px] sm:text-[18px] font-bold"></i>
      </button>
      <div className="mx-auto flex items-center justify-center overflow-hidden">
        <Image
          src={Butsa}
          width={202}
          height={174}
          alt="Sumka"
          className="group-hover:scale-95 duration-300"
        />
      </div>
      <div className="flex flex-col items-start px-3 sm:px-5">
        <h2 className="text-[16px] sm:text-[20px] text-start mt-5">
          Бутса Nike Mercurial Superfly 8 FG
        </h2>
        <p className="text-[16px] sm:text-[20px] font-bold text-[#FF1313] text-start">
          500 000 uzs
        </p>
        <del className="text-[14px] sm:text-[16px] text-start text-[#1F1D14] opacity-40">
          750 000
        </del>
      </div>
      <button className="flex w-full items-center justify-center gap-3 py-[10px] sm:py-[15px] bg-[#FBD029] rounded-br-md rounded-bl-md">
        <i className="bi bi-cart"></i>
        Корзина
      </button>
    </div>
  );
}

export default Index;

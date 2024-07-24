import { Carusel, CaruselCatalog, CaruselProduct, Useful, Adventages, About } from "@/components/ui";
import { Card1 } from "@/components/ui/card";

export default function HomePage() {
  return (
    <main className="">
      <section className="pt-5 pb-[83px] bg-[#F2F2F2]">
        <div className="container mx-auto px-2.5">
          <div className="flex items-start gap-[24px]">
            <div className="min-w-[819px] h-[488px]">
              <Carusel />
            </div>
            <div className="">
              <Card1 />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-2.5">
          <div className="py-[24px]">
            <h1 className="text-[32px] mb-[31px]">Katalog</h1>
            <div>
              <CaruselCatalog />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F2F2F2] pb-[80px]">
        <div className="container mx-auto px-2.5">
          <div className="pt-[76px]">
            <h1 className="text-[32px] mb-[31px]">Aksiya</h1>
            <div>
              <CaruselProduct text="Aksiya" bg="#FF1C1C" />
            </div>
          </div>
          <div className="pt-[76px]">
            <h1 className="text-[32px] mb-[31px]">Yangi mahsulotlar</h1>
            <div>
              <CaruselProduct text="Yangi" bg="#917BFF" />
            </div>
          </div>
          <div className="pt-[76px]">
            <h1 className="text-[32px] mb-[31px]">Mahsulotlar</h1>
            <div>
              <CaruselProduct />
            </div>
          </div>
          <div className="pt-[76px]">
            <h1 className="text-[32px] mb-[31px]">Eng ko'p sotilgan</h1>
            <div>
              <CaruselProduct text="TOP" bg="#10DE24" />
            </div>
          </div>

          <div className="pt-[76px]">
            <div>
              <Useful bg="#10DE24" />
            </div>
          </div>
          <div className="pt-[36px]">
            <div>
              <Adventages bg="#10DE24" />
            </div>
          </div>
          <div className="pt-[36px]">
            <div>
              <About bg="#10DE24" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

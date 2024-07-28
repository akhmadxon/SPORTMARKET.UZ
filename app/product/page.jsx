'use client'

import { GlobalCard } from '@/components/ui'
import Image from "next/image";
import HomeIcon from "@/public/u_home-alt.svg";
import Next from "@/public/right (2).svg";
import React, { useState } from 'react';
import { Slider, TextField, Select, MenuItem, Button, FormControl, InputLabel } from '@mui/material';
import { styled } from '@mui/material/styles';

const YellowSlider = styled(Slider)({
  color: '#FFD700',
  
});

const Index = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const [price, setPrice] = useState([3000, 40000]);

  const handlePriceChange = (event, newValue) => {
    setPrice(newValue);
  };

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
            <p className="text-black">Продукты</p>
          </nav>
          
          <div className="flex flex-wrap w-full justify-between items-start gap-[24px]">
            <div style={{ padding: 20, width: 300, backgroundColor: '#fff', borderRadius: 10 }}>
              <h2>Фильтр</h2>
              <div>
                <InputLabel>Цена</InputLabel>
                <YellowSlider
                  value={price}
                  onChange={handlePriceChange}
                  valueLabelDisplay="auto"
                  min={0}
                  max={50000}
                  step={1000}
                  marks={[
                    { value: 3000, label: '3 000 uzs' },
                    { value: 40000, label: '40 000 uzs' }
                  ]}
                />
              </div>
              <TextField label="Артикул" variant="outlined" className="bg-[#F2F2F2]" fullWidth margin="normal" />
              <FormControl fullWidth margin="normal">
                <InputLabel>Выберите категорию</InputLabel>
                <Select defaultValue="" className="bg-[#F2F2F2]">
                  <MenuItem value="">Все</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth margin="normal">
                <InputLabel>Новинка</InputLabel>
                <Select defaultValue="" className="bg-[#F2F2F2]">
                  <MenuItem value="">Все</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth margin="normal" className="bg-[#F2F2F2]">
                <InputLabel>Акция</InputLabel>
                <Select defaultValue="">
                  <MenuItem value="">Все</MenuItem>
                </Select>
              </FormControl>
              <Button variant="contained" className="bg-[#F2F2F2] hover:bg-orange-400 pt-3" fullWidth>
                <p className='text-black bolder'>Показать результат</p>
              </Button>
            </div>
          </div>
          <div className="mt-10">
            <GlobalCard />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;

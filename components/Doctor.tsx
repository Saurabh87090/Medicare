
import React from 'react';
import { cardData } from "@/app/data/card";
import Card from './Card';

const Doctor = () => {
  return (
    <div className='bg-[#d7f1f676] h-full'>
      <div className='flex items-center justify-center flex-col mt-11'>
        <h1 className='text-[25px] font-medium mt-[100px]'>Our Doctors</h1>
        <p className='text-[35px] md:text-[40px] font-semibold text-[#333333] pt-9'>visit our professional</p>
        <p className='text-[40px] font-semibold text-[#333333]'>specialists</p>
      </div>
      
      <div className='flex flex-wrap items-center justify-center'>
        {cardData.map((card, index) => (
          <Card
            key={index}
            name={card.name}
            profession={card.profession}
            imgSrc={card.imgSrc}
          />
        ))}
      </div>
     
    </div>
  );
};

export default Doctor;

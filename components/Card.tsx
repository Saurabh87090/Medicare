"use client"
import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";

function Card(props: any) {
  const { name, imgSrc, profession } = props;
  return (
    <div className='p-4 w-full sm:w-1/2 md:w-2/2 lg:w-1/4'>
        <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 30  }}>
      <div className=' flex items-center justify-center flex-col rounded-xl mb-11'>
        <Image
          src={imgSrc}
          width={300}
          height={300}
          alt={profession}
          className='rounded-xl mt-11'
        />
        <h1 className='text-xl font-medium mt-3'>{name}</h1>
        <h3 className='text-[#504f4f]'>{profession}</h3>
      </div>
      </motion.div>
    </div>
  );
}

export default Card;

"use client"
import React, { useEffect } from 'react'
import Image from "next/image";
import { motion } from "framer-motion";

const Review = () => {



  return (
    <div className="px-4">
      <div className='ml-0 md:ml-[120px] text-center md:text-left'>
        <h1 className='text-[25px] font-medium mt-[80px] md:mt-[150px]'>Testimonials</h1>
        <p className='text-[30px] md:text-[45px] font-semibold mt-5 text-[#333333]'>
          what they say after visiting <br className="hidden md:block" /> our hospital
        </p>
      </div>

      <div className='flex flex-col lg:flex-row items-center justify-around mt-10 md:mt-16 space-y-10 md:space-y-0'>
      
        <div className='flex flex-col items-center md:items-start'>
      <motion.div
              whileHover={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30  }}>
          <Image
            src="Family1.svg"
            width={350}
            height={350}
            alt='Family1'
            className='rounded-lg pt-[83px] w-[350px] h-[350px] md:w-[700px] md:h-[700px]'
          />
       </motion.div>
          <div className=' px-4 md:pl-7 pt-6 bg-[#d7f1f676] w-full md:w-[700px] rounded-md'>
            <h1 className='text-[24px] md:text-[30px] font-medium'>John Doe </h1>
            <p className='text-[#5a5a5a] text-[16px] md:text-[18px]'>
              The service I felt was very good, the staff and <br className="hidden md:block" />
              doctors were friendly and provided very clear <br className="hidden md:block" />
              information.
            </p>
            <div className='flex items-center justify-center md:justify-start'>
              <Image
                src="Stars.svg"
                width={200}
                height={70}
                alt='star'
                className='rounded-md py-6 h-[40px] w-[200px] md:h-[70px] md:w-[400px]'
              />
            </div>
          </div>
        </div>


         
        <div className='flex flex-col items-center  md:items-start'>
        <motion.div
              whileHover={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30  }}>
          <Image
            src="Family2.svg"
            width={350}
            height={350}
            alt='Family2'
            className='rounded-lg  w-[350px] h-[350px] md:w-[700px] md:h-[550px]  lg:w-[800px] lg:h-[700px]'
          />

</motion.div>
          <div className=' px-4 md:pl-7 pt-6 bg-[#d7f1f676] w-full md:w-[700px] lg:w-[800px] rounded-md'>
            <h1 className='text-[24px] md:text-[30px] font-medium'> John Dalton </h1>
            <p className='text-[#5a5a5a] text-[16px] md:text-[18px]'>
              The service I felt was very good, the staff and <br className="hidden md:block" />
              doctors were friendly and provided very clear <br className="hidden md:block" />
              information.
            </p>
            <div className='flex items-center justify-center md:justify-start'>
              <Image
                src="Stars.svg"
                width={200}
                height={70}
                alt='star'
                className='rounded-md py-6 h-[40px] w-[200px] md:h-[70px] md:w-[400px]'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review;

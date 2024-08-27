import React from 'react'
import Link from 'next/link';
const Booking = () => {
  return (
    <div className="px-4">
      <div className='bg-[#333333] text-white mt-[60px] md:mt-[120px] w-full md:w-[90%] max-w-[1660px] mx-auto rounded-lg'>
        <h1 className='pt-[40px] md:pt-[80px] px-4 md:px-[80px] lg:px-[160px] text-[30px] md:text-[45px] font-semibold'>
          {"Let's consult your health with <br /> our doctor"}
        </h1>
        <p className='px-4 md:px-[80px] lg:px-[160px] pt-6 md:pt-[80px] text-lg md:text-xl'>
          We will provide the best service.
        </p>
        <div className="flex justify-center md:justify-end pr-4 md:pr-[80px] lg:pr-[160px]">
          <Link href='/about'>
          <button className='bg-[#0099FF] px-6 py-3 rounded-lg mt-6 md:mt-10 mb-5'>
            Get Appointment
          </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Booking;

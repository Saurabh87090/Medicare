import React from 'react'
import Image from "next/image";

const About = () => {
  return (
    <div>
      <div>
        <div className='flex flex-col lg:flex-row items-center'>
          <Image
            src="nurse.svg"
            alt="Pic of nurse"
            width={300}
            height={200}
            className='w-[400px] h-[300px] md:w-[600px] md:h-[400px] my-8 md:my-[100px] mx-auto md:mx-[140px]'
          />
          <div className='flex flex-col items-center md:items-start text-center md:text-left px-4 md:px-0'>
            <h1 className='text-[24px] md:text-[20px] font-medium text-[#333333]'>About Us</h1>
            <h2 className='text-[36px] md:text-[50px] font-semibold text-[#333333] py-4 md:py-8'>We Help Your Health</h2>
            <p className='text-[#616060] text-[16px] md:text-[18px]'>
              This profile describes the activities of health services and medical <br className="hidden md:block" />
              support as well as the facilities and conditions of the General <br className="hidden md:block" />
              Hospital which is reflected in the general public served from all <br className="hidden md:block" />
              groups, religions and beliefs, ethnicity and the level and <br className="hidden md:block" />
              frequency of bed occupancy which continues to increase <br className="hidden md:block" />
              significantly.
            </p>
            <button className='bg-[#0099FF] py-3 px-3 my-6 md:my-11 rounded-lg text-white'>
              More About Us
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;

import React from "react";
import Image from "next/image";

const Main = () => {
  return (
    <div className="relative">
      <Image
        src="Ellipse 4.svg"
        alt="Bg color"
        width={470}
        height={900}
        className="absolute top-0 left-0 -z-10"
      />
      <main>
        <div className="flex items-center justify-around lg:flex-row flex-col-reverse tablet:flex-col tablet:items-center">
          <div className="text-center md:text-left tablet:order-2">
            <h1 className="text-4xl mt-9 md:text-6xl font-extrabold text-[#333333]">
              we care about your <br />
              <span className="text-blue-950 text-[50px] md:text-[80px]">health</span>
            </h1>
            <p className="text-[#999999] text-[16px] md:text-[20px] mt-6 md:mt-11">
              check now your health with our professional doctor, <br />
              completed and modern facilities services
            </p>

            <button className="bg-[#0099FF] px-6 py-3 my-6 md:my-8 rounded-lg text-white">
              Check Now
            </button>
          </div>

          <Image
            src="Doctor.svg"
            alt="Image Hero"
            width={400}
            height={400}
            className="w-[400px] h-[450px] md:w-[700px] md:h-[700px] tablet:w-[600px] tablet:h-[600px] mx-auto md:mx-11  md:mt-0 tablet:order-1"
          />
        </div>
      </main>
    </div>
  );
};

export default Main;

"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const styles = {
  Container: "flex items-center justify-center flex-col mx-11 mb-[40px] md:mb-[140px] mt-[40px] md:mt-[80px]",
  name: "text-[18px] md:text-[23px] font-medium mt-4 md:mt-8",
  content: "text-[14px] md:text-[18px] text-[#999999]",
};

const Service = () => {
  return (
    <div>
      <div className="bg-[#d7f1f676] h-full mt-[50px] md:mt-[100px]">
        <div className="flex items-center justify-center flex-col">
          <h2 className="text-[20px] md:text-[25px] font-medium mt-8 md:mt-11">Our Services</h2>
          <p className="text-[25px] lg:text-[40px] font-semibold text-[#333333] mt-3 md:mt-5">
            4 Step Easy We Care Your
          </p>
          <p className="text-[30px] md:text-[40px] font-semibold text-[#333333]">Health</p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center mt-8 md:mt-16">
          {/* Row with Date and Poly on mobile, and regular on larger screens */}
          <div className="flex flex-row md:flex-row space-x-8 md:space-x-[80px]">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20  }}>
              <div className={styles.Container}>
                <Image
                  src="healthcare 1.svg"
                  width={80}
                  height={80}
                  alt="healthcare1"
                  className="md:w-[100px] md:h-[100px]"
                />
                <h1 className={styles.name}>Date</h1>
                <p className={styles.content}>Choose what date</p>
                <p className={styles.content}>to check</p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
              <div className={styles.Container}>
                <Image
                  src="healthcare 2.svg"
                  width={80}
                  height={80}
                  alt="healthcare2"
                  className="md:w-[100px] md:h-[100px]"
                />
                <h1 className={styles.name}>Poly</h1>
                <p className={styles.content}>Choose what Poly</p>
                <p className={styles.content}>to check</p>
              </div>
            </motion.div>
          </div>
          {/* Column with Doctor */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
            <div className="flex flex-col items-center mt-8 md:mt-0">
              <div className={styles.Container}>
                <Image
                  src="healthcare 3.svg"
                  width={80}
                  height={80}
                  alt="healthcare3"
                  className="md:w-[100px] md:h-[100px]"
                />
                <h1 className={styles.name}>Doctor</h1>
                <p className={styles.content}>And choose Doctor</p>
                <p className={styles.content}>to check</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Service;

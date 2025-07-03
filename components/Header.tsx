"use client"
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

const styles = {
  link: "text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600",
  mobileLink:
    "inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600",
    

};

const UserAccount = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="pb-6 bg-white lg:pb-0">
      <div className="px-4 mx-11 my-4  sm:px-6 lg:px-8">
      {/* lg+ */}
        <nav className="flex items-center justify- h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link href="#" title="Medicare" className="flex">
              <Image
                className="w-auto h-8 my-3 md:my-3  lg:h-10"
                src="Vector.svg"
                alt="Medicare logo"
                height={200}
                width={200}
              />
              <h1 className="font-medium text-[30px] mx-3 pt-2  md:mr-[400px] mr-[80px]  md:pt-3 ">Medicare</h1>
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <FiX className="w-7 h-7 " />
            ) : (
              <FiMenu className="w-7 h-7" />
            )}
          </button>

          <div className="hidden mr-6  lg:flex lg:items-center lg:mx-[460px] my-9 lg:ml-auto lg:space-x-11">
            <Link href="#" className={styles.link} title="Home">
              Home
            </Link>
            <Link href="#" className={styles.link} title="About">
              Services
            </Link>
            <Link href="#" className={styles.link} title="Service">
              About
            </Link>
            <Link href="#" className={styles.link} title="Appointement">
              Appointement
            </Link>
          </div>

          <Link href="#" className="hidden md:hidden lg:inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md items-center hover:stroke-blue-700 focus:stroke-blue-700" role="button">
            Login / SignUp
          </Link>
        </nav>

        {/* xs to lg */}
        {isMenuOpen && (
          <nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
            <div className="flow-root">
              <div className="flex flex-col px-6 -my-2 space-y-1">
                <Link href="#" className={styles.mobileLink} title="Home">
                  Home
                </Link>
                <Link href="#" className={styles.mobileLink} title="About">
                  Services
                </Link>
                <Link href="#" className={styles.mobileLink} title="Service">
                  About
                </Link>
                <Link href="#" className={styles.mobileLink} title="Appointement">
                  Appointement
                </Link>
              </div>
            </div>

            <div className="px-6  mt-6">
              <Link href="#" className= " justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md items-center hover:bg-blue-700 focus:bg-blue-700"
 role="button">
                Login
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default UserAccount;


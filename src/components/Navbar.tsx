"use client";

import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { PiListBold, PiBagBold, PiUserBold } from "react-icons/pi";
import { FaRegUserCircle } from "react-icons/fa";
import { MdMenuOpen } from "react-icons/md";
import Image from "next/image";
import Logo from "../../public/assets/img/Navbar/Logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="bg-background z-50 fixed top-0 left-0 w-full font-poppins shadow-sm md:shadow-md lg:shadow-lg">
        <div className="bg-foreground text-center text-sm py-2 md:text-sm md:py-2 lg:text-base lg:py-3 text-white">
          Gratis Ongkir s/d 20.000 ke Seluruh Indonesia!
        </div>

        <div className="container mx-auto flex justify-between items-center px-4 py-4 md:px-10 lg:px-24 lg:py-5 ">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src={Logo}
              alt="Logo"
              className="w-28 h-9 lg:w:32 lg:h-10"
              priority
            />
          </div>

          {/* dekstop */}
          <ul className="hidden lg:flex space-x-10 text-lg">
            <li>
              <a
                href="#"
                className="text-primary font-semibold border-b-2 border-primary hover:text-primary focus:text-primary hover:font-semibold focus:font-semibold hover:border-b-2 focus:border-b-2 hover:border-primary focus:border-primary pb-2 transition-all"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary focus:text-primary hover:font-semibold focus:font-semibold hover:border-b-2 focus:border-b-2 hover:border-primary focus:border-primary pb-2 transition-all"
              >
                Katalog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary focus:text-primary hover:font-semibold focus:font-semibold hover:border-b-2 focus:border-b-2 hover:border-primary focus:border-primary pb-2 transition-all"
              >
                Promo Spesial
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary focus:text-primary hover:font-semibold focus:font-semibold hover:border-b-2 focus:border-b-2 hover:border-primary focus:border-primary pb-2 transition-all"
              >
                Marketplace
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary focus:text-primary hover:font-semibold focus:font-semibold hover:border-b-2 focus:border-b-2 hover:border-primary focus:border-primary pb-2 transition-all"
              >
                Tentang
              </a>
            </li>
          </ul>

          {/* Icons */}
          <div className="flex items-center space-x-5 text-primary">
            <button>
              <FaMagnifyingGlass className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>
            <span className="hidden lg:inline-block mx-4 h-7 border border-primary"></span>
            <button>
              <PiBagBold className="w-6 h-6 lg:w-7 lg:h-7" />
            </button>
            <span className="hidden lg:inline-block mx-4 h-7 border border-primary"></span>
            <button>
              <FaRegUserCircle className="hidden lg:inline-block lg:w-7 lg:h-7" />
            </button>

            <button onClick={toggleMenu} className="lg:hidden">
              <PiListBold className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* sidebar */}
        <div
          className={`fixed top-0 left-0 w-64 h-full bg-white text-sm z-50 transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out shadow-lg`}
        >
          <div className="flex flex-col h-full">
            <div className="p-4 bg-primary text-white flex justify-between items-center">
              <span className="font-bold">Nadira</span>
              <button onClick={toggleMenu} className="text-white">
                <MdMenuOpen className="w-6 h-6" />
              </button>
            </div>

            <div className="p-4 border-b">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full p-2 border border-foreground rounded-md focus:outline-none"
                />
                <FaMagnifyingGlass className="absolute top-2.5 right-2.5 text-primary" />
              </div>
            </div>

            {/* Menu hp */}
            <div className="flex-grow overflow-y-auto">
              <ul className="space-y-0">
                <li>
                  <a
                    href="#"
                    className="hover:text-white hover:bg-primary focus:text-white focus:bg-primary block py-2 px-4"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white hover:bg-primary focus:text-white focus:bg-primary block py-2 px-4"
                  >
                    Katalog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white hover:bg-primary focus:text-white focus:bg-primary block py-2 px-4"
                  >
                    Promo Spesial
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white hover:bg-primary focus:text-white focus:bg-primary block py-2 px-4"
                  >
                    Marketplace
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white hover:bg-primary focus:text-white focus:bg-primary block py-2 px-4"
                  >
                    Tentang
                  </a>
                </li>
              </ul>
            </div>
            <div className="p-4 border-t">
              <button className="flex items-center space-x-2">
                <PiUserBold className="w-5 h-5" />
                <span className="ml-1">Akun Saya</span>
              </button>
            </div>
          </div>
        </div>

        {/* Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={toggleMenu}
          />
        )}
      </nav>
    </header>
  );
}

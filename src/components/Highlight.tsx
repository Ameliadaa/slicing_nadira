"use client";

import { IoMdPricetags } from "react-icons/io";
import { FaTshirt } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";
import { RiRefund2Line } from "react-icons/ri";
import { FaCreditCard } from "react-icons/fa6";

const Highlight = () => {
  return (
    <div className="container mx-auto py-8  px-4 md:px-10 md:pt-9 md:pb-24 lg:px-24 space-y-6">
      <div className="space-y-4 flex flex-col justify-center items-center text-center ">
        <h2 className="font-plusJakartaSans font-bold italic text-2xl md:text-2xl lg:[28px] text-primary">
          #NadiraFSHFashion
        </h2>
        <p className="font-poppins font-normal text-base md:text-lg lg:text-lg md:w-3/4">
          Bersama Nadira mari belajar mencintai diri kita sendiri. Nadira
          menyediakan berbagai batik muslim modern, dengan kualitas yang sangat
          baik dan harga terbaik. Follow @NadiraFSH untuk mendapatkan update
          terbaru
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 flex-wrap md:flex md:justify-around  items-center text-center text-primary">
        <div className="flex flex-col justify-center items-center text-center space-y-2">
          <IoMdPricetags className="w-10 h-10 md:h-16 md:w-16 lg:h-16 lg:w-16" />
          <p className="text-normal text-primary text-base md:text-lg lg:text-lg">Harga Terjangkau</p>
        </div>
        <div className="flex flex-col justify-center items-center text-cente space-y-2">
          <FaTshirt className="w-10 h-10 md:h-16 md:w-16 lg:h-16 lg:w-16" />
          <p className="text-normal text-primary text-base md:text-lg lg:text-lg">Design Populer</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center space-y-2">
          <IoDiamond className="w-10 h-10 md:h-16 md:w-16 lg:h-16 lg:w-16" />
          <p className="text-normal text-primary text-base md:text-lg lg:text-lg">Bahan Berkualitas</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center space-y-2">
          <RiRefund2Line className="w-10 h-10 md:h-16 md:w-16 lg:h-16 lg:w-16" />
          <p className="text-normal text-primary text-base md:text-lg lg:text-lg">Refund & Return</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center space-y-2 col-span-2">
          <FaCreditCard className="w-10 h-10 md:h-16 md:w-16 lg:h-16 lg:w-16"/>
          <p className="text-normal text-primary text-base md:text-lg lg:text-lg">Transaksi Aman</p>
        </div>
      </div>
    </div>
  );
};

export default Highlight;

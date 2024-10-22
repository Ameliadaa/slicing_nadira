
"use client";

import Image from "next/image";
import Button from "./Button";
import bghero from "../../public/assets/img/Hero/bg.png";

export default function Hero() {
  return (
    <div className="relative w-full h-[30vh] md:h-[50vh] lg:h-[80vh] mt-24 md:mt-24 lg:mt-32">
      <Image
        src={bghero}
        alt="Hero Background"
        fill
        style={{ objectFit: "cover" }}
        className="absolute inset-0"
      />

      <div className="container mx-auto grid grid-cols-2 h-full items-center px-4 md:px-10 lg:px-24">
        <div className="flex flex-col items-center lg:mt-16">
          <div className="flex flex-col md:space-y-2 lg:space-y-2 w-full">
            <p className="text-[10px] md:text-lg lg:text-2xl font-plusJakartaSans font-normal text-foreground">
              Your Partner In Fashion
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-plusJakartaSans font-bold text-primary">
              Modern Batik Specialist
            </h1>

            <div className="hidden lg:block py-2 text-gray-600">
              <p>
                Kami menyediakan batik modern dengan desain yang elegan, cocok
                untuk semua kalangan. Nikmati penawaran spesial untuk koleksi
                terbaru kami dan temukan pakaian batik favorit Anda di katalog
                kami.
              </p>
            </div>

            <div className="flex justify-start lg:justify-start space-x-2 md:space-x-4 lg:space-x-5">
              <Button
                variant="primary"
                className="w-16 md:w-36 lg:w-40 py-1.5 text-center items-center flex justify-center text-mobile-xs md:text-sm lg:text-lg"
              >
                katalog
              </Button>
              <Button
                variant="outline"
                className="w-16 md:w-36 lg:w-40 py-1.5 text-center items-center flex justify-center text-mobile-xs md:text-sm lg:text-lg"
              >
                kontak kami
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

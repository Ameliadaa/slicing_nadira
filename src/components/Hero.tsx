// 'use client';

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import model from "../../public/assets/img/Hero/model.png";
// import Button from "./Button";

// export default function Hero() {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 1280);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div className="bg-[#F2F2F2] py-12 md:py-20 lg:py-24  h-60 lg:h-[540px] relative mt-24 md:mt-28 lg:mt-32">
//       <div className="container mx-auto flex flex-row lg:flex-row items-center px-4 md:px-10 lg:px-24 py-2 md:py-4 lg:py-4">
//         {/* Konten Kiri */}
//         <div className={`flex flex-col  ${isMobile ? "text-left" : "text-left"} space-y-1 w-3/4 md:3/4 lg:w-3/5  `}>
//           <p className="text-[10px] lg:text-2xl font-plusJakartaSans font-normal text-foreground ">Your Partner In Fashion</p>
//           <h1 className="text-2xl lg:text-5xl font-plusJakartaSans font-bold text-primary">
//             Modern Batik Specialist
//           </h1>

//           {!isMobile && (
//             <div className="mt-8 text-gray-600">
//               <p>
//                 Kami menyediakan batik modern dengan desain yang elegan, cocok
//                 untuk semua kalangan. Nikmati penawaran spesial untuk koleksi terbaru
//                 kami dan temukan pakaian batik favorit Anda di katalog kami.
//               </p>
//             </div>
//           )}

// <div className="flex justify-start lg:justify-start space-x-2 md:space-x-4 lg:space-x-5 ">
//             <Button variant="primary"  className="w-16 md:w-28 lg:w-40 py-1.5 text-center items-center flex justify-center text-mobile-xs md:text-base lg:text-lg">katalog</Button>
//             <Button variant="outline" className="w-16 md:w-28 lg:w-40  py-1.5 text-center items-center flex justify-center text-mobile-xs lg:text-lg">kontak kami </Button>

//           </div>
//         </div>

//         <div className="relative w-1/4 md:1/4 lg:2/5 h-full">
//           <Image
//             src={model}
//             alt="Gambar model"
//             width={isMobile ? 240 : 500} // Ukuran gambar dinamis
//             height={isMobile ? 240 : 500}
//             priority
//             className="absolute right-0 bottom-0 object-contain lg:w-auto lg:h-auto"
//           />
//         </div>
//       </div>
//  </div>

//   );
// }

// 

"use client";


import Image from "next/image";
import Button from "./Button";
import bghero from "../../public/assets/img/Hero/bg.png"

export default function Hero() {
 

  return (
    <div className="relative w-full py-12 md:py-20 lg:py-24 h-44 md:h-[400px] lg:h-[640px] mt-24 md:mt-24 lg:mt-32">
       <Image
            src={bghero} 
            alt="Hero Background"
            fill 
            style={{ objectFit: 'cover' }} 
            className="absolute inset-0" 
          />

    <div className="container mx-auto grid grid-cols-2 px-4 md:px-10 lg:px-24 ">   
      <div className=" flex flex-col items-center  md:mt-16">
        <div className="flex flex-col  md:space-y-2  lg:space-y-2 w-full md:w-full lg:w-full">
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

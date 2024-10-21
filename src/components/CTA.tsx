'use client'

import Image from "next/image";
import Bukalapak from "../../public/assets/img/Icon/Bukalapak.png";
import Shope from "../../public/assets/img/Icon/Shope.png";
import Tiktok from "../../public/assets/img/Icon/Tiktok.png";
import Tokopedia from "../../public/assets/img/Icon/Tokopedia.png";
import BackgroundCTA from "../../public/assets/img/CTA.png";
import { StaticImageData } from "next/image";


interface MarketplaceImage {
    src: StaticImageData;
    alt: string;
  }
  
  const MarketplaceImage = ({ src, alt }: MarketplaceImage) => (
    <Image src={src} alt={alt} width={50} height={50} className="h-full w-full md:h-[100px] md:w-[100px] lg:h-[100px] lg:w-[100px] " />
  );


const CTA = () => {
 return ( 
        <div className="relative w-full h-[240px] md:h-[450px] lg:h-[500px] mt-4 ">
      
          <Image
            src={BackgroundCTA} 
            alt="CTA Background"
            fill 
            style={{ objectFit: 'cover' }} 
            className="absolute inset-0" 
          />
          
       
          <div className=" absolute inset-0 bg-black bg-opacity-30 flex items-center">
            <div className="container mx-auto py-8 px-4 md:px-10 lg:px-24 ">
                <div className="font-plusJakartaSans font-bold flex flex-col justify-center items-center text-center text-white space-y-3 md:space-y-7 lg:space-y-7">
                    <p className="text-mobile-xs leading-3 md:text-[22px] lg:text-[22px]">Shooping Martkeplace</p>
                    <h3 className="text-xl leading-7 uppercase  tracking-wider text-center md:text-4xl lg:text-6xl">FIND OUR PRODUCTS ON MARKETPLACE</h3>
                    <div className="flex flex-row justify-center space-x-4 md:space-x-10 lg:space-x-10">
                    <MarketplaceImage src={Shope} alt="Shope" />
                    <MarketplaceImage src={Tokopedia} alt="Tokopedia" />
                    <MarketplaceImage src={Bukalapak} alt="Bukalapak" />
                    <MarketplaceImage src={Tiktok} alt="Tiktok" />
                    </div>
                </div>                          
            </div>            
          </div>
        </div>
 );
};

export default CTA;
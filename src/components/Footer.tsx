'use client';

import { BsEnvelope } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import Image from "next/image";
import { StaticImageData } from "next/image";
import Bukalapak from "../../public/assets/img/Icon/Bukalapak-tr.png";
import Shope from "../../public/assets/img/Icon/Shope-tr.png";
import Tiktok from "../../public/assets/img/Icon/Tiktok-tr.png";
import Tokopedia from "../../public/assets/img/Icon/Tokopedia-tr.png";

interface MarketplaceImage {
    src: StaticImageData;
    alt: string;
    className?: string; 
  }
  

  const MarketplaceImage = ({ src, alt, className }: MarketplaceImage) => (
    <div className={className}>
      <Image src={src} alt={alt} layout="responsive" width={50} height={50} />
    </div>
  );

const Footer = () => {
    return (
        <div className=" bg-[#323138]">
            <div className=" container mx-auto  px-4 md:px-10 lg:px-24 py-8 ">
            <div className="grid grid-rows gap-y-5 md:grid-rows md:gap-y-5 lg:grid-cols-[1fr,1fr,1fr,1fr,2fr] lg:gap-x-20">
                <div >
                    <h5 className="text-lg font-bold text-white md:text-xl lg:text-lg">Contact Info</h5>
                    <div className="mt-4 space-y-2 md:space-y-5">
                    <div className="flex flex-row space-x-4 text-white"> <FiPhone className="w-5 h-5 md:w-6 md:h-6"/> <p className="text-base font-normal md:text-lg lg:text-lg text-white">112-8111-a233211</p></div>
                    <div className="flex flex-row space-x-4 text-white"> <BsEnvelope className="w-5 h-5 md:w-6 md:h-6"/> <p className="text-base font-normal md:text-lg lg:text-lg text-white">NadiraSFH.co.id</p></div>      
                    </div>                    
                </div>


                <div className="text-white ">                  
                <h5 className="text-lg font-bold text-white md:text-xl lg:text-lg">Product Category</h5>
                <div className="mt-4 space-y-2 md:space-y-5">
                <p className="text-base font-normal md:text-lg lg:text-lg ">Best Seller</p>
                <p className="text-base font-normal md:text-lg lg:text-lg ">Terbaru</p>
                <p className="text-base font-normal md:text-lg lg:text-lg ">Wanita</p>
                <p className="text-base font-normal md:text-lg lg:text-lg ">Pria</p>
                <p className="text-base font-normal md:text-lg lg:text-lg ">Aksesoris</p>
                </div>               
                </div>

                <div className="text-white">
                <h5 className="text-lg font-bold text-white md:text-xl lg:text-lg">My Account</h5>
                <div className="mt-4 space-y-2 md:space-y-5">
                <p className="text-base font-normal md:text-lg lg:text-lg ">Order</p>
                <p className="text-base font-normal md:text-lg lg:text-lg ">Cart</p>
                <p className="text-base font-normal md:text-lg lg:text-lg ">Log In</p>
                <p className="text-base font-normal md:text-lg lg:text-lg ">Register</p>
                </div>  
                </div>

                <div className="text-white">
                <h5 className="text-lg font-bold text-white md:text-xl lg:text-lg">FAQ</h5>
                <div className="mt-4 space-y-2 md:space-y-5">
                <p className="text-base font-normal md:text-lg lg:text-lg ">How to Order</p>
                <p className="text-base font-normal md:text-lg lg:text-lg ">Payment Method</p>
                <p className="text-base font-normal md:text-lg lg:text-lg ">Payment Confirmation</p>
                <p className="text-base font-normal md:text-lg lg:text-lg ">Shipping & Return</p>
                </div>  
                </div>

                <div className="text-white">
                <h5 className="text-lg font-bold text-white md:text-xl lg:text-lg">Market Place</h5>
                <div className="flex flex-row mt-4 space-x-7 md:space-x-7 ">
                <MarketplaceImage src={Shope} alt="Shope" className="h-[48px] w-[34px] lg:h-[56px] lg:w-[40px]"/>
                <MarketplaceImage src={Tokopedia} alt="Tokopedia" className="h-[48px] w-[68px] lg:h-[56px] lg:w-[80px]" />
                <MarketplaceImage src={Bukalapak} alt="Bukalapak" className="h-[48px] w-12 lg:h-[64px] lg:w-[64px]" />
                <MarketplaceImage src={Tiktok} alt="Tiktok" className="h-[48px] w-[42px] lg:h-[56px] lg:w-[50px]" />
                </div>  
                </div>

                
            </div>
            </div>
            <div className="bg-primary text-white flex justify-center items-center text-base md:text-lg lg:text-lg font-bold leading-4 py-3 ">
            <div> © 2023 - NadiraFSH</div> 
            </div> 

        </div>
    );
};

export default Footer;
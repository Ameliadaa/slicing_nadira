'use client';

import Image from 'next/image';
import { FaStar } from "react-icons/fa";
import Nadin from "../../public/assets/img/Testimoni/Nadin.png";
import Nazla from "../../public/assets/img/Testimoni/Nazla.png";
import Raysa from "../../public/assets/img/Testimoni/Raysa.png";
import { StaticImageData } from 'next/image';

type Testimonial = {
  name: string;
  feedback: string;
  imageUrl: StaticImageData;
};

const testimonials: Testimonial[] = [
  {
    name: 'Nazla',
    feedback: 'Gak nyesel belanja produk disini, harga terjangkau dan pengiriman cepat. Next time mau beli lagi produk disini!',
    imageUrl: Nazla,  
  },
  {
    name: 'Nadin',
    feedback: 'Barang sangat bagus, dengan harga yang cukup bersahabat.',
    imageUrl: Nadin,  
  },
  {
    name: 'Raysa',
    feedback: 'Harga terjangkau, kualitas produk terbaik. Next time belanja lagi.',
    imageUrl: Raysa,  
  },
];

const Testimoni = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:pt-12 md:pb-4 lg:pt-12 lg:pb-4 md:px-10 lg:px-24">
      <h2 className="text-center text-2xl md:text-3xl lg:text-3xl font-bold italic uppercase font-plusJakartaSans mb-3 text-primary">TESTIMONIALS</h2>
      <p className="text-center text-foreground text-base md:text-xl lg:text[22px] font-plusJakartaSans font-bold uppercase mb-12 ">APA YANG MEREKA KATAKAN <br/> TENTANG PRODUK KAMI</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-6 pb-0 text-center relative flex flex-col items-center">      
            {index < testimonials.length - 1 && (
              <span className="hidden  lg:block absolute right-0 top-0 h-full border-r border-primary border-1"></span>
            )}
            <div className="flex justify-center mb-4">
              <Image
                src={testimonial.imageUrl}
                alt={testimonial.name}
                width={80}
                height={80}
                className="rounded-full object-cover"
              />
            </div>    
            <div className='space-y-4'>
            <div className="flex justify-center mt-2">            
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-5 h-5 text-[#CCAD40]" />               
              ))}
            </div>
            <p className="text-foreground font-poppins text-base md:text-lg lg:text-lg font-normal mb-4">&quot;{testimonial.feedback}&quot;</p>
            <h3 className="text-lg font-bold text-primary ">{testimonial.name}</h3>
                </div>      
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimoni;

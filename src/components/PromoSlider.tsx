
'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { useState } from "react";
import { Swiper as SwiperType } from "swiper";
import Banner from "../../public/assets/img/Banner Full Width.png";


const PromoSlider = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

 

  return (
    <div className="relative  w-full z-10 md:pt-28">
      <Swiper
        onSwiper={(swiper) => setSwiperInstance(swiper)} 
        modules={[ Pagination, Autoplay]} 
        pagination={{ clickable: true, el: ".cstm-pagination" }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        speed={800} 
        className="h-full"
      >
        <SwiperSlide>
          <div className="relative w-full h-[20vh] md:h-[50vh] lg:h-[80vh]">
            <Image
              src={Banner}
              alt="Slider 1"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-[20vh] md:h-[50vh] lg:h-[80vh]">
            <Image
              src={Banner}
              alt="Slider 2"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-[20vh] md:h-[50vh] lg:h-[80vh]">
            <Image
              src={Banner}
              alt="Slider 3"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </SwiperSlide>
      </Swiper>

      
      <div className="relative">
      <div className="z-30 w-full flex justify-center absolute bottom-4 md:bottom-5 lg:bottom-8  space-x-2 cstm-pagination  "> 
      </div>
      </div>
     


    </div>
  );
};

export default PromoSlider;

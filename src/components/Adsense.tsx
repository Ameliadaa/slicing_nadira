'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import BannerPromoNewCollection from '../../public/assets/img/Iklan/BannerPromoNewCollection.png';
import BannerPromoNewSeason from '../../public/assets/img/Iklan/BannerPromoNewSeason.png';

const IklanAdsense = (): JSX.Element => {
  const ads = [
    { 
      imageUrl: BannerPromoNewSeason,  
    },
    {  
      imageUrl: BannerPromoNewCollection,
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4 md:px-10 lg:px-24">      
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-4">
        {ads.map((ad, index) => (
          <div key={index} className="relative bg-white shadow-md  overflow-hidden">
            <Image
              src={ad.imageUrl} 
              alt={`Ad ${index + 1}`} 
              layout="responsive"
              objectFit="cover"
              className="w-full h-[250px]"
            />
          </div>
        ))}
      </div>

      <div className="block md:hidden">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          pagination={{
            clickable: true, 
            el: '.custom-pagination', 
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
        
        >
          {ads.map((ad, index) => (
            <SwiperSlide key={index}>
              <div className="relative bg-white shadow-md  overflow-hidden">
                <Image
                  src={ad.imageUrl}  
                  alt={`Ad ${index + 1}`}  
                  layout="responsive"
                  objectFit="cover"
                  className="w-full h-[250px]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

 
        <div className="custom-pagination flex justify-center mt-4"></div>
      </div>
    </div>
  );
};


export default IklanAdsense;

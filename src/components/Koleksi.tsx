'use client'
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import Yasmine from "../../public/assets/img/Koleksi/Yasmine.png";
import Mezura from "../../public/assets/img/Koleksi/Mezura.png";
import Ozora from "../../public/assets/img/Koleksi/Ozora.png";
import Button from './Button';

interface KoleksiItemProps {
  jenisKoleksi:string;
  title: string;
  imageSrc: StaticImageData; 
  buttonLabel: string;
}

const KoleksiItem = ({ jenisKoleksi, title, imageSrc, buttonLabel }: KoleksiItemProps) => {
  return (
    <div className="relative w-[328px] h-[250px] md:w-full md:h-[250px] lg:w-full lg:h-[250px] bg-cover bg-center  overflow-hidden shadow-lg"> 
      <Image
        src={imageSrc}
        alt={title}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="absolute inset-0 z-0"
      />


      <div className="relative z-10 flex flex-col justify-center items-start h-full p-6 space-y-4">
        <div className='space-y-1'>
        <h5  className="text-foreground text-base md:font-base lg:font-base font-normal leading-7 uppercase font-poppins">{jenisKoleksi}</h5>
        <h3 className="text-primary text-lg md:text-xl lg:text-2xl font-bold font-plusJakartaSans ">{title}</h3>
        </div>      
        <Button variant='outline' className="py-2 px-4 text-center text-base font-semibold font-poppins">
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
}


const Koleksi = () => {
  return (
    <div className="bg-primary py-8 ">
      <div className="container mx-auto px-4 md:px-10 lg:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <KoleksiItem 
        jenisKoleksi="koleksi terbaru"
          title="Yasmine Batik" 
          imageSrc={Yasmine} 
          buttonLabel="Lihat Produk"
        />
        <KoleksiItem
         jenisKoleksi="koleksi terbaru"
          title="Mezura Batik" 
          imageSrc={Mezura} 
          buttonLabel="Lihat Produk"
        />
        <KoleksiItem 
         jenisKoleksi="koleksi terbaru"
          title="Ozora Batik" 
          imageSrc={Ozora} 
          buttonLabel="Lihat Produk"
        />
      </div>
    </div>
  );
}

export default Koleksi;

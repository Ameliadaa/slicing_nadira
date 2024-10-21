import Image from 'next/image';
import KatalogBatik from "../../public/assets/img/Katalog/Katalog-batik.png";
import KatalogKain from "../../public/assets/img/Katalog/Katalog-kain.png";
import Button from './Button';

const Katalog = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-4 md:px-10 lg:px-24">
    <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2">   
      <div>
        <Image
          src={KatalogBatik}  
          alt="Keunggulan Produk"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="space-y-4 flex flex-col justify-center py-5 md:px-8 lg:px-10">
        <h2 className="text-xl font-bold  text-primary italic font-plusJakartaSans md:text-2xl lg:text-3xl ">Keunggulan Produk</h2>
        <p className="font-poppins text-foreground font-normal text-base md:text-lg lg:text-lg">
          Setiap produk kami menggunakan bahan-bahan pilihan yang menunjang kenyamanan.
          Bahan pilihan yang digunakan antara lain Kain Primisima, Kain Katun Primis, Kain Paris, dan Kain Sutera.
        </p>
        <Button variant='outline' className=" text-primary text-center items-center flex justify-center font-poppins font-semibold w-[160px] py-3">
          Katalog
        </Button>
      </div>

   
      <div className="lg:order-last md:order-last">
        <Image
          src={KatalogKain}  
          alt="Pembuatan Produk"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="space-y-4 flex flex-col justify-center py-5 md:px-8 lg:px-10">
        <h2 className="text-xl font-bold  text-primary italic font-plusJakartaSans md:text-2xl lg:text-3xl">Pembuatan Produk</h2>
        <p className="font-poppins text-foreground font-normal text-base md:text-lg lg:text-lg">
          Setiap produk kami dikerjakan secara teliti dengan metode tradisional yang asli.
        </p>
        <Button variant='outline' className=" text-primary text-center items-center flex justify-center font-poppins font-semibold w-[160px] py-3">
          Tentang kami 
        </Button>
      </div>
    </div>
  </div>
);
};

export default Katalog;

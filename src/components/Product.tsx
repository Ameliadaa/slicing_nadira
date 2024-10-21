"use client";

import Image from "next/image";
import Product1 from "../../public/assets/img/Product/BatikSolo.png";
import Product2 from "../../public/assets/img/Product/SonyaBatik.png";
import Product3 from "../../public/assets/img/Product/BellaBatik.png";
import Product4 from "../../public/assets/img/Product/KemejaBatik.png";
import Product5 from "../../public/assets/img/Product/DaniaBatik.png";
import Product6 from "../../public/assets/img/Product/Rompi.png";
import Product7 from "../../public/assets/img/Product/Couple.png";
import Product8 from "../../public/assets/img/Product/CorakKotak.png";


const products = [
  {
    id: 1,
    title: "Batik Solo Lengan pendek",
    image: Product1,
    price: "Rp 325.000,-",
    oldPrice: "Rp 387.000,-",
    isSale: true,    
  },
  {
    id: 2,
    title: "Sonya Batik",
    image: Product2,
    price: "Rp 387.000,-",
    oldPrice: "Rp 444.000,-",
    isSale: true,    
  },
  {
    id: 3,
    title: "Bella Batik Kasual",
    image: Product3,
    price: "Rp 199.000,-",
    oldPrice: "Rp 217.000,-",
    isSale: true,    
  },
  {
    id: 4,
    title: "Kemeja Batik New Casual",
    image: Product4,
    price: "Rp 387.000,-",   
    isSale: false,    
  },
  {
    id: 5,
    title: "Dania Batik Couple",
    image: Product5,
    price: "Rp 297.000,-",  
    isSale: true,    
  },
  {
    id: 6,
    title: "Rompi Batik",
    image: Product6,
    price: "Rp 277.000,-",
    oldPrice: "Rp 387.000,-",
    isSale: true,    
  },
  {
    id: 7,
    title: "Batik Couple Koleksi Terbaru",
    image: Product7,
    price: "Rp 387.000,-",
    oldPrice: "Rp 487.000,-",
    isSale: true,    
  },
  {
    id: 8,
    title: "Kemeja Batik Corak Kotak Slim Fit",
    image: Product8,
    price: "Rp 397.000,-",  
    isSale: false,    
  },
];


const Product = () => {
  return (
    <div className="container mx-auto px-4 md:px-10 lg:px-24">
      <div className="flex flex-col justify-center items-center py-2 font-plusJakartaSans font-bold uppercase">
        <h4 className=" italic text-2xl  text-primary leading-9">
          best seller
        </h4>
        <h5 className=" text-base text-foreground ">TOP SALE IN THIS WEEK</h5>
      </div>

      <div className="grid grid-cols-2 gap-4 py-5 md:grid-cols-3 lg:grid-cols-4 md:gap-x-5 md:gap-y-8 lg:gap-x-5 lg:gap-y-10">
        {products.map((product) => (
          <div key={product.id} className="relative ">
            {product.isSale && (
              <span className="absolute top-4 right-4 bg-background text-primary shadow-sm px-4 py-1 text-base font-poppins ">
                SALE
              </span>
            )}
            <div className="flex justify-center z-1">
              <Image
                src={product.image}
                alt={product.title}
                width={150}
                height={250}
                className="mx-auto w-full overflow-hidden h-[250px] md:h-[300px] lg:h-[450px]"
              />
            </div>

            <div className="flex flex-col justify-center text-center  mt-2 ">            
              <h2 className="text-primary font-bold mt-1 font-plusJakartaSans text-lg md:text-xl lg:text-[22px]">{product.title}</h2>            
              <div className="mt-2 flex flex-col md:flex-col lg:flex-row text-center justify-center">
                {product.oldPrice && (
                  <p className="text-tersier-t line-through text-base font-poppins font-normal ">
                    {product.oldPrice}
                  </p>
                )}
                <p
                  className={`font-poppins font-semibold text-lg ${
                    product.isSale ? "text-foreground" : "text-black"
                  }`}
                >
                  {product.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;

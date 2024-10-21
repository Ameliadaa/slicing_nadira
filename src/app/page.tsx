

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Koleksi from "@/components/Koleksi";
import Category from "@/components/Category";
import Adsense from "@/components/Adsense";
import Product from "@/components/Product";
import CTA from "@/components/CTA";
import Katalog from "@/components/Katalog";
import Testimoni from "@/components/Testimoni";
import PromoSlider from "@/components/PromoSlider";
import Highlight from "@/components/Highlight";
import Footer from "@/components/Footer";

export default function Home() {
  return (
   <>
   <Navbar/>
   <Hero/>
   <Koleksi/>
   <Category/>
   <Adsense/>
   <Product />
   <CTA/>
   <Katalog/>
   <Testimoni/>
   <PromoSlider/>
   <Highlight/>
   <Footer/>
   </>
  
  );
}

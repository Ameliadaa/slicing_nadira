// 'use client';

// import Image from 'next/image';
// import { StaticImageData } from 'next/image';
// import womanProductImage from '../../public/assets/img/CategoryProduct/women.png';
// import manProductImage from '../../public/assets/img/CategoryProduct/man.png';
// import accessoriesProductImage from '../../public/assets/img/CategoryProduct/accecoris.png';

// interface Category {
//   title: string;
//   imageUrl: StaticImageData; 
// }

// const KategoriProduk = (): JSX.Element => {
//   const categories: Category[] = [
//     {
//       title: 'Woman Products',
//       imageUrl: womanProductImage,
//     },
//     {
//       title: 'Man Products',
//       imageUrl: manProductImage,
//     },
//     {
//       title: 'Accessories',
//       imageUrl: accessoriesProductImage,
//     },
//   ];

//   return (
//     <div className="container mx-auto py-8 px-4 md:px-10 lg:px-24">
//     <div className="flex flex-wrap -mx-5">
//       {categories.map((category, index) => (
//         <div key={index} className="w-full md:w-1/3 lg:w-1/3 p-4"> 
//           <div className="relative h-[450px] md:h-[480px] lg:h-[610px] bg-gray-200  overflow-hidden">      
//             <div className="absolute bottom-0 w-full h-[410px] md:h-[430px] lg:h-[550px] overflow-hidden">
//               <Image
//                 src={category.imageUrl}
//                 alt={category.title}
//                 layout="fill"
//                 objectFit="cover"
//                 className="object-cover"
//               />
//             </div>
//           </div>
//           <h3 className="text-center text-lg font-bold mt-4 text-primary font-plusJakartaSans leading-7">{category.title}</h3>
//         </div>
//       ))}
//     </div>
//   </div>
//   );
// };

// export default KategoriProduk;

'use client';

import Image from 'next/image';
import { StaticImageData } from 'next/image';
import womanProductImage from '../../public/assets/img/CategoryProduct/women.png';
import manProductImage from '../../public/assets/img/CategoryProduct/man.png';
import accessoriesProductImage from '../../public/assets/img/CategoryProduct/accecoris.png';

interface Category {
  title: string;
  imageUrl: StaticImageData;
}

const KategoriProduk = (): JSX.Element => {
  const categories: Category[] = [
    {
      title: 'Woman Products',
      imageUrl: womanProductImage,
    },
    {
      title: 'Man Products',
      imageUrl: manProductImage,
    },
    {
      title: 'Accessories',
      imageUrl: accessoriesProductImage,
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4 md:px-10 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((category, index) => (
          <div key={index}>
            <div className="relative h-[450px] md:h-[480px] lg:h-[610px] w-full bg-gray-200 overflow-hidden">
              <Image
                src={category.imageUrl}
                alt={category.title}
                layout="fill"
                objectFit="cover"
                className="object-cover pt-6"
              />
            </div>    
            <h3 className="mt-4 text-center text-lg font-bold text-primary font-plusJakartaSans leading-7">
              {category.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KategoriProduk;

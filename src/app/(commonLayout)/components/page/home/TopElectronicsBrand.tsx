// "use client";
// import useGetProducts from "@/hooks/useGetProducts";
// import React from "react";
// import SectionTitle from "../../SectionTitle";
// import { TProduct } from "@/types/product.types";
// import Image from "next/image";
// import DynamicLoader from "@/app/components/DynamicLoader";

// const TopElectronicsBrand = () => {
//   const { data, isLoading } = useGetProducts("Electronics");
//   const electronics = data?.data?.result?.[0]?.products;

//   const topElectronics = electronics?.filter(
//     (electronic: TProduct) => electronic.brandType === "top"
//   );

//   console.log(topElectronics);

//   console.log(electronics);
//   return (
//     <div>
//       <SectionTitle subtitle="Top Electronics" title="Brands" />
//       {isLoading ? (
//         <DynamicLoader />
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 bg-white place-items-center gap-10 mt-10 mx-0  md:mx-6 lg:mx-0 m-auto">
//           {topElectronics?.slice(0, 3).map((product: TProduct) => {
//             return (
//               <div
//                 key={product?._id}
//                 className="flex items-center p-4 rounded-lg shadow-md max-w-md mx-auto bg-[#313131]  w-[389px] h-[207px]"
//               >
//                 {/* <!-- Left Content --> */}
//                 <div className="flex flex-col items-start space-y-2 ">
//                   <span className="font-normal uppercase text-sm text-white bg-[#494949] py-2 px-5 rounded-lg">
//                     {product?.brand}
//                   </span>
//                   <div className="flex items-center py-2 space-x-2">
//                     <Image
//                       src={product?.brandLogo}
//                       alt={product.name}
//                       height={50}
//                       width={50}
//                       className="w-12 h-12 object-cover rounded-xl  bg-white"
//                     />
//                   </div>
//                   <p className="font-semibold text-lg text-white pl-0.5">
//                     Up to {product?.discount}% OFF
//                   </p>
//                 </div>

//                 {/* <!-- Right Product Image --> */}
//                 <div className="ml-auto">
//                   <Image
//                     src={product?.img?.[0]}
//                     alt={product.name}
//                     height={500}
//                     width={500}
//                     className="w-24 h-44 object-cover rounded-lg"
//                   />
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// };

// export default TopElectronicsBrand;

"use client";
import useGetProducts from "@/hooks/useGetProducts";
import React from "react";
import SectionTitle from "../../SectionTitle";
import { TProduct } from "@/types/product.types";
import Image from "next/image";
import DynamicLoader from "@/app/components/DynamicLoader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const TopElectronicsBrand = () => {
  const { data, isLoading } = useGetProducts("Electronics");
  const electronics = data?.data?.result?.[0]?.products;

  const topElectronics = electronics?.filter(
    (electronic: TProduct) => electronic.brandType === "top"
  );

  console.log(topElectronics);

  return (
    <div>
      <SectionTitle subtitle="Top Electronics" title="Brands" />
      {isLoading ? (
        <DynamicLoader />
      ) : (
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper mt-10"
        >
          {topElectronics?.map((product: TProduct) => (
            <SwiperSlide key={product?._id}>
              <div className="flex items-center p-4 rounded-lg shadow-md max-w-md mx-auto bg-[#313131] w-[389px] h-[207px]">
                {/* Left Content */}
                <div className="flex flex-col items-start space-y-2">
                  <span className="font-normal uppercase text-sm text-white bg-[#494949] py-2 px-5 rounded-lg">
                    {product?.brand}
                  </span>
                  <div className="flex items-center py-2 space-x-2">
                    <Image
                      src={product?.brandLogo}
                      alt={product.name}
                      height={50}
                      width={50}
                      className="w-12 h-12 object-cover rounded-xl bg-white"
                    />
                  </div>
                  <p className="font-semibold text-lg text-white pl-0.5">
                    Up to {product?.discount}% OFF
                  </p>
                </div>

                {/* Right Product Image */}
                <div className="ml-auto">
                  <Image
                    src={product?.img?.[0]}
                    alt={product.name}
                    height={500}
                    width={500}
                    className="w-24 h-44 object-cover rounded-lg"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default TopElectronicsBrand;

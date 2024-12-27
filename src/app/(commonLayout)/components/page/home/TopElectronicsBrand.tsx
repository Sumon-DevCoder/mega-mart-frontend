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
import { Autoplay, Pagination } from "swiper/modules";

const TopElectronicsBrand = () => {
  const { data, isLoading } = useGetProducts("Electronics");
  const electronics = data?.data?.result?.[0]?.products;

  const topElectronics = electronics?.filter(
    (electronic: TProduct) => electronic.brandType === "top"
  );

  return (
    <div className="hidden">
      <SectionTitle subtitle="Top Electronics" title="Brands" />
      {isLoading ? (
        <DynamicLoader />
      ) : (
        <Swiper
          spaceBetween={30}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: { slidesPerView: 1 }, // 1 slide on small devices
            768: { slidesPerView: 2 }, // 2 slides on medium devices
            1024: { slidesPerView: 3 }, // 3 slides on large devices
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper mt-10"
        >
          {topElectronics?.map((product: TProduct, index: number) => (
            <SwiperSlide key={index}>
              <div className="flex justify-between gap-4 items-center p-4 rounded-lg shadow-md w-[390px] mx-auto bg-[#313131]  h-[207px]">
                {/* Left Content */}
                <div className="col-span-2 flex flex-col items-start space-y-2">
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
                <div className="col-span-1">
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

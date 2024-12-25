"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const Banner = () => {
  // Data for the slides
  const slides = [
    {
      id: 1,
      title: "SMART WEARABLE",
      description: "Best Deal Online on smart watches.",
      discount: "Up to 80% OFF",
      img: "https://s3-alpha-sig.figma.com/img/f0c0/9379/745c2cc486f326929cc1b8f54c4ef1b6?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TqPOmHGPfDh8P0gQjq42xYxacFeXfcqbsLhSCuAPHufWjVfzGgC1A7Z5aZo0XcsXHIA-38Z4wvSnQ-VHUUI608vW4H~RyRaaSwzp79VCidy0i72zFTawx5nw2Y9xQ7b2qM2AdeOHjZr-96zL17~5WnxkGU2W2AHGsmZG8Ze~jJpAyWSSbZaxAhyp1csfET9g~YZaaLiBlVbJmoemEcWme-cYIat8i9~uejsgqaH1l8GcMvlR-5HhNk6hvbQQwwa~iyYYdwiYG3ntvJmVqlA3CnIjJr~EE7TrCbNyMfQZ2O4T74Gj1P1KC1uf-upUreu7b6liGpbPKOpLSrBEcf5JsQ__",
    },
    {
      id: 2,
      title: "PREMIUM LAPTOPS",
      description: "Grab the best deals on top-notch laptops.",
      discount: "Up to 50% OFF",
      img: "https://s3-alpha-sig.figma.com/img/f0c0/9379/745c2cc486f326929cc1b8f54c4ef1b6?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TqPOmHGPfDh8P0gQjq42xYxacFeXfcqbsLhSCuAPHufWjVfzGgC1A7Z5aZo0XcsXHIA-38Z4wvSnQ-VHUUI608vW4H~RyRaaSwzp79VCidy0i72zFTawx5nw2Y9xQ7b2qM2AdeOHjZr-96zL17~5WnxkGU2W2AHGsmZG8Ze~jJpAyWSSbZaxAhyp1csfET9g~YZaaLiBlVbJmoemEcWme-cYIat8i9~uejsgqaH1l8GcMvlR-5HhNk6hvbQQwwa~iyYYdwiYG3ntvJmVqlA3CnIjJr~EE7TrCbNyMfQZ2O4T74Gj1P1KC1uf-upUreu7b6liGpbPKOpLSrBEcf5JsQ__",
    },
    {
      id: 3,
      title: "TRENDY PHONES",
      description: "Exclusive offers on the latest smartphones.",
      discount: "Up to 70% OFF",
      img: "https://s3-alpha-sig.figma.com/img/f0c0/9379/745c2cc486f326929cc1b8f54c4ef1b6?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TqPOmHGPfDh8P0gQjq42xYxacFeXfcqbsLhSCuAPHufWjVfzGgC1A7Z5aZo0XcsXHIA-38Z4wvSnQ-VHUUI608vW4H~RyRaaSwzp79VCidy0i72zFTawx5nw2Y9xQ7b2qM2AdeOHjZr-96zL17~5WnxkGU2W2AHGsmZG8Ze~jJpAyWSSbZaxAhyp1csfET9g~YZaaLiBlVbJmoemEcWme-cYIat8i9~uejsgqaH1l8GcMvlR-5HhNk6hvbQQwwa~iyYYdwiYG3ntvJmVqlA3CnIjJr~EE7TrCbNyMfQZ2O4T74Gj1P1KC1uf-upUreu7b6liGpbPKOpLSrBEcf5JsQ__",
    },
  ];

  return (
    <div className="bg-[#212844] py-10 flex justify-center rounded-2xl max-w-[1201px] m-auto mt-6">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        style={{
          width: "100%", // Set to 100% for responsiveness
          maxWidth: "1200px", // Limit the maximum width
          height: "auto",
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className="flex items-center justify-center"
          >
            <div className="flex flex-col md:flex-row items-center gap-8 w-full h-full">
              {/* Left Side: Text Content */}
              <div className="text-white w-full md:w-1/2 px-4 text-center md:text-left">
                <p className="text-sm md:text-lg">{slide.description}</p>
                <h2 className="text-xl md:text-3xl font-bold my-3">
                  {slide.title}
                </h2>
                <p className="text-sm md:text-xl font-semibold text-yellow-400">
                  {slide.discount}
                </p>
              </div>
              {/* Right Side: Product Image */}
              <div className="w-full md:w-1/2 flex items-center justify-center">
                <Image
                  src={slide.img}
                  alt={slide.title}
                  width={316}
                  height={316}
                  className="rounded-lg object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;

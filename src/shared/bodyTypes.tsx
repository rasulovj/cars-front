"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const bodyTypes = [
  {
    type: "Sedan",
    offers: 1234,
    image: "/car-sedan.png",
  },
  {
    type: "SUV",
    offers: 980,
    image: "/car-sedan.png",
  },
  {
    type: "Hatchback",
    offers: 755,
    image: "/car-sedan.png",
  },
  {
    type: "Convertible",
    offers: 312,
    image: "/car-sedan.png",
  },
  {
    type: "Pickup",
    offers: 670,
    image: "/car-sedan.png",
  },
  {
    type: "Coupe",
    offers: 420,
    image: "/car-sedan.png",
  },
];

const BodyTypes = () => {
  return (
    <div className="py-12 px-4">
      <h1 className="text-2xl font-semibold mb-6">Popular car body types</h1>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-3 lg:grid-cols-6 gap-4 cursor-pointer">
        {bodyTypes.map((item, index) => (
          <div
            key={index}
            className="bg-accent p-4 rounded-lg text-center transition"
          >
            <img
              src={item.image}
              alt={item.type}
              className="mx-auto h-20 mb-3 hover:scale-105 transition-all duration-300"
            />
            <h2 className="text-lg font-medium">{item.type}</h2>
            <p className="text-sm text-gray-500">{item.offers} offers</p>
          </div>
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="md:hidden">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={12}
          slidesPerView={2.2}
          className="custom-swiper"
        >
          {bodyTypes.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-background p-4 rounded-lg text-center">
                <img
                  src={item.image}
                  alt={item.type}
                  className="mx-auto h-14 sm:h-20 mb-2 "
                />
                <h2 className="text-base font-medium">{item.type}</h2>
                <p className="text-xs text-gray-500">{item.offers} offers</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BodyTypes;

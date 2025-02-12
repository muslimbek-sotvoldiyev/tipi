"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Card = ({ title, date, image }) => {
  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-lg bg-white">
      <img
        className="w-full h-48 md:h-[220px] lg:h-[260px] object-cover"
        src={image}
        alt={title}
      />
      <div className="p-4 md:p-5 lg:p-6 flex justify-start text-start flex-col">
        <h2 className="text-base md:text-lg lg:text-xl font-semibold line-clamp-2">
          {title}
        </h2>
        <p className="text-gray-500 text-sm md:text-base mt-1">{date}</p>
        <a
          href="#"
          className="text-blue-500 mt-3 inline-flex items-center text-sm md:text-base hover:text-blue-600 transition-colors"
        >
          Batafsil{" "}
          <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </div>
  );
};

export default function Universal({ newsData, title }) {
  return (
    <div className="bg-gray-100 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-36 pt-8 md:pt-12 lg:pt-20 py-10">
      <h1 className="text-xl md:text-2xl lg:text-[30px] border-b border-black w-40 sm:w-48 lg:w-56 mb-6 md:mb-8 lg:mb-10">
        {title}
      </h1>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        grabCursor={true}
        modules={[Pagination]}
        className="mySwiper pb-12"
      >
        {newsData.map((news) => (
          <SwiperSlide key={news.id}>
            <Card title={news.title} date={news.date} image={news.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

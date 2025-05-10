"use client";
import Image from "next/image";
import { slides7 } from "@/data/heroslides";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="tf-slideshow slider-effect-fade slider-home-5 position-relative h-900"
      id="slider-section"
    >
      <Swiper
        dir="ltr"
        slidesPerView={1}
        centeredSlides={false}
        spaceBetween={0}
        loop={true}
        autoplay={{ delay: 2000 }}
        speed={1000}
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true, el: ".spd125" }}
      >
        {slides7.map((item, index) => (
          <SwiperSlide key={index} className="">
            <Image
              alt="Woodenizr"
              src="/images/slider/Hero-swiper-first-slide.svg"
              width="750"
              height="450"
              className="swiper-slide-cover object-fit-cover"
            />
            <div className="wrap-slider position-absolute">
              {/* <Image
                  className="lazyload"
                  data-src={item.src}
                  alt={item.title}
                  src={item.src}
                  width={2000}
                  height={1125}
                  priority
                /> */}
              <div className="box-content text-center">
                <div className="container ">
                  <h1 className="fade-item fade-item-1 text-white heading">
                    {item.title}
                  </h1>
                  <p className="fade-item fade-item-2 text-white">
                    {item.description}
                  </p>
                  <Link
                    href={`/shop-collection-list`}
                    className="fade-item fade-item-3  btn-light-icon animate-hover-btn btn-xl radius-3"
                  >
                    <span>Shop collection</span>
                    <i className="icon icon-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="wrap-pagination">
        <div className="sw-dots style-2 dots-white sw-pagination-slider justify-content-center spd125" />
      </div>
    </section>
  );
}

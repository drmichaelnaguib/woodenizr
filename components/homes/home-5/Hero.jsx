"use client";
import Image from "next/image";
import { slides7 } from "@/data/heroslides";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import woodenizr from "@/public/images/slider/Hero-swiper-first-slide.svg";

export default function Hero() {
  return (
    <section className="tf-slideshow slider-effect-fade slider-home-5 position-relative">
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
        // backgroundImage="@/public/images/slider/Hero-swiper-first-slide.svg"
        // backgroundPosition="center center"
        // backgroundSize="cover"
      >
        {slides7.map((item, index) => (
          <SwiperSlide key={index} style={{}}>
            <div
              style={{
                backgroundImage: `url("@/public/images/slider/Hero-swiper-first-slide.svg")`, // Set the background image here
                backgroundSize: "cover", // Adjust to cover the container
                backgroundPosition: "center center", // Center the image
                height: "100vh", // Ensure it takes full viewport height or adjust as needed
              }}
            >
              <Image
                alt="Woodenizr"
                className="position-relative opacity-0.5 "
                src={woodenizr}
                width="750"
                height="450"
              />

              <div className="wrap-slider position-absolute">
                <Image
                  className="lazyload"
                  data-src={item.src}
                  alt={item.title}
                  src={item.src}
                  width={2000}
                  height={1125}
                  priority
                />
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

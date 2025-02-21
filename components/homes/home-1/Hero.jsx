"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { slides } from "@/data/heroslides";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div
      className="tf-slideshow slider-effect-fade position-relative"
      id="home_banner_section"
    >
      <Swiper
        dir="ltr"
        className="swiper tf-sw-slideshow"
        modules={[Pagination]}
        pagination={{ clickable: true, el: ".sp1" }}
        speed={1000}
      >
        {slides.map((slide, index) => (
          <SwiperSlide className="swiper-slide" key={index}>
            <div className="wrap-slider">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="wrap-slider-image">
                    <Image
                      priority
                      alt="fashion-slideshow"
                      src={slide.imgSrc}
                      width="986"
                      height="456"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="box-content">
                    <h1 className="fade-item fade-item-1 fs-1 text slide-title">
                      {slide.title.split("\n").map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </h1>
                    <p className="fade-item fade-item-2 slide-text ">
                      {slide.text}
                    </p>
                    <Link
                      href={`/shop-default`}
                      className="fade-item fade-item-3 slide-link btn-fill animate-hover-btn btn-xl radius-3"
                    >
                      <span>{slide.btnText}</span>
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
        <div className="container">
          <div className="sw-dots sp1 sw-pagination-slider justify-content-center" />
        </div>
      </div>
    </div>
  );
}

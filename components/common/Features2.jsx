"use client";

import { iconBoxes3 } from "@/data/features";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Features({ titleFont = "" }) {
  return (
    <section
      className={`flat-spacing-1 flat-iconbox  wow fadeInUp`}
      id="features-section"
      data-wow-delay="0s"
    >
      <div className="container " id="swiper-wraper">
        <div className="wrap-carousel wrap-mobile" id="wrap-carousel">
          <Swiper
            dir="ltr"
            className="swiper tf-sw-mobile"
            id="swiper"
            breakpoints={{
              1024: { slidesPerView: 4, spaceBetween: 30 },
              768: { slidesPerView: 3, spaceBetween: 30 },
              640: { slidesPerView: 2, spaceBetween: 15 },
              0: { slidesPerView: 1, spaceBetween: 15 },
            }}
            modules={[Pagination]}
            pagination={{ clickable: true, el: ".spd104" }}
          >
            {iconBoxes3.map((box, index) => (
              <SwiperSlide key={index} className="bg_white" id="swiper-slide">
                <div
                  className="tf-icon-box style-row bg_white "
                  id="swiper-slide-box"
                >
                  <div className="icon bg_white" id="swiper-slide-icon">
                    <i className={box.iconClass} />
                  </div>
                  <div className="content" id="swiper-slide-content">
                    <div className={`title fw-700 fs-16 ${titleFont}`}>
                      {box.title}
                    </div>
                    <p>{box.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="sw-dots style-2 sw-pagination-mb justify-content-center spd104" />
        </div>
      </div>
    </section>
  );
}

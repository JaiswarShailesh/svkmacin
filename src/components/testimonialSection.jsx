"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import testimonials from "../data/testimonials";

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="testimonials section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>What are they saying</p>
      </div>

      {/* Swiper */}
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          speed={600}
          autoplay={{ delay: 5000 }}
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 40 },
            1200: { slidesPerView: 2, spaceBetween: 20 },
          }}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <img
                    src={testimonial.img}
                    className="testimonial-img"
                    alt={testimonial.name}
                  />
                  <h3>{testimonial.name}</h3>
                  <h4>{testimonial.role}</h4>
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill"></i>
                    ))}
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    <span>{testimonial.text}</span>
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSection;

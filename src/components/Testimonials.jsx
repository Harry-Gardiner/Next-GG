"use client";

import Testimonial from "./partials/Testimonial";
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';

// Import Swiper modules
import { Autoplay, Navigation } from 'swiper/modules';

const Testimonials = () => {
  const testimonialsData = [
    {
      name: "John Doe",
      date: "2022-01-01",
      stars: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco..",
    },
    {
      name: "Jane Doe",
      date: "2022-02-01",
      stars: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      name: "John Smith",
      date: "2022-03-01",
      stars: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Jane Smith",
      date: "2022-04-01",
      stars: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      name: "John Doe",
      date: "2022-05-01",
      stars: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Jane Doe",
      date: "2022-06-01",
      stars: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  const middleSlide = Math.floor(testimonialsData.length / 2);

  return (
    <section id="testimonials" className="testimonials overflow">
      <div className="container">
        <h2>Testimonials</h2>
        <Swiper
            spaceBetween={30}
            slidesPerView={1.5}
            centeredSlides={true}
            initialSlide={middleSlide}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay, Navigation]}
        >
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Testimonial
                key={index}
                name={testimonial.name}
                date={testimonial.date}
                stars={testimonial.stars}
                className="swiper-slide"
              >
                {testimonial.text}
              </Testimonial>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

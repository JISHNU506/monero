import React, { useState, useEffect, useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./About.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from "swiper";
import slide_image_1 from "../../images/srv1.png";
import slide_image_2 from "../../images/srv2.png";
import slide_image_3 from "../../images/srv3.png";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

function About() {
  const [selectedService, setSelectedService] = useState("service1");
  const swiperRef = useRef(null);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const swiper = swiperRef.current.swiper;
    let activeIndex = 0;

    if (selectedService === "service2") {
      activeIndex = 1;
    } else if (selectedService === "service3") {
      activeIndex = 2;
    }

    swiper.slideTo(activeIndex, 300);
  }, [selectedService]);

  const handleRadioChange = (event) => {
    setSelectedService(event.target.value);
  };

  return (
    <div className="about-container">
      <h3 className="content-header">Why Choose Us?</h3>
      <h4 className="dynamic-header"> {selectedService.toUpperCase()}</h4>
      <div className="radio-container">
        <div className="radio-item">
          <input
            type="radio"
            id="service1"
            name="service"
            value="service1"
            checked={selectedService === "service1"}
            onChange={handleRadioChange}
          />
        </div>
        <div className="radio-item">
          <input
            type="radio"
            id="service2"
            name="service"
            value="service2"
            checked={selectedService === "service2"}
            onChange={handleRadioChange}
          />
        </div>
        <div className="radio-item">
          <input
            type="radio"
            id="service3"
            name="service"
            value="service3"
            checked={selectedService === "service3"}
            onChange={handleRadioChange}
          />
        </div>
      </div>
      <div className="about_wrapper">
        <div className="slide-container" data-aos="fade-up">
          <Swiper
            ref={swiperRef}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            onSlideChange={() => {}}
            initialSlide={0}
          >
            <SwiperSlide className="swiperSlide">
              <img
                src={slide_image_1}
                alt="slide_image"
                className="slide-image rounded-image"
              />
            </SwiperSlide>
            <SwiperSlide className="swiperSlide">
              <img
                src={slide_image_2}
                alt="slide_image"
                className="slide-image rounded-image"
              />
            </SwiperSlide>
            <SwiperSlide className="swiperSlide">
              <img
                src={slide_image_3}
                alt="slide_image"
                className="slide-image rounded-image"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="content-container" data-aos="fade-up">
          {selectedService === "service1" && (
            <>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                sit odit molestias quod corporis ullam quidem, fuga dicta qui
                nesciunt quae,
              </span>
              <br />
              <p>
                Content for slide 1 - Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
            </>
          )}
          {selectedService === "service2" && (
            <>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                sit odit molestias quod corporis ullam quidem, fuga dicta qui
                nesciunt quae,
              </span>
              <br />
              <p>
                Content for slide 2 - Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
            </>
          )}
          {selectedService === "service3" && (
            <>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                sit odit molestias quod corporis ullam quidem, fuga dicta qui
                nesciunt quae,
              </span>
              <br />
              <p>
                Content for slide 3 - Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default About;

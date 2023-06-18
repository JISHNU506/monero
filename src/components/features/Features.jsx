import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Features.css";
import { AiFillRightCircle } from "react-icons/ai";
import slider_1 from "../../images/photo-1593643946890-b5b85ade6451.png";
import slider_2 from "../../images/photo-1593642634524-b40b5baae6bb.png";

function Features() {
  useEffect(() => {
    Aos.init({ duration: 1000 }); // Initialize AOS library
  }, []);

  return (
    <div className="additional-div">
      <div className="container-div" data-aos="fade-up">
        <h4 className="container-heading">
          Fright Company With a <span>Difference</span>.<br />
          Fright Company Innovation
        </h4>
        <div className="container-content">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sit
            odit molestias quod corporis ullam quidem
          </span>
          <br />
          <p>Read More</p>
        </div>
      </div>

      <div className="slider-div">
        <div className="slider-item" data-aos="fade-right">
          <img src={slider_2} alt="slide_image" className="slider-image" />
          <h4 className="slider-heading">Slider Heading 2</h4>
          <p className="slider-content">
            Slider content 2 - Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
          <AiFillRightCircle className="arrow_right_about" />
        </div>
        <div className="slider-item" data-aos="fade-left">
          <img src={slider_1} alt="slide_image" className="slider-image" />
          <h4 className="slider-heading">Slider Heading 3</h4>
          <p className="slider-content">
            Slider content 3 - Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
          <AiFillRightCircle className="arrow_right_about" />
        </div>
      </div>
    </div>
  );
}

export default Features;

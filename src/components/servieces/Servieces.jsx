import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Servieces.css";
import browser from "../../Icons/white/browser (1).png";
import world from "../../images/world-wide-web.png";

function Servieces() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="main-container">
      <div className="serviece_wrapper">
        <div className="row">
          <div className="col-2 serviece_header">
            <h3 data-aos="fade-up">Unmatched Services.</h3>
            <p data-aos="fade-up" data-aos-delay="200">Unmatched Excellence</p>
          </div>
          <div className="col-2 color-4" data-aos="fade-up" data-aos-delay="400">
            <div className="red-box">
              <img src={browser} alt="" />
            </div>
            <h4>What is Lorem ipsum</h4>
            <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet quia assumenda vero.</p>
          </div>
          <div className="col-2 color-4" data-aos="fade-up" data-aos-delay="600">
            <div className="red-box">
              <img src={browser} alt="" />
            </div>
            <h4>What is Lorem ipsum</h4>
            <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet quia assumenda vero.</p>
          </div>
        </div>

        <div className="row item_img">
          <div className="col-2 color-4" data-aos="fade-up" data-aos-delay="800">
            <div className="red-box">
              <img src={browser} alt="" />
            </div>
            <h4>What is Lorem ipsum</h4>
            <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet quia assumenda vero.</p>
          </div>
          <div className="col-2 color-4" data-aos="fade-up" data-aos-delay="1000">
            <div className="red-box">
              <img src={browser} alt="" />
            </div>
            <h4>What is Lorem ipsum</h4>
            <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet quia assumenda vero.</p>
          </div>
          <div className="col-2 color-4" data-aos="fade-up" data-aos-delay="1200">
            <div className="red-box">
              <img src={browser} alt="" />
            </div>
            <h4>What is Lorem ipsum</h4>
            <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet quia assumenda vero.</p>
          </div>
        </div>
      </div>
      <img className="bottom-image" src={world} alt="" data-aos="fade-up" data-aos-delay="1400" />
    </div>
  );
}

export default Servieces;

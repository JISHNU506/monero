import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { AiFillRightCircle } from "react-icons/ai";
import Navbar from "../navbar/Navbar";
import "./WelcomePage.css";

function WelcomePage() {
  useEffect(() => {
    Aos.init({ duration: 1000 }); 
  }, []);

  return (
    <div className="home">
      <Navbar />
      <div className="home_Container">
        <p className="sub_header" data-aos="fade-right">
          Ship Anything
        </p>
        <h4 data-aos="fade-up">
          <span className="header_lg">
            AROUND <span className="header_rg">THE WORLD</span>
          </span>
        </h4>
      </div>
      <div className="card_Container">
        {[1, 2, 3, 4, 5].map((index) => (
          <div className="cards" key={index} >
            <div className={`img_Sec${index}`} id="images" data-aos={index % 2 === 0 ? "fade-up" : "fade-right"}></div>
            <span className="card_items" data-aos={index % 2 === 0 ? "fade-up" : "fade-right"}>
              Service Title
            </span>
            <p className="card_sub" data-aos={index % 2 === 0 ? "fade-up" : "fade-right"}>
              Description
            </p>
            <AiFillRightCircle className="arrow_right" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default WelcomePage;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Common.css";

function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row_Footer">
            <div className="footer-col" data-aos="fade-up">
              <h4>Services</h4>
              <ul>
                <li>
                  <a href="#">Website Services</a>
                </li>
                <li>
                  <a href="#">Mobile Application Services</a>
                </li>
                <li>
                  <a href="#">Branding</a>
                </li>
                <li>
                  <a href="#">Network and CCTV</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
              </ul>
            </div>
            <div className="footer-col" data-aos="fade-up" data-aos-delay="100">
              <h4>Product</h4>
              <ul>
                <li>
                  <a href="#">ERP Solution</a>
                </li>
                <li>
                  <a href="#">POS Solution</a>
                </li>
                <li>
                  <a href="#">School Management</a>
                </li>
                <li>
                  <a href="#">Custom Softwares</a>
                </li>
              </ul>
            </div>
            <div className="footer-col" data-aos="fade-up" data-aos-delay="200">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
              <p>monero.gmail.com</p>
              <p>+91 9846123456</p>
            </div>
          </div>
        </div>
      </footer>
      <div className="small-footer">
        <div className="footer_container">
          <h5>© 2020 Monaco All Rights Reserved</h5>
          <div>
            <a href="#">Terms of Use | Privacy Policy</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

import React from "react";
import "./Home.css";
import Footer from "../components/Common/Footer";
import About from "../components/abouts/About";
import Features from "../components/features/Features";
import Servieces from "../components/servieces/Servieces";
import WelcomePage from "../components/welcomePage/WelcomePage";

export default function Home() {
  return (
    <>
      <div className="welcome_monero">
        <WelcomePage />
        <About />
        <Features />
        <Servieces />
        <Footer />
      </div>
    </>
  );
}

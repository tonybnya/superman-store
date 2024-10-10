import React from "react";
import bg from "../assets/images/img20.png";
import logo from "../assets/logos/logo.png";

const HeroEshop = () => {
  return (
    <header
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-cover bg-center bg-no-repeat drop-shadow-custom min-h-screen flex flex-col gap-4 justify-center"
    >
      <h1 className="text-center text-[#F1C530] font-bold font-advent lg:text-8xl max-lg:text-6xl md:text-8xl">Looking for<br />a yellow underwear?</h1>
      <div className="flex items-center justify-center">
        <img src={logo} className="animate-bounce w-20 h-20" alt="Colorize superman logo" />
      </div>
    </header>
  )
}

export default HeroEshop;

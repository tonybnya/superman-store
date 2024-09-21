<<<<<<< HEAD
import React from "react";

const Footer = () => {
    return (
        <div>Footer</div>
    )
}
export default Footer;
=======
import wb from "../assets/icons/WB.png";
import x from "../assets/icons/x.png";
import logo from "../assets/icons/logo.png";
import dc from "../assets/icons/dc.png";

import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
import twitter from "../assets/icons/twitter.png";

const Footer = () => {
  return (
    <footer className="text-center">
        <div className="flex gap-1">
            <img src={wb} alt="Warner Bros logo" />
            <span>This project is inspired by the cinematic universe of the Superman movies.</span>
        </div>
        <div className="brand flex gap-4 mx-auto">
            <div className="icons flex">
                <img className="w-6" src={logo} alt="Superman white logo" />
                <img className="w-6" src={x} alt="x logo" />
                <img className="w-6" src={dc} alt="DC Comics logo" />
            </div>
            <div className="social flex">
                <img src={facebook} alt="Superman white logo" />
                <img src={instagram} alt="x logo" />
                <img src={twitter} alt="DC Comics logo" />
            </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                <div className="text-sm text-blueGray-500 font-semibold py-1">
                    Copyright © <span id="get-current-year">2024</span>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;
>>>>>>> 4f47de75d095dcc1877e9df5d16796f7f0e0e6c0

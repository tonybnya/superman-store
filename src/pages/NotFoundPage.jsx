import { NavLink } from "react-router-dom";
import React from "react";
import bg from "../assets/images/bg-404.jpg";

const NotFoundPage = () => {
  return (
      <main
          className="relative overflow-hidden min-h-screen bg-cover bg-center flex flex-col justify-center items-center"
      >
        <div
            className="absolute inset-0 bg-cover bg-center opacity-50"
            style={{backgroundImage: `url(${bg})`}}
        ></div>
        <div className="relative z-10 text-white text-center">
          <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
          <div className="bg-[#b11313] p-4 text-sm rounded rotate-12 relative">
            Page Not Found
          </div>
          <button className="mt-5">
            <a
                className="relative inline-block text-sm font-medium text-white group focus:outline-none focus:ring"
            >
              <span
                  className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#b11313] group-hover:translate-y-0 group-hover:translate-x-0"
              ></span>

              <span className="relative block px-8 py-3 bg-[#07338C] border border-current">
                <NavLink to="/">Go Home</NavLink>
              </span>
            </a>
          </button>
        </div>
      </main>
  )
}

export default NotFoundPage;
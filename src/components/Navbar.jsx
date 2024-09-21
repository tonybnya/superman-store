import React from "react";
import { NavLink } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import logo from "../assets/logos/logo_3d.png";

const RSLink = ({ title }) => (
  <LinkScroll className="base-bold text-p4 uppercase transition-colors duration-1000 cursor-pointer hover:text-g8 max-lg:my-4 max-lg:h5">
    {title}
  </LinkScroll>
);

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full py-10">
      <div className="container flex h-14 items-center max-lg:px-5">
        <NavLink to="/" className="lg:hidden flex-1 cursor-pointer z-2">
          <img src={logo} alt="Superman white logo" width={90} height={55} />
        </NavLink>
      </div>
      <div className="w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0">
        <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
          <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
            <ul className="flex max-lg:block max-lg:px-12">
              <li className="nav-li">
                <RSLink title="home" />
                <div className="dot" />
                <RSLink title="eshop" />
              </li>
              <li className="nav-logo">
                <LinkScroll>
                  <img
                    src={logo}
                    alt="Superman white logo"
                    width={160}
                    height={55}
                  />
                </LinkScroll>
              </li>
              <li className="nav-li">
                <div className="dot" />
                <RSLink title="account" />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

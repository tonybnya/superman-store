import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import wb from "../assets/icons/WB.png";
import logo from "../assets/icons/logo.png";
import x from "../assets/icons/x.png";
import dc from "../assets/icons/DC.png";
import QuoteSlider from "./QuoteSlider.jsx";

const Footer = () => {
  return (
    <footer className="g11 py-10 text-center">
      <QuoteSlider />
      <div className="container pt-10">
        <div className="flex gap-2 items-center justify-center max-lg:flex-col">
          <img src={wb} alt="Warner Bros. white logo" className="w-10" />
          <p className="max-sm:text-sm">
            This project is inspired by the cinematic universe of Superman.
          </p>
        </div>
        <div className="py-4 flex items-center justify-center max-lg:flex-col max-lg:items-center gap-10">
          <div className="flex items-center gap-2">
            <img src={logo} alt="" className="w-10" />
            <img src={x} alt="" className="w-5 h-5" />
            <img src={dc} alt="" className="w-10" />
          </div>
          <div className="flex gap-2">
            <a href="https://github.com/tonybnya" target="_blank">
              <FontAwesomeIcon
                icon={faGithub}
                className="hover:scale-110 hover:text-[#862019]"
              />
            </a>
            <a href="https://www.linkedin.com/in/tonybnya/" target="_blank">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="hover:scale-110 hover:text-[#862019]"
              />
            </a>
            <a href="https://x.com/tonybnya" target="_blank">
              <FontAwesomeIcon
                icon={faXTwitter}
                className="hover:scale-110 hover:text-[#862019]"
              />
            </a>
          </div>
        </div>
        <span className="text-center">&copy; Copyright 2024</span>
      </div>
    </footer>
  );
};
export default Footer;

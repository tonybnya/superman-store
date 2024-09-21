import { NavLink } from "react-router-dom";
import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
import twitter from "../assets/icons/twitter.png";

const SocialHero = () => {
  return (
    <div className="container pl-6 flex xl:flex-col xl:gap-20 md:flex-row md:justify-center md:gap-10 max-sm:flex-row max-sm:justify-center max-sm:gap-10">
        <NavLink to="https://web.facebook.com/tonybnya" target="_blank"><img src={facebook} className="logo" alt="Facebook logo" /></NavLink>
        <NavLink to="https://www.instagram.com/tonybnya" target="_blank"><img src={instagram} className="logo" alt="Instagram logo" /></NavLink>
        <NavLink to="https://x.com/tonybnya" target="_blank"><img src={twitter} className="logo" alt="Twitter logo" /></NavLink>
    </div>
  )
}

export default SocialHero;

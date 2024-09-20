import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
import twitter from "../assets/icons/twitter.png";

const SocialHero = () => {
  return (
    <div className="container pl-6 flex xl:flex-col xl:gap-20 md:flex-row md:justify-center md:gap-10 max-sm:flex-row max-sm:justify-center max-sm:gap-10">
        <a href=""><img src={facebook} alt="Facebook logo" /></a>
        <a href=""><img src={instagram} alt="Instagram logo" /></a>
        <a href=""><img src={twitter} alt="Twitter logo" /></a>
    </div>
  )
}

export default SocialHero;
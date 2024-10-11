import bg from "../assets/images/bg-eshop-hero.png";
import logo from "../assets/logos/logo.png";

const HeroEshop = () => {
  return (
    <header
      className="relative bg-cover bg-center bg-no-repeat drop-shadow-blue min-h-screen flex flex-col gap-4 justify-center"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{backgroundImage: `url(${bg})`}}
      ></div>
      <div className="relative z-10">
        <h1 className="text-center text-[#F1C530] font-bold font-advent lg:text-8xl max-lg:text-6xl md:text-8xl">Looking for<br />an yellow underwear?</h1>
        <h3 className="font-rajdhani text-center text-white py-4 lg:text-6xl max-lg:text-xl md:text-4xl">Get the superman flow with this e-shop!</h3>
        <div className="flex items-center justify-center">
          <img src={logo} className="animate-bounce w-20 h-20" alt="Colorize superman logo" />
        </div>
      </div>
    </header>
  )
}

export default HeroEshop;

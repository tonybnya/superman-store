import { NavLink } from "react-router-dom";
import Button from "../components/Button";
import superman from "../assets/icons/superman.png";
import hero from "../assets/images/logo_hd.png";

const HeroHome = () => {
  return (
    <section className="relative pt-40 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <div className="container flex items-center max-lg:flex-col max-lg:text-center max-lg:items-center max-lg:justify-center">
        <div className="relative z-2">
          <div className="font-bold uppercase text-[#862019]">
            Superman Store
          </div>
          <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12 font-advent">
            Kryptonian Hero
          </h1>
          <p className="max-w-440 mb-14 body-1 max-md:mb-10 font-cantarell">
            Superman, the Man of Steel, stands as Earth&apos;s greatest
            protector, embodying hope, justice, and unwavering strength. With
            powers beyond imagination, he fights for a brighter future where
            good always triumphs.
          </p>
          <NavLink to="eshop">
            <Button icon={superman}>Try it now</Button>
          </NavLink>
        </div>

        <div className="pointer-events-none">
          <img
            src={hero}
            className="max-lg:h-auto drop-shadow-custom"
            alt="hero"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroHome;

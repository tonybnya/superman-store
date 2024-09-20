import HeroHome from "../components/HeroHome";
import Navbar from "../components/Navbar";
import SocialHero from "../components/SocialHero";
import img1 from "../assets/images/img1.png";
const HeaderHome = () => {
  return (
    <header
        className="bg-cover bg-center min-h-screen w-full"
        style={{ backgroundImage: `url(${img1})` }}
    >
        <Navbar />
          <div className="container flex xl:flex-row items-center px-6 pt-20 md:flex-col-reverse md:gap-20 max-sm:flex-col-reverse max-sm:gap-10">
            <SocialHero />
            <HeroHome />
        </div>
    </header>
  )
}

export default HeaderHome;
import dc from "../assets/logos/logoDC.png";

const HeroHome = () => {
  return (
      <div className="container px-6 flex items-center gap-8 text-g8 justify-center xl:flex-row md:flex-col max-sm:flex-col">
        <img src={dc} alt="Detective Comics logo" />  
          <div className="font-cantarell md:text-center max-sm:text-center">
              <span className="uppercase text-white text-8xl font-bold drop-shadow-lg max-sm:text-4xl">superman</span><br />
              <span className="uppercase text-g8 text-5xl max-sm:text-xl">the man of steel</span>
        </div>
    </div>
  )
}

export default HeroHome;
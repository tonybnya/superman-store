import HeroHome from "../sections/HeroHome.jsx";
import ActorsHome from "../sections/ActorsHome.jsx";
import MultimediaHome from "../sections/MultimediaHome.jsx";
import TrailerHome from "../sections/TrailerHome.jsx";

const Home = () => {
  return (
    <main className="overflow-hidden">
      <HeroHome />
      <ActorsHome />
      <MultimediaHome />
      <TrailerHome />
    </main>
  );
};

export default Home;

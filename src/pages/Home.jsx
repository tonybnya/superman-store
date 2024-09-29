import HeroHome from "../sections/HeroHome.jsx";
import ActorsHome from "../sections/ActorsHome.jsx";
import MultimediaHome from "../sections/MultimediaHome.jsx";
import Trailer from "../components/Trailer.jsx";

const Home = () => {
  return (
    <main className="overflow-hidden">
      <HeroHome />
      <ActorsHome />
      <MultimediaHome />
      <Trailer />
    </main>
  );
};

export default Home;

import HeroHome from "../sections/HeroHome.jsx";
import ActorsHome from "../sections/ActorsHome.jsx";
import MultimediaHome from "../sections/MultimediaHome.jsx";

const Home = () => {
  return (
    <main className="overflow-hidden">
      <HeroHome />
      <ActorsHome />
      <MultimediaHome />
    </main>
  );
};

export default Home;

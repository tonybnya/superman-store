import HomeHero from '../sections/HomeHero.jsx';
import HomeActors from '../sections/HomeActors.jsx';
import HomeMultimedia from '../sections/HomeMultimedia.jsx';
import HomeTrailer from '../sections/HomeTrailer.jsx';

const Home = () => {
  return (
    <main className="overflow-hidden">
      <HomeHero />
      <HomeActors />
      <HomeMultimedia />
      <HomeTrailer />
    </main>
  );
};

export default Home;

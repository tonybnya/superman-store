import bg from '../assets/images/bg-home-multimedia.png';
import { multimedia, movies } from '../constants/index.jsx';
import MultimediaSlider from '../components/MultimediaSlider.jsx';

const MultimediaHome = () => {
  const multimediaItem = multimedia[0];

  return (
    <section
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-cover bg-center bg-no-repeat drop-shadow-other"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-90"></div>
      <div className="relative container bg-black/90 py-10">
        <h1 className="uppercase font-bold text-4xl">{multimediaItem.title}</h1>
        {multimediaItem.text.map((paragraph, index) => (
          <p key={index} className="py-2 text-justify font-rajdhani text-xl">
            {paragraph}
          </p>
        ))}
        <div className="py-10">
          <h1 className="uppercase font-bold text-4xl">multimedia</h1>
        </div>
        <MultimediaSlider movies={movies} />
      </div>
    </section>
  );
};

export default MultimediaHome;

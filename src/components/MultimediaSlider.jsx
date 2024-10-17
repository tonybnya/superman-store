import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import leftArrow from '../assets/icons/left.png';
import rightArrow from '../assets/icons/right.png';
import MultimediaCard from './MultimediaCard';

const MultimediaSlider = ({ movies }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === movies.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? movies.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(autoSlide);
  }, []);

  return (
    <div className="relative w-full flex items-center justify-center">
      <img
        src={leftArrow}
        alt="left arrow"
        onClick={prevSlide}
        className="absolute left-0 z-10 h-8 w-8 cursor-pointer md:h-12 md:w-12"
      />
      <div className="w-full max-w-[36rem] overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {movies.map((movie) => (
            <div key={movie.id} className="min-w-full">
              <MultimediaCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
      <img
        src={rightArrow}
        alt="right arrow"
        onClick={nextSlide}
        className="absolute right-0 z-10 h-8 w-8 cursor-pointer md:h-12 md:w-12"
      />
    </div>
  )
}

// Define prop types
MultimediaSlider.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      image: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      imdb: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MultimediaSlider;

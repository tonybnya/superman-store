import bg from "../assets/images/img11.png";
import leftArrow from "../assets/icons/left.png";
import rightArrow from "../assets/icons/right.png";
import { useState, useEffect } from "react";
import { multimedia, movies } from "../constants";
import MultimediaCard from "../components/MultimediaCard.jsx";

const MultimediaHome = () => {
  const multimediaItem = multimedia[0];
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
        {/* TODO: Slider here */}
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
      </div>
    </section>
  );
};

export default MultimediaHome;

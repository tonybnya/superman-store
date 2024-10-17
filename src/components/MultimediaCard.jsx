import PropTypes from 'prop-types';

const MultimediaCard = ({ movie }) => {
  return (
    <div className="relative font-rajdhani flex w-full max-w-[36rem] flex-row max-sm:flex-col rounded-xl bg-[#062A5A] bg-clip-border text-white shadow-md">
      <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700 max-sm:mx-auto max-sm:rounded-xl max-sm:mt-6">
        <img
          src={movie.image}
          alt="movie image"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-6 max-sm:text-center">
        <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-[#b11313]">
          {movie.genre}
        </h6>
        <h4 className="mb-2 block text-2xl font-advent font-semibold leading-snug tracking-normal text-gray-300 decoration-4">
          {movie.title}
        </h4>
        <h3>
          IMDB: <span className="text-[#F1C530] font-bold">{movie.imdb}</span>
        </h3>
        <p className="mb-8 block font-inter text-justify text-base font-normal text-gray-400">
          {movie.text}
        </p>
      </div>
    </div>
  );
};

// Define prop types
MultimediaCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    image: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imdb: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default MultimediaCard;

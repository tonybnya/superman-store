import quoteLeft from "../assets/icons/quote_left.svg";
import quoteRight from "../assets/icons/quote_right.svg";
import { quotes } from "../constants";

const QuoteSlider = () => {
  const quote = quotes[0];

  return (
    <div className="container relative w-48 h-48 sm:w-64 sm:h-64 lg:h-96 lg:w-96 mx-auto">
      <img
        src={quoteLeft}
        alt="left quote"
        className="text-red absolute top-0 left-0 h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 cursor-pointer z-10"
      />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 sm:w-56 lg:w-72 px-4 py-4 flex flex-col items-center justify-center bg-[#07338C] text-white text-center font-bold rounded-lg shadow-lg">
        <blockquote className="font-cantarell text-xs sm:text-sm lg:text-lg mb-2 italic">
          {quote.text}
        </blockquote>
        <cite className="font-advent font-bold text-xs sm:text-sm lg:text-base not-italic">
          - {quote.source}
        </cite>
      </div>

      <img
        src={quoteRight}
        alt="right quote"
        className="text-red absolute bottom-0 right-0 h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 cursor-pointer z-10"
      />
    </div>
  );
};

export default QuoteSlider;

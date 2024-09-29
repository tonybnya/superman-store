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
        className="absolute top-0 left-0 h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 cursor-pointer z-10"
      />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center bg-green-500 text-white font-bold">
        <p>{quote.text}</p>
        <span>{quote.source}</span>
      </div>

      <img
        src={quoteRight}
        alt="right quote"
        className="absolute bottom-0 right-0 h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 cursor-pointer z-10"
      />
    </div>
  );
};

export default QuoteSlider;

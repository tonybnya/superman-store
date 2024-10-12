import Button from "./Button";
import InfoButton from "./InfoButton";

const EshopProductCard = ({ name, price, description, image_url }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative flex flex-col text-gray-700 shadow-md rounded-xl w-72">
        <div className="relative mx-4 mt-4 overflow-hidden flex items-center justify-center text-gray-700 text-center bg-transparent border-2 border-[#062A5A] rounded-xl h-44">
          <img
            src={image_url}
            alt={"image of" + " " + name}
            className="w-1/2 h-1/2"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="block font-advent font-bold text-[#F1C530] text-base antialiased leading-relaxed">
              {name}
            </p>
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-white">
              $<span className="font-bold text-[#b11313]">{price}</span>
            </p>
          </div>
            <p className="block font-sans text-sm text-justify antialiased font-normal leading-normal text-white opacity-75">
              {description.length > 100 ? description.substring(0, 120) + '...' : description}
            </p>
        </div>
        <div className="p-6 pt-0 w-full flex justify-between items-center">
          <Button>Add to Cart</Button>
          <InfoButton />
        </div>
      </div>
    </div>
  )
}

export default EshopProductCard;

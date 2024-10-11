const EshopProductCard = ({ name, price, description, imageUrl }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative flex flex-col text-gray-700 shadow-md bg-clip-border rounded-xl w-64">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-44">
          <img
            src={imageUrl}
            alt="card-image"
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
              {description.length > 100 ? description.substring(0, 100) + '...' : description}
            </p>
        </div>
        <div className="p-6 pt-0">
          <button
            className="align-middle select-none font-sans font-bold text-center text-white bg-[#862019] uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            type="button"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default EshopProductCard;

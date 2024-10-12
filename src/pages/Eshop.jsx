import EshopHero from "../sections/EshopHero";
import EshopCart from "../components/EshopCart";
import EshopFilter from "../components/EshopFilter";
import EshopCatalog from "../sections/EshopCatalog";

const Eshop = () => {
  return (
    <main className="overflow-hidden container">
      <EshopHero />
      <EshopCart />
      <div className="flex max-lg:flex-col max-lg:text-center mb-40">
        <EshopFilter />
        <EshopCatalog />
      </div>
    </main>
  )
}

export default Eshop;

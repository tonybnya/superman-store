import EshopHero from "../sections/EshopHero";
import EshopCart from "../components/EshopCart";
import EshopFilter from "../components/EshopFilter";
import EshopCatalog from "../sections/EshopCatalog";

const Eshop = () => {
  return (
    <main className="overflow-hidden">
      <EshopHero />
      <EshopCart />
      <div className="flex">
        <EshopFilter />
        <EshopCatalog />
      </div>
    </main>
  )
}

export default Eshop;

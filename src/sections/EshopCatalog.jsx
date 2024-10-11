import { useEffect, useState } from "react";
import api from "../api";
import EshopProductCard from "../components/EshopProductCard";

const EshopCatalog = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await api.get("/products");
    setProducts(response.data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1 className="font-bold text-4xl">Catalog of Products</h1>
      <div className="grid lg:grid-cols-3 max-lg:grid-cols-1 md:grid-cols-2">
        {products.map((product) => (
          <EshopProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
            image_url={product.image_url}
          />
        ))}
      </div>
    </div>
  )
}

export default EshopCatalog;

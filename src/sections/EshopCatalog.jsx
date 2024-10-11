import { useEffect, useState } from "react";
import api from "../api";

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
    <div className="container">
      <h1>EshopCatalog</h1>
      {console.log(products)}
    </div>
  )
}

export default EshopCatalog;

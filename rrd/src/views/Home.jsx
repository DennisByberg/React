import { useState, useEffect } from "react";
import Product from "./Product";
const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await fetch("https://dummyjson.com/todos");
      const data = await response.json();

      setProducts(data.products);
    }
    getProducts();
  });

  const productComponent = products.map((product) => {
    return <a href={<Product />}></a>;
  });

  return <div>{productComponent}</div>;
};

export default Home;

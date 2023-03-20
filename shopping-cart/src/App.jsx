import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Product from "./components/Product/Product";
// import productData from "./productData";

function App() {
  const [products, setProducts] = useState([]);
  const [productsInCart, setProductsInCart] = useState([]);
  const productComponent = products.map((p) => {
    return (
      <Product
        addBookToCart={addBookToCart}
        products={products}
        key={p.id}
        title={p.title}
        author={p.price}
        about={p.description}
      />
    );
  });

  useEffect(() => {
    async function getProducts() {
      const url = "https://dummyjson.com/products";
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.products);
      setProducts(data.products);
    }
    getProducts();
  }, []);

  // This function adds a book title to the products in cart if it doesn't already exist
  function addBookToCart(title) {
    if (!productsInCart.includes(title)) {
      const temp = [...productsInCart];
      temp.push(title);
      setProductsInCart(temp);
    }
  }

  return (
    <div className="App">
      <Header productsInCart={productsInCart} />
      <section className="products">{productComponent}</section>
    </div>
  );
}

export default App;

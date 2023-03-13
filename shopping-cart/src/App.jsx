import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Product from "./components/Product/Product";
import productData from "./productData";

function App() {
  const [products, setProducts] = useState(productData);
  const [productsInCart, setProductsInCart] = useState([]);
  const productComponent = products.map((p) => {
    return (
      <Product
        addBookToCart={addBookToCart}
        products={products}
        key={p.id}
        title={p.title}
        author={p.author}
        about={p.about}
      />
    );
  });

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

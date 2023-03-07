import "./App.css";
import Header from "./components/Header/Header";
import Product from "./components/Product/Product";
import products from "./products";

function App() {
  const allProducts = products.map((p) => {
    return (
      <Product key={p.id} title={p.title} author={p.author} about={p.about} />
    );
  });

  return (
    <div className="App">
      <Header />
      <section className="all-products">{allProducts}</section>
    </div>
  );
}

export default App;

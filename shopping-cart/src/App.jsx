import "./App.css";
import Header from "./components/Header/Header";
import Product from "./components/Product/Product";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="all-products">
        <Product
          title="A Sign Of One"
          author="Sir Arthur Conan Doyle"
          about="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat earum dolorem ducimus, quod, ex ipsam fuga expedita eveniet alias consequuntur sapiente corporis rem illum. Totam, nobis ducimus? Adipisci, consectetur corporis."
        />
        <Product
          title="A Sign Of Two"
          author="Sir Arthur Conan Doyle"
          about="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat earum dolorem ducimus, quod, ex ipsam fuga expedita eveniet alias consequuntur sapiente corporis rem illum. Totam, nobis ducimus? Adipisci, consectetur corporis."
        />
        <Product
          title="A Sign Of Three"
          author="Sir Arthur Conan Doyle"
          about="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat earum dolorem ducimus, quod, ex ipsam fuga expedita eveniet alias consequuntur sapiente corporis rem illum. Totam, nobis ducimus? Adipisci, consectetur corporis."
        />
        <Product
          title="A Sign Of Four"
          author="Sir Arthur Conan Doyle"
          about="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat earum dolorem ducimus, quod, ex ipsam fuga expedita eveniet alias consequuntur sapiente corporis rem illum. Totam, nobis ducimus? Adipisci, consectetur corporis."
        />
      </section>
    </div>
  );
}

export default App;

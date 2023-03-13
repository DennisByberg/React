import "./Header.css";
import Cart from "../Cart/Cart";

const Header = ({ productsInCart }) => {
  const detectiveIMG =
    "https://cdn-icons-png.flaticon.com/512/2706/2706828.png";

  return (
    <header className="header">
      <img className="header__detective-img" src={detectiveIMG} />
      <p className="header__app-name">PRODUCTS</p>

      <Cart productsInCart={productsInCart} />
    </header>
  );
};

export default Header;

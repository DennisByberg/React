import "./Header.css";
import Cart from "../Cart/Cart";

const Header = () => {
  return (
    <header>
      <img
        className="header__detective-img"
        src="https://cdn-icons-png.flaticon.com/512/2706/2706828.png"
      />
      <Cart />
    </header>
  );
};

export default Header;

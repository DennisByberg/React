import "./NavBar.scss";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { Link } from "react-router-dom";
import BonzaiLogo from "../../assets/logos/bonz.ai-logo-color-landscape.png";

const NavBar = ({ isOpen, setIsOpen }) => {
  return (
    <nav className="nav">
      <ul className="nav__menu">
        <li className="nav__menu-item">
          <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </li>
        <li className="nav__menu-item">
          <Link to="/">
            <img className="nav__logo" src={BonzaiLogo} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

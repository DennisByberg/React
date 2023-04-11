// sass
import "./Header.scss";

function Header({ title }) {
  return (
    <header className="header">
      <h1 className="header__title">{title}</h1>
    </header>
  );
}
export default Header;

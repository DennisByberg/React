import "./Header.scss";

function Header() {
  const appName = "Poster Shop";
  const navIMG = "https://cdn-icons-png.flaticon.com/512/5107/5107718.png";
  const ninjaHeadIMG = "../src/assets/ninjahead.svg";

  return (
    <header className="header">
      <img className="header__nav-icon" src={navIMG} />
      <h1 className="header__title">{appName}</h1>
      <img className="header__ninjahead-img" src={ninjaHeadIMG} />
    </header>
  );
}

export default Header;

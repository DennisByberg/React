import "./HamburgerMenu.scss";

const HamburgerMenu = ({ isOpen, setIsOpen }) => {
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`hamburger-menu ${isOpen ? "hamburger-menu--open" : ""}`}
        onClick={handleClick}
      >
        <span className="hamburger-menu__line"></span>
        <span className="hamburger-menu__line"></span>
        <span className="hamburger-menu__line"></span>
      </div>
    </>
  );
};

export default HamburgerMenu;

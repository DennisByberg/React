import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__nav-container">
        <h3>NAV</h3>
        <nav>
          <ul>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="footer__address-container">
        <h3>Address</h3>
        <p className="footer__address-text">
          Plinkeplonkvägen 32 888 81 Klonkberga
        </p>
      </div>

      <div className="footer__social-media-container">
        <h3>Social Media</h3>
        <ul className="footer__social-media-list">
          <li>
            <img src="../src/assets/logo-twitter.svg" />
          </li>
          <li>
            <img src="../src/assets/logo-facebook.svg" />
          </li>
          <li>
            <img src="../src/assets/logo-linkedin.svg" />
          </li>
          <li>
            <img src="../src/assets/logo-instagram.svg" />
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

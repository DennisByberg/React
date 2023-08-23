import "./Footer.scss";
import Devices from "../Devices/Devices";

function Footer({ toggleDevices, isDevicesSlider }: IFooterProps): JSX.Element {
  const questionMarkPNG = "../src/images/question-mark.png";
  const githubPNG = "../src/images/github.png";
  const githubLink = "https://github.com/DennisByberg";

  return (
    <footer className="footer">
      {isDevicesSlider ? <Devices toggleDevices={toggleDevices} /> : null}
      <img
        className="footer__question-mark"
        onClick={toggleDevices}
        src={questionMarkPNG}
      />

      <a className="footer__github" target="_blank" href={githubLink}>
        <img src={githubPNG} />
      </a>
    </footer>
  );
}
export default Footer;

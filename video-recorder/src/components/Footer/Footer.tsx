import "./Footer.scss";

function Footer() {
  const questionMarkPNG = "../src/images/question-mark.png";
  const githubPNG = "../src/images/github.png";
  const githubLink = "https://github.com/DennisByberg";

  return (
    <footer className="footer">
      <img className="footer__question-mark" src={questionMarkPNG} />

      <a className="footer__github" target="_blank" href={githubLink}>
        <img src={githubPNG} />
      </a>
    </footer>
  );
}
export default Footer;

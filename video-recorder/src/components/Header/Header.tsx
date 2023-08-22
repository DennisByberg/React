import "./Header.scss";

function header({ title }: IHeaderProps) {
  const neonPNG = "../src/images/neon-peace.png";

  return (
    <header className="header">
      <h1>{title}</h1>
      <img src={neonPNG} />
    </header>
  );
}
export default header;

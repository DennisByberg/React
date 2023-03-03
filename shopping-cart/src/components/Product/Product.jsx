import "./Product.css";

const Product = ({ title, author, about }) => {
  return (
    <section className="product">
      <h1 className="product__title">{title}</h1>
      <h2 className="product__author">av {author}</h2>
      <p className="product__about">{about}</p>
      <button className="product__button">Add To Cart</button>
    </section>
  );
};

export default Product;

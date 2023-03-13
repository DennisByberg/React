import "./Product.css";

const Product = ({ title, author, about, addBookToCart }) => {
  return (
    <section className="product">
      <div className="product__border-wrapper">
        <h1 className="product__title">{title}</h1>
        <h2 className="product__author">av {author}</h2>
      </div>
      <p className="product__about">{about}</p>
      <button onClick={() => addBookToCart(title)} className="product__button">
        Add To Cart
      </button>
    </section>
  );
};

export default Product;

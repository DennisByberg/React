import "./Cart.css";

const Cart = () => {
  const productsInCartAmount = 0;
  return (
    <section className="cart">
      <p className="cart__cart-text">Cart</p>
      <p className="cart__products-in-cart">{productsInCartAmount}</p>
    </section>
  );
};

export default Cart;

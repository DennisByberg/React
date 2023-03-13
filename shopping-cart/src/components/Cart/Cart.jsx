import { useState } from "react";
import "./Cart.css";

const Cart = ({ productsInCart }) => {
  const [isVisible, setIsVisible] = useState(false);

  function toggleCart() {
    setIsVisible((prev) => !prev);
  }

  return (
    <section className="cart">
      <p onClick={toggleCart} className="cart__cart-text">
        Cart
      </p>
      <p className="cart__products-in-cart">{productsInCart.length}</p>
      {isVisible && (
        <ul>
          {productsInCart.map((product) => (
            <li> {product} </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Cart;

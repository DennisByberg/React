// Importing useState hook from react library and Cart.css stylesheet
import { useState } from "react";
import "./Cart.css";

// Functional Component named as Cart which accepts productsInCart as props
const Cart = ({ productsInCart }) => {
  // Creating a stateful value named isVisible with initial value of false
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle visibility of cart
  function toggleCart() {
    setIsVisible(!isVisible);
  }

  // JSX code for rendering the cart section on UI
  return (
    <section className="cart">
      {/* Paragraph element that appears as hyperlink opening the cart */}
      <p onClick={toggleCart} className="cart__cart-text">
        Cart
      </p>
      {/* Displaying number of products in cart */}
      <p className="cart__products-in-cart">{productsInCart.length}</p>
      {/* Conditionally displaying product list */}
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

export default Cart; // Exporting Cart component for use in other parts of app

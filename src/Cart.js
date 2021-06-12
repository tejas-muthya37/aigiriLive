import React from "react";
import CartProduct from "./CartProduct";
import "./cart.css";
import { useStateValue } from "./StateProvider.js";
import { getBasketTotal } from "./reducer.js";
import { Link } from "react-router-dom";

function Cart() {
  let localBasket1 = localStorage.getItem("localBasket");

  let localBasket2 = JSON.parse(localBasket1);

  let [{ basket }] = useStateValue(localBasket2);

  return (
    <div className="cart">
      <div className="cart_left">
        {basket.length > 0 && <h3 className="cart_title">MY SHOPPING CART</h3>}

        {basket?.map((item) => (
          <CartProduct
            id={item.id}
            key={basket.indexOf(item)}
            title={item.title2}
            category={item.category}
            price={item.price}
            image={item.image}
            quantity={item.quantity}
            quantityValue={item.quantityValue}
          ></CartProduct>
        ))}
      </div>
      <div className="cart_right">
        {basket.length > 0 && (
          <h4>
            Subtotal ({basket?.length} items) : ₹ {getBasketTotal(basket)}
          </h4>
        )}
        {basket.length > 0 && (
          <div className="checkout_div">
            <Link to="/checkout">
              <button className="cart_button">Proceed to Checkout</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;

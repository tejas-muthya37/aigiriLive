import React from 'react';
import "./cartproduct.css";
import { useStateValue } from "./StateProvider";

function CartProduct(props) {

    const [{ basket }, dispatch] = useStateValue();

    console.log(basket);

    const removeFromBasket = () => {

        dispatch({
          type: "REMOVE_FROM_BASKET",
          id: props.id,
        });
      };

    return (
        <div className="cart_product">
            <div className="cart_product_left">
                <img alt={props.id} src={props.image}></img>
            </div>
            <div className="cart_product_right">
                <p>{props.title}</p>
                <p className="price">₹ {props.price}</p>
                <p>Quantity - {props.quantity}</p>
                <button onClick={removeFromBasket} id="cart_product_button" className="cart_product_button">Remove From Cart</button>
            </div>
        </div>
    )
}

export default CartProduct;

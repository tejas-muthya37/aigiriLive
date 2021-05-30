import React from 'react';
import { Link } from 'react-router-dom';
import "./cartproduct.css";
import { useStateValue } from "./StateProvider.js";

function CartProduct(props) {

    const [{ basket }, dispatch] = useStateValue();

    console.log(basket);

    const removeFromBasket = () => {

        dispatch({
          type: "REMOVE_FROM_BASKET",
          id: props.id,
        });
        let stringBasketC = JSON.stringify(basket);
        localStorage.setItem("localBasket", stringBasketC);
      };

    return (
        <div className="cart_product">
            <div className="cart_product_left">
            <Link to={"/recipe/" + props.id}><img alt={props.id} src={props.image}></img></Link>
            </div>
            <div className="cart_product_right">
                <p className="cart_product_title">{props.title}</p>
                <p className="cart_product_price">₹ {props.price * props.quantity}</p>
                {(props.category === "powder") && <p>Quantity - {props.quantityValue}</p>} 
                {(props.category === "box") && <p>Quantity - {props.quantity}</p>}
                {(props.category === "pack") && <p>Quantity - {props.quantityValue}</p>}
                
                <button onClick={removeFromBasket} id="cart_product_button" className="cart_product_button">Remove</button>
            </div>
        </div>
    )
}

export default CartProduct;

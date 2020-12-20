import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link to={"/recipe/" + props.id}><img alt={props.id} src={props.image}></img></Link>
            </div>
            <div className="cart_product_right">
                <p className="cart_product_title">{props.title}</p>
                <p className="cart_product_price">₹ {props.price * props.quantity}</p>
                {(props.title === "Sambar Powder" || props.title === "Rasam Powder") && <p>Quantity - {props.quantityValue}</p>} 
                {(props.title === "Besan Laddoo" || props.title === "Gulab Jamun") && <p>Quantity - {props.quantity}</p>}
                
                <button onClick={removeFromBasket} id="cart_product_button" className="cart_product_button">Remove From Cart</button>
            </div>
        </div>
    )
}

export default CartProduct;

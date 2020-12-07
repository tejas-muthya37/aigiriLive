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

    let quantityVariable;

    if (props.title === "Sambar Powder" || props.title === "Rasam Powder") {
        if(props.quantity === "0.25") {
            quantityVariable = "250 grams"
        }

        else if (props.quantity === "0.5") {
            quantityVariable = "500 grams"
        }

        else {
            quantityVariable = "1 KG"
        }
    }

    return (
        <div className="cart_product">
            <div className="cart_product_left">
                <img alt={props.id} src={props.image}></img>
            </div>
            <div className="cart_product_right">
                <p>{props.title}</p>
                <p className="cart_product_price">₹ {props.price * props.quantity}</p>
                {(props.title === "Sambar Powder" || props.title === "Rasam Powder") && <p>Quantity - {quantityVariable}</p>} 
                {(props.title === "Besan Laddoo" || props.title === "Gulab Jamun") && <p>Quantity - {props.quantity}</p>}
                
                <button onClick={removeFromBasket} id="cart_product_button" className="cart_product_button">Remove From Cart</button>
            </div>
        </div>
    )
}

export default CartProduct;

import React from 'react';
import CartProduct from "./CartProduct";
import "./cart.css";
import { useStateValue } from "./StateProvider";
import {getBasketTotal} from "./reducer";
import { Link } from "react-router-dom";


function Cart() {

    let [{ basket }] = useStateValue();

    return (
        <div className="cart">
            <div className="cart_left">
                {basket.length === 0 && <h3 id="empty_cart">Your shopping cart is empty.</h3>}

                {basket.length > 0 && <h3 className="cart_title">YOUR SHOPPING CART</h3>}

                {basket?.map((item) => (
                <CartProduct
                id={item.id}
                key={basket.indexOf(item)}
                title={item.title}
                category={item.category}
                price={item.price}
                image={item.image}
                quantity={item.quantity}
                quantityValue={item.quantityValue}
                ></CartProduct>
                ))} 


            </div>
            <div className="cart_right">
                {basket.length > 0 && <h4>Subtotal ({basket?.length} items) : ₹ {getBasketTotal(basket)}</h4>}
                {basket.length > 0 && <div className="checkout_div">
                    <Link to="/checkout"><button className="cart_button">Proceed to Checkout</button></Link>
                </div>}
            </div>
        </div>
    )
}

export default Cart;

import React from 'react';
import { Link } from 'react-router-dom';
import "./empty.css";
// import empty from "./empty_cart.png"

function Empty() {
    return (
        <div className="empty">
            <h4 className="empty_title">Your shopping cart is empty!</h4>
            <img className="empty_img" alt="" src="https://raw.githubusercontent.com/tejas-muthya37/aigiriLive/gh-pages/static/media/empty_cart.8b24ac1c.png" />
            <Link to="/"><button className="empty_btn">Continue Shopping</button></Link>
        </div>
    )
}

export default Empty;

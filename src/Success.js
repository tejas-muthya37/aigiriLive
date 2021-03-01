import React from 'react';
import { Link } from 'react-router-dom';
import "./success.css";
import shiprocket from "./shiprocket.jpg";

function Success() {
    return (
        <div className="success">
            <i className="tick">✓</i>
            <h1>Success</h1> 
            <p><img alt="" src={shiprocket} /> <br /><br /> Your order will be shipped in 4-5 business days.<br /><br />

            We received your purchase request! Check your mail for further details.</p>
            
            <Link to="/"><button className="empty_btn">Continue Shopping</button></Link>

        </div>
    )
}

export default Success

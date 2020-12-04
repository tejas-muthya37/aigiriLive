import React from 'react';
import { Link } from 'react-router-dom';
import "./checkout.css";

function Checkout() {

    return (
        <div className="container contact">

            <h4>Order Now! 😀</h4>

            <form className="text-center" method="post" action="/" encType="text/plain">

                <input type="text" id="defaultContactFormName" className="form-control mb-4" placeholder="Name" />

                <input type="email" id="defaultContactFormEmail" className="form-control mb-4" placeholder="E-mail" />

                <input type="text" id="defaultContactFormAddress" className="form-control mb-4" placeholder="Your Residential Address" />

                <Link to="/"><button className="contact-btn">Place Order</button></Link>

            </form>

        </div>
    );
}

export default Checkout;

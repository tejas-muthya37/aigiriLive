import React from 'react';
import familyimg from "./group-family3.jpg";
import "./about.css";

function About() {
    return (
        <div className="about">

            <img loading="lazy" className="family_img" src="https://raw.githubusercontent.com/tejas-muthya37/aigiriLive/gh-pages/static/media/group-family3.7914e854.jpg" alt=""></img>
            <div className="about_content">
                <p>
                <span className="bold">We are a humble Madhwa Brahmin family based out of Bengaluru. None of our products contain Onion, 
                Garlic or any preservatives. </span><br /><br />
                All our products are prepared in a hygienic and homely environment. All of our family members have stood strong and tested
                negative in these challenging times. We are slowly expanding our menu as we scale up the venture. We highly appreciate
                your support and patience.<br /><br />
                When the lockdown hit us, it forced us to find parallel sources of income to stay prepared for what may come!
                My mother has always been an excellent cook. We setup Aigiri Food Products from the comfort of our home. Since then, people
                have loved the taste of all our products, especially the sweets. We have delivered happiness in the form of homemade food products
                across the world! <br /><br />
                Our experts have penned down their ancestral recipes under the Best Results section of every product. Follow those recipes to yield
                the most authentic Brahmin Delicacies. 
                </p>

                <p id="about_shipping">
                <br />We accept payments through any of the UPI apps, that is Google Pay, Phone Pe and Paytm. We also accept Cash on Delivery.
                    Our products are safely shipped by our shipping partner, ShipRocket that conclude shipping costs based on the State and City.
                    Our international shipping is handled by the Govt. Post Office at a nominal fee.
                </p>

                <p id="refund">
                <br />As of now, we don't encourage cancellations and refunds as we cook everything fresh upon receiving orders. We never cook anything in bulk before receiving orders.
                </p>
            </div>

        </div>
    )
}

export default About;

import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailIcon from '@material-ui/icons/Mail';
import "./footer.css";

function Footer() {
    return (
        <div id="footer" className="footer">

            <div className="footer_left">
                <p>© 2020 AFP - All Rights Reserved</p>
                <p><a href="mailto:tejas.muthya37@gmail.com">aigirifoods@gmail.com</a></p>
                <p>+91 9164187714</p>
            </div>
            <div className="footer_mid">
                <a href="/about">About Us</a>
                <a href="/about/#about_shipping">Payment & Shipping Policy</a>
                <a href="/about/#about_shipping">FAQ</a>
                <a href="/about/#refund">Refund Policy</a>
            </div>
            <div className="footer_right">
            <div className="footer_icons"><a href="https://www.facebook.com/vijay.simha.73"><FacebookIcon fontSize="large" /></a></div>
            <div className="footer_icons"><a href="mailto:tejas.muthya37@gmail.com"><MailIcon fontSize="large" /></a></div>
            <div className="footer_icons"><a href="https://www.instagram.com/anupamaraghoo/"><InstagramIcon fontSize="large" /></a></div>
            </div>
            
            
        </div>
    )
}

export default Footer

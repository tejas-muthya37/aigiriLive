import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailIcon from '@material-ui/icons/Mail';
import "./footer.css";

function Footer() {
    return (
        <div id="footer" className="footer">

            {/* ********* CONTACT NUMBER **********/}

            <div className="footer_left">
                <p>© {new Date().getFullYear()} MPK - All Rights Reserved</p>
                <p><a href="mailto:sriharifoods@gmail.com">madhwapaaka@gmail.com</a></p>
                <p>+91 9980284000</p>
            </div>
            <div className="footer_mid">
                <a href="/about">About Us</a>
                <a href="/about/#about_shipping">Payment & Shipping Policy</a>
                <a href="/about/#about_shipping">FAQ</a>
                <a href="/about/#refund">Refund Policy</a>
            </div>
            <div className="footer_right">
            <div className="footer_icons"><a href="https://www.facebook.com/nayana.vadiraj"><FacebookIcon fontSize="large" /></a></div>
            {/* MAIL ID */}
            <div className="footer_icons"><a href="mailto:madhwapaaka@gmail.com"><MailIcon fontSize="large" /></a></div>
            <div className="footer_icons"><a href="https://www.instagram.com/nayanavadiraj/"><InstagramIcon fontSize="large" /></a></div>
            </div>
            
            
        </div>
    )
}

export default Footer

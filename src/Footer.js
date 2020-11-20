import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import CallRoundedIcon from '@material-ui/icons/CallRounded';
import InstagramIcon from '@material-ui/icons/Instagram';
import "./footer.css";

function Footer() {
    return (
        <div className="footer">

            <div className="footer_left">
                <p>© 2020 AFP - All Rights Reserved</p>
            </div>
            <div className="footer_mid">
                <a href="/">About Us</a>
                <a href="/">Payment & Shipping Policy</a>
                <a href="/">Contact</a>
                <a href="/">FAQ</a>
                <a href="/">Refund Policy</a>
            </div>
            <div className="footer_right">
            <div className="footer_icons"><FacebookIcon fontSize="large" /></div>
            <div className="footer_icons"><CallRoundedIcon fontSize="large" /></div>
            <div className="footer_icons"><InstagramIcon fontSize="large" /></div>
            </div>
            
            
        </div>
    )
}

export default Footer

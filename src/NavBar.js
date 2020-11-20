import React from 'react';
import "./navbar.css";
import logo from "./aigiri_logo_cropped.png";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";


function NavBar() {

    function handleClick() {

        const burger = document.querySelector(".burger");
        const nav = document.querySelector(".nav-links");
        const links = document.querySelectorAll(".nav-links li");

        nav.classList.toggle("navSlide");
                
        links.forEach((link, index) => {
                
            if(link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.3}s`;
            }
                    
            });
                
            burger.classList.toggle("toggle");
    }

    return (

        <div className="header">
            <nav>
                <div className="logo">
                    <a href="/"><img alt="" src={logo}></img></a>
                </div>
                <ul id="nav-links" className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/">Contact</a></li>
                <li><a href="/">Our Products</a></li>

                </ul>

                <div className="nav-basket">
                <ShoppingBasketIcon />
                <span className="nav-basketCount">
                0
                </span>
                </div>

                <div onClick={handleClick} id="burger" className="burger">
                <div className="line1">

                </div>
                <div className="line2">

                </div>
                <div className="line3">

                </div>
                </div>
                
            </nav>
        </div>

    
    )
}

export default NavBar;

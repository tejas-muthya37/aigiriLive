import React from 'react';
import "./navbar.css";
import logo from "./aigiri_logo_cropped.png";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";


function NavBar() {

    const [{ basket }] = useStateValue();

    function handleClick() {

        const burger = document.querySelector(".burger");
        const nav = document.querySelector(".nav-links");
        const links = document.querySelectorAll(".nav-links li");

        nav.classList.toggle("navSlide");
                
        links.forEach((link, index) => {
                
            if(link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.25s ease forwards ${index/7 + 0.1}s`;
            }
                    
            });
                
            burger.classList.toggle("toggle");
    }

    const scrollTop = () => {
        window.scroll({
          top: 0, 
          left: 0, 
        });
      }

    return (

        <div className="header">
            <nav>
                <div className="logo" onClick={scrollTop}>
                    <Link to="/"><img alt="" src={logo}></img></Link>
                </div>
                <ul id="nav-links" className="nav-links">
                <li onClick={scrollTop}><Link to="/">Home</Link></li>
                <li onClick={scrollTop}><a href="/about">About Us</a></li>
                <li onClick={scrollTop}><Link to="/">Contact</Link></li>
                <li onClick={scrollTop}><Link to="/">Our Products</Link></li>

                </ul>

                <div className="nav-basket">
                <div onClick={scrollTop}><Link to="/cart"><ShoppingCartIcon /></Link></div>
                <span className="nav-basketCount">
                {basket?.length}
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

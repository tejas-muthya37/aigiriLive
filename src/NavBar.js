import React from 'react';
import "./navbar.css";
import logo from "./aigiri_logo_cropped.png";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider.js";


function NavBar() {

    let newBasket = localStorage.getItem("localBasket");
    let newBasket1 = JSON.parse(newBasket);

    let [{ basket }] = useStateValue(newBasket1);
    
    function handleClick() {

        const burger = document.querySelector(".burger");
        const nav = document.querySelector(".nav-links");
        const links = document.querySelectorAll(".nav-links li");

        nav.classList.toggle("navSlide");
                
        links.forEach((link, index) => {
                
            if(link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.25s ease forwards ${index/7}s`;
            }
                    
            });
                
            burger.classList.toggle("toggle");
    }

    function scrollTop(event) {
        
          const burger = document.querySelector(".burger");
          const nav = document.querySelector(".nav-links");
          const links = document.querySelectorAll(".nav-links li");
  
          
            if(burger.classList.contains("toggle")) {
                nav.classList.toggle("navSlide");
                  
                links.forEach((link, index) => {
                        
                    if(link.style.animation) {
                        link.style.animation = "";
                    } else {
                        link.style.animation = `navLinkFade 0.25s ease forwards ${index/7}s`;
                    }
                            
                    });
                        
                    burger.classList.toggle("toggle");
            }
         

              window.scroll({
                top: 0, 
                left: 0, 
              });
              event.preventDefault();
    }

    function scrollBottom() {
          const burger = document.querySelector(".burger");
          const nav = document.querySelector(".nav-links");
          const links = document.querySelectorAll(".nav-links li");

          if(burger.classList.contains("toggle")) {
            nav.classList.toggle("navSlide");
                  
            links.forEach((link, index) => {
                    
                if(link.style.animation) {
                    link.style.animation = "";
                } else {
                    link.style.animation = `navLinkFade 0.25s ease forwards ${index/7}s`;
                }
                        
                });
                    
                burger.classList.toggle("toggle");
            }
  
          
              window.scrollTo(0,document.body.scrollHeight);
    }

    function scrollTop1() {
        window.scroll({
            top: 0, 
            left: 0, 
          });
    }

    return (

        <div className="header">
            <nav>
                <div className="logo" onClick={scrollTop1}>
                    <Link to="/"><img alt="" src="https://raw.githubusercontent.com/tejas-muthya37/aigiriLive/gh-pages/static/media/aigiri_logo_cropped.ed88c8bd.png"></img></Link>
                </div>
                
                <ul id="nav-links" className="nav-links">
                <li onMouseDown={scrollTop}><Link to="/">Home</Link></li>
                <li onMouseDown={scrollTop}><Link to="/about">About Us</Link></li>
                <li onMouseDown={scrollBottom}><Link to="/about">Contact</Link></li>
                <li onMouseDown={scrollTop}><Link to="/products">Our Products</Link></li>

                </ul>

                <div className="nav-basket">
                <div><Link onClick={scrollTop1} to="/cart"><ShoppingCartIcon /></Link></div>
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

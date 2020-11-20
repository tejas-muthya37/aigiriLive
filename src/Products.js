import React from 'react';
import "./products.css";
import Product from "./Product";

function Products() {

    // let productsArray = [{id:"1",
    // title:"Sambar Powder - 500gms",
    // image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",
    // price:"449"}, {id:"2",
    // title:"Rasam Powder - 100gms",
    // image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",
    // price:"75"}, {id:"3",
    // title:"Bisibele Bath Powder",
    // image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",
    // price:"299"}, {id:"4",
    // title:"Gulab Jamun",
    // image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",
    // price:"170"}, {id:"5",
    // title:"Sambar Powder - 500gms",
    // image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",
    // price:"449"}, {id:"6",
    // title:"Rasam Powder - 100gms",
    // image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",
    // price:"75"}, {id:"7",
    // title:"Bisibele Bath Powder",
    // image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",
    // price:"299"}, {id:"8",
    // title:"Gulab Jamun",
    // image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",
    // price:"170"}, {id:"9",
    // title:"Sambar Powder - 500gms",
    // image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",
    // price:"449"}, {id:"10",
    // title:"Rasam Powder - 100gms",
    // image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",
    // price:"75"}, {id:"11",
    // title:"Bisibele Bath Powder",
    // image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",
    // price:"299"}, {id:"12",
    // title:"Gulab Jamun",
    // image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",
    // price:"170"}, {id:"13",
    // title:"Sambar Powder - 500gms",
    // image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",
    // price:"449"}, {id:"14",
    // title:"Rasam Powder - 100gms",
    // image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",
    // price:"75"}, {id:"15",
    // title:"Bisibele Bath Powder",
    // image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",
    // price:"299"}, {id:"16",
    // title:"Gulab Jamun",
    // image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",
    // price:"170"}]

    function handleClick(event) {
      console.log(event.target.alt);
      event.preventDefault()
    }

    return (
        <div className="products">

        <h3 className="products_title">Our Products</h3>

        <div className="products_row">
        <div onMouseDown={handleClick} id="1" className="row_product"><Product
            id="1" 
            title="Sambar Powder - 500gms"
            image="https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg"
            price="449"
          /></div>
        <div id="2" className="row_product"><Product
            id="2"
            title="Rasam Powder - 100gms"
            image="https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg"
            price="75"
          /></div>
        <div id="3" className="row_product"><Product
            id="3"
            title="Bisibele Bath Powder"
            image="https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg"
            price="299"
          /></div>
        <div id="4" className="row_product"><Product
            id="4"
            title="Gulab Jamun"
            image="https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg"
            price="170"
          /></div>
        </div>
        <div className="products_row">
        <div id="5" className="row_product"><Product
            id="5"
            title="Sambar Powder - 500gms"
            image="https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg"
            price="449"
          /></div>
        <div id="6" className="row_product"><Product
            id="6"
            title="Rasam Powder - 100gms"
            image="https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg"
            price="75"
          /></div>
        <div id="7" className="row_product"><Product
            id="7"
            title="Bisibele Bath Powder"
            image="https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg"
            price="299"
          /></div>
        <div id="8" className="row_product"><Product
            id="8"
            title="Gulab Jamun"
            image="https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg"
            price="170"
          /></div>
        </div>
        <div className="products_row">
        <div id="9" className="row_product"><Product
            id="9"
            title="Sambar Powder - 500gms"
            image="https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg"
            price="449"
          /></div>
        <div id="10" className="row_product"><Product
            id="10"
            title="Rasam Powder - 100gms"
            image="https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg"
            price="75"
          /></div>
        <div id="11" className="row_product"><Product
            id="11"
            title="Bisibele Bath Powder"
            image="https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg"
            price="299"
          /></div>
        <div id="12" className="row_product"><Product
            id="12"
            title="Gulab Jamun"
            image="https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg"
            price="170"
          /></div>
        </div>
        <div className="products_row">
        <div id="13" className="row_product"><Product
            id="13"
            title="Sambar Powder - 500gms"
            image="https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg"
            price="449"
          /></div>
        <div id="14" className="row_product"><Product
            id="14"
            title="Rasam Powder - 100gms"
            image="https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg"
            price="75"
          /></div>
        <div id="15" className="row_product"><Product
            id="15"
            title="Bisibele Bath Powder"
            image="https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg"
            price="299"
          /></div>
        <div id="16" className="row_product"><Product
            id="16"
            title="Gulab Jamun"
            image="https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg"
            price="170"
          /></div>
        </div>



            
        </div>
    )
}

export default Products;

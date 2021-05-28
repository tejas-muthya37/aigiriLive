import React from 'react';
import Product from "./Product";
import "./bestseller.css";


function BestSeller() {
    return (
        <div className="best_seller">
            <h3 className="best_seller_title">BEST SELLERS</h3>
            <div className="best_seller_list">

        <div className="best_seller_products">
        <Product
            id="4"
            title="ಚಕ್ಕುಲಿ | Chakkuli"
            category= "box"
            image="https://m.media-amazon.com/images/I/51oJb+Kz2TS._AC_UL480_QL65_.jpg"
            price="36"
          />
          </div>

          <div className="best_seller_products">
          <Product
            id="2"
            title="ಪುರಿ ಉಂಡೆ | Puri Unde"
            category= "box"
            image="https://m.media-amazon.com/images/I/41hzY651KAL._AC_UL480_QL65_.jpg"
            price="78"
            
          />
          </div>

          <div className="best_seller_products">
          <Product
            id="10"
            title="ತೆಂಗೊಳಲು | Tengolu"
            category= "box"
            image="https://m.media-amazon.com/images/I/71+fPkLGf5L._AC_UL480_QL65_.jpg"
            price="60"
          />
          </div>
            
          <div className="best_seller_products">
          <Product
            id="8"
            title="ನಿಪ್ಪಟ್ಟು | Nippattu"
            category= "box"
            image="https://m.media-amazon.com/images/I/61IJJ+JrXXL._AC_UL480_QL65_.jpg"
            price="36"
          />
          </div>

          </div>
        </div>
    )
}

export default BestSeller;

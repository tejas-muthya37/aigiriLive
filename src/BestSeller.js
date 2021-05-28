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

            id="1"
            title="ಬೇಸನ್ ಉಂಡೆ | Besan Laddoo"
            category= "box"
            image="https://cdn.shopify.com/s/files/1/0398/6545/0645/products/69724367_2483046198423304_3890100649064398848_o-removebg-preview_1024x1024.png?v=1593273118"
            price="72"
            
          />
          </div>

          <div className="best_seller_products">
          <Product
            id="9"
            title="ಮಂಡಕ್ಕಿ | Mandakki"
            category= "powder"
            image="https://m.media-amazon.com/images/I/81kUEe8MpxL._AC_UL480_QL65_.jpg"
            price="50"
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

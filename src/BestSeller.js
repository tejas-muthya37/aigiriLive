import React from 'react';
import Product from "./Product";
import "./bestseller.css"

function BestSeller() {
    return (
        <div className="best_seller">
            <h3 className="best_seller_title">Best Sellers</h3>
            <div className="best_seller_list">

            <div className="best_seller_products">
            <Product
            id="123"
            title="Sambar Powder - 500gms"
            image="https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg"
            price="449"
          />
          </div>

          <div className="best_seller_products">
          <Product
            id="456"
            title="Rasam Powder - 100gms"
            image="https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg"
            price="75"
          />
          </div>

          <div className="best_seller_products">
          <Product
            id="456"
            title="Bisibele Bath Powder"
            image="https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg"
            price="299"
          />
          </div>
            
          <div className="best_seller_products">
            <Product
            id="456"
            title="Gulab Jamun"
            image="https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg"
            price="170"
          />   
          </div>

            </div>
                 

        
            
            
        </div>
    )
}

export default BestSeller

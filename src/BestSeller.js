import React from 'react';
import Product from "./Product";
import "./bestseller.css"

function BestSeller() {
    return (
        <div className="best_seller">
            <h3 className="best_seller_title">BEST SELLERS</h3>
            <div className="best_seller_list">

            <div className="best_seller_products">
            <Product
            id="1"
            title="Sambar Powder"
            image="https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg"
            price="449"
          />
          </div>

          <div className="best_seller_products">
          <Product
            id="2"
            title="Rasam Powder"
            image="https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg"
            price="79"
          />
          </div>

          <div className="best_seller_products">
          <Product
            id="3"
            title="Besan Laddoo"
            image="https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg"
            price="299"
          />
          </div>
            
          <div className="best_seller_products">
            <Product
            id="4"
            title="Gulab Jamun"
            image="https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg"
            price="169"
          />   
          </div>

            </div>
                 

        
            
            
        </div>
    )
}

export default BestSeller

import React from 'react';
import Product from "./Product";
import "./bestseller.css";
import besanLaddoo from "./besan_laddoo.png";


function BestSeller() {
    return (
        <div className="best_seller">
            <h3 className="best_seller_title">BEST SELLERS</h3>
            <div className="best_seller_list">

        <div className="best_seller_products">
            <Product
            id="15"
            title="Peanut Chikki"
            image="https://m.media-amazon.com/images/I/81mOejacmBL._AC_UL480_QL65_.jpg"
            price="450"
          />
          </div>

          <div className="best_seller_products">
            <Product
            id="11"
            title="Besan Laddoo"
            image={besanLaddoo}
            price="300"
            />
          </div>

          <div className="best_seller_products">
            <Product
            id="2"
            title="Rasam Powder"
            image="https://m.media-amazon.com/images/I/61SDjKCyjhL._AC_UL480_QL65_.jpg"
            price="80"
            />
          </div>
            
          <div className="best_seller_products">
            <Product
            id="1"
            title="Sambar Powder"
            image="https://m.media-amazon.com/images/I/61DqQGdVUKL._AC_UL480_QL65_.jpg"
            price="450"
            />   
          </div>

          </div>
        </div>
    )
}

export default BestSeller;

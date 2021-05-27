import React from 'react';
import "./products.css";
import Product from "./Product";


function Products() {
  
    return (
        <div id="products" className="products">

        <h3 className="products_title">OUR PRODUCTS</h3>

        <div className="products_row">
        <div id="1" className="row_product"><Product

            id="1"
            title="ಬೇಸನ್ ಉಂಡೆ"
            category= "box"
            image="https://m.media-amazon.com/images/I/91d11fTwZBL._AC_UL480_QL65_.jpg"
            price="72"
            
          /></div>
        <div id="2" className="row_product"><Product
            id="2"
            title="ಪುರಿ ಉಂಡೆ"
            category= "box"
            image="https://m.media-amazon.com/images/I/41hzY651KAL._AC_UL480_QL65_.jpg"
            price="78"
            
          /></div>
        <div id="3" className="row_product"><Product
            id="3"
            title="ಚೂಡಾ ಅವಲಕ್ಕಿ"
            category= "powder"
            image="https://m.media-amazon.com/images/I/81uhr5oRiXL._AC_UL480_QL65_.jpg"
            price="250"
          /></div>
        <div id="4" className="row_product"><Product
            id="4"
            title="ಚಕ್ಕುಲಿ"
            category= "box"
            image="https://m.media-amazon.com/images/I/51oJb+Kz2TS._AC_UL480_QL65_.jpg"
            price="36"
          /></div>
        </div>
        <div className="products_row">
        <div id="5" className="row_product"><Product
            id="5"
            title="ಬೆಣ್ಣೆ ಮುರುಕ್ಕು"
            category= "powder"
            image="https://m.media-amazon.com/images/I/61Bhr+kmuUL._AC_UL480_QL65_.jpg"
            price="300"
          /></div>
        <div id="6" className="row_product"><Product
            id="6"
            title="ಅನಾರಸ (ಕಜ್ಜಾಯ)"
            category= "box"
            image="https://m.media-amazon.com/images/I/61+rTcDCIcL._AC_UL480_QL65_.jpg"
            price="60"
          /></div>
        <div id="7" className="row_product"><Product
            id="7"
            title="ಕರ್ಜಿಕಾಯಿ"
            category= "box"
            image="https://m.media-amazon.com/images/I/61VchkEyO2L._AC_UL480_QL65_.jpg"
            price="60"
          /></div>
        <div id="8" className="row_product"><Product
            id="8"
            title="ನಿಪ್ಪಟ್ಟು"
            category= "box"
            image="https://m.media-amazon.com/images/I/61IJJ+JrXXL._AC_UL480_QL65_.jpg"
            price="36"
          /></div>
        </div>
        <div className="products_row">
        <div id="9" className="row_product"><Product
            id="9"
            title="ಮಂಡಕ್ಕಿ"
            category= "powder"
            image="https://m.media-amazon.com/images/I/81kUEe8MpxL._AC_UL480_QL65_.jpg"
            price="50"
          /></div>
        <div id="10" className="row_product"><Product
            id="10"
            title="ತೆಂಗೊಳಲು"
            category= "box"
            image="https://m.media-amazon.com/images/I/71+fPkLGf5L._AC_UL480_QL65_.jpg"
            price="60"
          /></div>
        <div id="11" className="row_product"><Product
            id="11"
            title="ಹೋಳಿಗೆ"
            category= "box"
            image="https://images-na.ssl-images-amazon.com/images/I/517KTN9guqL.jpg"
            price="96"
          /></div>
        <div id="12" className="row_product"><Product
            id="12"
            title="ಕಾಯಿ ಹೋಳಿಗೆ"
            category= "box"
            image="https://images-na.ssl-images-amazon.com/images/I/51aDku760fS._SL1100_.jpg"
            price="108"
          /></div>
        </div>
        <div className="products_row">
        <div id="13" className="row_product"><Product
            id="13"
            title="ಸಕ್ಕರೆ ಹೋಳಿಗೆ"
            category= "box"
            image="https://images-na.ssl-images-amazon.com/images/I/61-OsjuJACL._SL1000_.jpg"
            price="120"
          /></div>
        <div id="14" className="row_product"><Product
            id="14"
            title="ಸಾರಿನ ಪುಡಿ"
            category= "powder"
            image="https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg"
            price="600"
          /></div>
        <div id="15" className="row_product"><Product
            id="15"
            title="ಹುಳಿ ಪುಡಿ"
            category= "powder"
            image="https://m.media-amazon.com/images/I/51I4NPKCehL._AC_UL480_QL65_.jpg"
            price="600"
          /></div>
          <div id="16" className="row_product"><Product
            id="16"
            title="ಮೆಂತ್ಯದ ಹಿಟ್ಟು"
            category= "powder"
            image="https://m.media-amazon.com/images/I/61bcVzQJgBS._AC_UL480_QL65_.jpg"
            price="400"
          /></div>
        </div>
        <div className="products_row">
        <div id="17" className="row_product"><Product
            id="17"
            title="ಚಟ್ನಿ ಪುಡಿ"
            category= "powder"
            image="https://m.media-amazon.com/images/I/81FRjV0WHrL._AC_UL480_QL65_.jpg"
            price="400"
          /></div>
        <div id="18" className="row_product"><Product
            id="18"
            title="ಶೇಂಗಾ ಚಟ್ನಿ ಪುಡಿ"
            category= "powder"
            image="https://m.media-amazon.com/images/I/710BDfrPbyS._AC_UL480_QL65_.jpg"
            price="400"
          /></div>
        <div id="19" className="row_product"><Product
            id="19"
            title="ಬಿಸಿ ಬೇಳೆ ಬಾತ್ ಪುಡಿ"
            category= "powder"
            image="https://m.media-amazon.com/images/I/81iAuh4RJBL._AC_UL480_QL65_.jpg"
            price="600"
          /></div>
          <div id="20" className="row_product"><Product
            id="20"
            title="ವಾಂಗಿ ಬಾತ್ ಪುಡಿ"
            category= "powder"
            image="https://m.media-amazon.com/images/I/71yvH0MUlnL._AC_UL480_QL65_.jpg"
            price="600"
          /></div>
        </div>
        <div className="products_row">
        <div id="21" className="row_product"><Product
            id="21"
            title="ಗೊಜ್ಜಿನ ಪುಡಿ"
            category= "powder"
            image="https://m.media-amazon.com/images/I/716ogHhwx-L._AC_UL480_QL65_.jpg"
            price="600"
          /></div>
        <div id="22" className="row_product"><Product
            id="22"
            title="ಪುಳಿಯೋಗರೆ ಗೊಜ್ಜು"
            category= "powder"
            image="https://m.media-amazon.com/images/I/81btOJEEwNL._AC_UL480_QL65_.jpg"
            price="400"
          /></div>
        </div>
      </div>
    )
}

export default Products;

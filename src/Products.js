import React from 'react';
import "./products.css";
import Product from "./Product";
import besanLaddoo from "./besan_laddoo.png";


function Products() {
  
    return (
        <div id="products" className="products">

        <h3 className="products_title">OUR PRODUCTS</h3>

        <div className="products_row">
        <div id="1" className="row_product"><Product

            id="1"
            title="Sambar Powder"
            category= "powder"
            image="https://m.media-amazon.com/images/I/61DqQGdVUKL._AC_UL480_QL65_.jpg"
            price="450"
            
          /></div>
        <div id="2" className="row_product"><Product
            id="2"
            title="Rasam Powder"
            category= "powder"
            image="https://m.media-amazon.com/images/I/61SDjKCyjhL._AC_UL480_QL65_.jpg"
            price="80"
            
          /></div>
        <div id="3" className="row_product"><Product
            id="3"
            title="Pepper Rasam Powder"
            category= "powder"
            image="https://m.media-amazon.com/images/I/81QbAuqk72L._AC_UL480_QL65_.jpg"
            price="300"
          /></div>
        <div id="4" className="row_product"><Product
            id="4"
            title="Hurigadale Chutney Pudi"
            category= "powder"
            image="https://m.media-amazon.com/images/I/81ObWgx8IDL._AC_UL480_QL65_.jpg"
            price="170"
          /></div>
        </div>
        <div className="products_row">
        <div id="5" className="row_product"><Product
            id="5"
            title="Kadlebele Chutney Pudi"
            category= "powder"
            image="https://m.media-amazon.com/images/I/71nYAa2fG6L._AC_UL480_QL65_.jpg"
            price="450"
          /></div>
        <div id="6" className="row_product"><Product
            id="6"
            title="Uddinabele Chutney Pudi"
            category= "powder"
            image="https://m.media-amazon.com/images/I/61pkVSKzpmL._AC_UL480_QL65_.jpg"
            price="80"
          /></div>
        <div id="7" className="row_product"><Product
            id="7"
            title="Karibevu Chutney Pudi"
            category= "powder"
            image="https://m.media-amazon.com/images/I/716Y1iHLnIL._AC_UL480_QL65_.jpg"
            price="300"
          /></div>
        <div id="8" className="row_product"><Product
            id="8"
            title="Bisibele Baath Powder"
            category= "powder"
            image="https://m.media-amazon.com/images/I/71pewF+nS8L._AC_UL480_QL65_.jpg"
            price="170"
          /></div>
        </div>
        <div className="products_row">
        <div id="9" className="row_product"><Product
            id="9"
            title="Vangibaath Powder"
            category= "powder"
            image="https://m.media-amazon.com/images/I/71yvH0MUlnL._AC_UL480_QL65_.jpg"
            price="450"
          /></div>
        <div id="10" className="row_product"><Product
            id="10"
            title="Menthyada Hittu Powder"
            category= "powder"
            image="https://m.media-amazon.com/images/I/71v04gBzIOL._AC_UL480_QL65_.jpg"
            price="80"
          /></div>
        <div id="11" className="row_product"><Product
            id="11"
            title="Besan Laddoo"
            category= "box"
            image="https://raw.githubusercontent.com/tejas-muthya37/aigiriLive/gh-pages/static/media/besan_laddoo.0ad2fe6e.png"
            price="300"
          /></div>
        <div id="12" className="row_product"><Product
            id="12"
            title="Puliyogare Gojju"
            category= "box"
            image="https://m.media-amazon.com/images/I/81btOJEEwNL._AC_UL480_QL65_.jpg"
            price="170"
          /></div>
        </div>
        <div className="products_row">
        <div id="13" className="row_product"><Product
            id="13"
            title="Kuttida Avalakki"
            category= "powder"
            image="https://m.media-amazon.com/images/I/91TLON894OL._AC_UL480_QL65_.jpg"
            price="450"
          /></div>
        <div id="14" className="row_product"><Product
            id="14"
            title="Kashaaya Powder"
            category= "powder"
            image="https://m.media-amazon.com/images/I/81ZhNIV7muL._AC_UL480_QL65_.jpg"
            price="80"
          /></div>
        <div id="15" className="row_product"><Product
            id="15"
            title="Peanut Chikki"
            category= "box"
            image="https://m.media-amazon.com/images/I/81mOejacmBL._AC_UL480_QL65_.jpg"
            price="300"
          /></div>
        </div>
      </div>
    )
}

export default Products;

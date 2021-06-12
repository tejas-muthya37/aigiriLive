import React from "react";
import "./products.css";
import Product from "./Product";
import rasam from "./rasam_powder.jpg";
import tengol from "./tengol.png";
import vangi from "./vangi_powder.png";
import methi from "./methi_powder.png";
import pchutney from "./pchutney_powder.png";
import chutney from "./chutney_powder.png";
import bisi from "./bisi_powder.png";
import mandakki from "./mandakki_puri.png";
import kayi_holige from "./kayi_holige.png";
import sakkare_holige from "./sakkare_holige.png";
import puliyogare from "./puliyogare_gojju.png";

function Products() {
  return (
    <div id="products" className="products">
      <h3 className="products_title">OUR PRODUCTS</h3>

      <div className="products_row">
        <div id="1" className="row_product">
          <Product
            id="1"
            title="ಬೇಸನ್ ಉಂಡೆ | Besan Laddoo"
            category="box"
            image="https://cdn.shopify.com/s/files/1/0398/6545/0645/products/69724367_2483046198423304_3890100649064398848_o-removebg-preview_1024x1024.png?v=1593273118"
            price="90"
          />
        </div>
        <div id="2" className="row_product">
          <Product
            id="2"
            title="ಪುರಿ ಉಂಡೆ | Puri Unde"
            category="box"
            image="https://m.media-amazon.com/images/I/41hzY651KAL._AC_UL480_QL65_.jpg"
            price="96"
          />
        </div>

        <div id="5" className="row_product">
          <Product
            id="5"
            title="ಬೆಣ್ಣೆ ಮುರುಕ್ಕು | Benne Murukku"
            category="powder"
            image="https://m.media-amazon.com/images/I/61Bhr+kmuUL._AC_UL480_QL65_.jpg"
            price="325"
          />
        </div>
        <div id="7" className="row_product">
          <Product
            id="7"
            title="ಕಡುಬು | Kadubu"
            category="box"
            image="https://cdn.shopify.com/s/files/1/0398/6545/0645/products/7-13-removebg-preview_1024x1024.png?v=1593120521"
            price="72"
          />
        </div>
      </div>
      <div className="products_row">
        <div id="6" className="row_product">
          <Product
            id="6"
            title="ಕಜ್ಜಾಯ | Kajjaya"
            category="box"
            image="https://cdn.shopify.com/s/files/1/0398/6545/0645/products/4-12-removebg-preview_1024x1024.png?v=1593271672"
            price="72"
          />
        </div>

        <div id="4" className="row_product">
          <Product
            id="4"
            title="ಚಕ್ಕುಲಿ | Chakkuli"
            category="box"
            image="https://m.media-amazon.com/images/I/51oJb+Kz2TS._AC_UL480_QL65_.jpg"
            price="48"
          />
        </div>
        <div id="3" className="row_product">
          <Product
            id="3"
            title="ಚೂಡಾ ಅವಲಕ್ಕಿ | Chivda"
            category="powder"
            image="https://krushikendra.com/image/cache/catalog/Homemade%20food/farali-poha2-800x800.png"
            price="280"
          />
        </div>
        <div id="23" className="row_product">
          <Product
            id="23"
            title="ಚೂಡಾ ಅವಲಕ್ಕಿ | Chivda (With Garlic)"
            category="powder"
            image="https://krushikendra.com/image/cache/catalog/Homemade%20food/farali-poha2-800x800.png"
            price="280"
          />
        </div>
      </div>
      <div className="products_row">
        <div id="9" className="row_product">
          <Product
            id="9"
            title="ಮಂಡಕ್ಕಿ | Mandakki"
            category="pack"
            image={mandakki}
            price="65"
          />
        </div>
        <div id="24" className="row_product">
          <Product
            id="24"
            title="ಮಂಡಕ್ಕಿ | Mandakki (With Garlic)"
            category="pack"
            image={mandakki}
            price="50"
          />
        </div>

        <div id="13" className="row_product">
          <Product
            id="13"
            title="ಸಕ್ಕರೆ ಹೋಳಿಗೆ | Sugar Holige"
            category="box"
            image={sakkare_holige}
            price="132"
          />
        </div>
        <div id="12" className="row_product">
          <Product
            id="12"
            title="ಕಾಯಿ ಹೋಳಿಗೆ | Coconut Holige"
            category="box"
            image={kayi_holige}
            price="120"
          />
        </div>
      </div>
      <div className="products_row">
        <div id="17" className="row_product">
          <Product
            id="17"
            title="ಚಟ್ನಿ ಪುಡಿ | Chutney Powder"
            category="powder"
            image={chutney}
            price="430"
          />
        </div>
        <div id="14" className="row_product">
          <Product
            id="14"
            title="ಸಾರಿನ ಪುಡಿ | Rasam Powder"
            category="powder"
            image={rasam}
            price="630"
          />
        </div>
        <div id="15" className="row_product">
          <Product
            id="15"
            title="ಹುಳಿ ಪುಡಿ | Sambar Powder"
            category="powder"
            image="https://m.media-amazon.com/images/I/51I4NPKCehL._AC_UL480_QL65_.jpg"
            price="630"
          />
        </div>
        <div id="22" className="row_product">
          <Product
            id="22"
            title="ಪುಳಿಯೋಗರೆ ಗೊಜ್ಜು | Puliyogare Mix"
            category="powder"
            image={puliyogare}
            price="430"
          />
        </div>
      </div>
      <div className="products_row">
        <div id="18" className="row_product">
          <Product
            id="18"
            title="ಶೇಂಗಾ ಚಟ್ನಿ ಪುಡಿ | Peanut Chutney Powder"
            category="powder"
            image={pchutney}
            price="430"
          />
        </div>
        <div id="25" className="row_product">
          <Product
            id="25"
            title="ಶೇಂಗಾ ಚಟ್ನಿ ಪುಡಿ | Peanut Chutney Powder (With Garlic)"
            category="powder"
            image={pchutney}
            price="430"
          />
        </div>

        <div id="19" className="row_product">
          <Product
            id="19"
            title="ಬಿಸಿ ಬೇಳೆ ಬಾತ್ ಪುಡಿ | Bisi Bele Bath Powder"
            category="powder"
            image={bisi}
            price="630"
          />
        </div>
        <div id="20" className="row_product">
          <Product
            id="20"
            title="ವಾಂಗಿ ಬಾತ್ ಪುಡಿ | Vangi Bath Powder"
            category="powder"
            image={vangi}
            price="630"
          />
        </div>
      </div>
      <div className="products_row">
        <div id="21" className="row_product">
          <Product
            id="21"
            title="ಗೊಜ್ಜಿನ ಪುಡಿ | Gojju Powder"
            category="powder"
            image={rasam}
            price="630"
          />
        </div>

        <div id="10" className="row_product">
          <Product
            id="10"
            title="ತೆಂಗೊಳಲು | Tengolu"
            category="box"
            image={tengol}
            price="72"
          />
        </div>
        <div id="8" className="row_product">
          <Product
            id="8"
            title="ನಿಪ್ಪಟ್ಟು | Nippattu"
            category="box"
            image="https://m.media-amazon.com/images/I/61IJJ+JrXXL._AC_UL480_QL65_.jpg"
            price="48"
          />
        </div>
        <div id="16" className="row_product">
          <Product
            id="16"
            title="ಮೆಂತ್ಯದ ಹಿಟ್ಟು | Menthya Powder"
            category="powder"
            image={methi}
            price="430"
          />
        </div>
      </div>
    </div>
  );
}

export default Products;

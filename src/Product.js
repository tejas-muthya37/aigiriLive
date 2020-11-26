import React from 'react';
import "./product.css";

function Product(props) {
    return (
        <div className="product">
          <div className="product_info">
            <p>{props.title}</p>
            <p className="product_price">
              <small>₹</small>
              <strong>{props.price}</strong>
            </p>
    
            <div className="product_rating">
            </div>
          </div>
          <a href= {"/recipe/" + props.id} ><img alt={props.id} src={props.image}></img></a>
          <button>Add to Cart</button>
        </div>
      );
}

export default Product;

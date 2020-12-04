import React from 'react';
import "./product.css";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

function Product(props) {
  const [{ basket }, dispatch] = useStateValue();

  console.log(basket);

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        quantity: 1
      },
    });
  };

  const scrollTop = () => {
    window.scroll({
      top: 0, 
      left: 0, 
    });
  }

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
          <div onClick={scrollTop}>
            <Link to={"/recipe/" + props.id}><img alt={props.id} src={props.image}></img></Link>
          </div>
          <button onClick={addToBasket}>Buy Now</button>
        </div>
      );
}

export default Product;

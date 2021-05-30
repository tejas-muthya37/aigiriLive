import React from 'react';
import "./product.css";
// import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

function Product(props) {
  // const [{ basket }, dispatch] = useStateValue();

  // console.log(basket);

  // const addToBasket = () => {
  //   // dispatch the item into the data layer
  //   dispatch({
  //     type: "ADD_TO_BASKET",
  //     item: {
  //       id: props.id,
  //       title: props.title,
  //       image: props.image,
  //       price: props.price,
  //       quantity: 1
  //     },
  //   });
  // };

  const scrollTop = () => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }

  return (
    <div className="product">
    <div onClick={scrollTop}>
        <Link to={"/recipe/" + props.id}><img loading="lazy" alt={props.id} src={props.image}></img></Link>
      </div>
      <div className="product_info">
        <p className="product_title">{props.title}</p>
        <p className="product_price">
          
          ₹<strong className="unit_price">{props.price}</strong>
          {props.category === "powder" && <span>/KG</span>}
          {props.category === "box" && <span>/Box of 6</span>}
          {props.category === "pack" && <span>/100 G</span>}
        </p>
      </div>
      
      {/* <button onClick={addToBasket}>Add To Cart</button> */}
    </div>
  );
}

export default Product;

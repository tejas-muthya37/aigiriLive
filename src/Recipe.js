import React from 'react';
import "./recipe.css";
import {useParams} from "react-router-dom";
import productsArray from "./productArray";
import { useStateValue } from "./StateProvider";

function Recipe() {

    const [{ basket }, dispatch] = useStateValue();

    console.log(basket);

    const {id} = useParams();

    let newProduct;

    productsArray.forEach(function(matchedProduct) {
            if(matchedProduct.id === id) {
                newProduct = matchedProduct;
              }
              
    });

    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
          type: "ADD_TO_BASKET",
          item: {
            id: newProduct.id,
            title: newProduct.title,
            image: newProduct.image,
            price: newProduct.price,
            quantity: document.getElementById("quantity").value
          },
        });
      };

    
    return (
        <div className="recipe">
            <div className="recipe_left">
                <h4 id="recipe_left_header" className="recipe_left_header">{newProduct.title}</h4>
                    <h5 className="price">₹ {newProduct.price}.99</h5>
                    <div className="recipe_left_quantity">
                        <form>
                            <label htmlFor="quantity">QUANTITY</label>
                            <select id="quantity" name="quantity">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </form>
                    </div>
                    <button onClick={addToBasket} className="recipe_button">Add to Cart</button>
            </div>
            <div className="recipe_mid">
                <img alt={newProduct.id} src={newProduct.image}></img>
            </div>
            <div className="recipe_right">
                <h4 className="recipe_right_header"><span className="header_first_child">P</span>RODUCT <span className="header_first_child">D</span>ESCRIPTION</h4>
                <p className="recipe_p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <h4 className="best_results"><span className="header_first_child">B</span>EST <span className="header_first_child">R</span>ESULTS</h4>
                <p className="recipe_p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>
    )
}

export default Recipe;
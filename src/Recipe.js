import React from 'react';
import "./recipe.css";
import {useParams} from "react-router-dom";
import productsArray from "./productArray.js";
import { useStateValue } from "./StateProvider.js";

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

        dispatch({
          type: "ADD_TO_BASKET",
          item: {
            key: newProduct.id,
            id: newProduct.id,
            title: newProduct.title,
            category: newProduct.category,
            image: newProduct.image,
            price: newProduct.price,
            quantity: document.getElementById("quantity").value,
            quantityValue: document.getElementById(document.getElementById("quantity").value).innerHTML,
            height: newProduct.height,
            weight: newProduct.weight,
            breadth: newProduct.breadth,
            length: newProduct.length
          },
        });
        let stringBasket = JSON.stringify(basket);
        localStorage.setItem("localBasket", stringBasket);
      };
    
    return (
        <div className="recipe">
            <div className="recipe_left">
                <h5 id="recipe_left_header" className="recipe_left_header font_alike">{newProduct.title}</h5>
                {(newProduct.category === "powder") && <h5 id="price" className="price">₹ {newProduct.price} / KG</h5>}
                {(newProduct.category === "box") && <h5 id="price" className="price">₹ {newProduct.price} / Box of 6</h5>}
                    <div className="recipe_left_quantity">
                        <form>
                            <label htmlFor="quantity"><h5 className="quantity font_alike">QUANTITY</h5></label>
                            {(newProduct.category === "box") && <select id="quantity" name="quantity">
                                <option id="1" value={1}>1</option>
                                <option id="2" value={2}>2</option>
                                <option id="3" value={3}>3</option>
                                <option id="4" value={4}>4</option>
                            </select>}
                            {(newProduct.category === "powder") && <select id="quantity" name="quantity">
                                
                                {/* <option id={3} value={3}>3 KG</option>
                                
                                <option id={5/2} value={5/2}>2.5 KG</option>

                                <option id={2} value={2}>2 KG</option> */}
                                <option id={1} value={1}>1 KG</option>
                                <option id={1/2} value={1/2}>500 GRAMS</option>
                                <option id={1/4} value={1/4}>250 GRAMS</option>
                            </select>}
                        </form>
                    </div>
                    <button onClick={addToBasket} className="recipe_button">ADD TO CART</button>
            </div>
            <div className="recipe_mid">
                <img alt={newProduct.id} src={newProduct.image}></img>
            </div>
            <div className="recipe_right">
                <h4 className="recipe_right_header">PRODUCT DESCRIPTION</h4>
                <p className="recipe_p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <h4 className="recipe_right_header best_results">BEST RESULTS</h4>
                <p className="recipe_p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>
    )
}

export default Recipe;



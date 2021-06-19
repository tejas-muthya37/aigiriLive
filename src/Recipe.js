import React, { useRef } from "react";
import "./recipe.css";
import { useParams } from "react-router-dom";
import productsArray from "./productArray.js";
import { useStateValue } from "./StateProvider.js";

function Recipe() {
  const [{ basket }, dispatch] = useStateValue();
  const buttonRef = useRef(null);

  console.log(basket);

  const { id } = useParams();

  let newProduct;
  let found = false;

  productsArray.forEach(function (matchedProduct) {
    if (matchedProduct.id === id) {
      newProduct = matchedProduct;
    }
  });

  function myFunc() {
    buttonRef.current.innerText = "ADD TO CART";
  }

  const addToBasket = () => {
    buttonRef.current.innerText = "ADDED TO CART! ✓";
    setTimeout(myFunc, 1000);
    basket?.forEach((item) => {
      if (item.title === newProduct.title && item.category === "box") {
        found = true;
        dispatch({
          type: "REMOVE_FROM_BASKET",
          id: item.id,
        });
        dispatch({
          type: "ADD_TO_BASKET",
          item: {
            key: newProduct.id,
            id: newProduct.id,
            title: newProduct.title,
            title2: newProduct.title2,
            category: newProduct.category,
            image: newProduct.image,
            price: newProduct.price,
            quantity:
              Number(document.getElementById("quantity").value) +
              Number(item.quantity),
            quantityValue:
              Number(
                document.getElementById(
                  document.getElementById("quantity").value
                ).innerHTML
              ) + Number(item.quantityValue),
            height: newProduct.height,
            weight: newProduct.weight,
            breadth: newProduct.breadth,
            length: newProduct.length,
          },
        });
      }
    });

    if (found === false) {
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          key: newProduct.id,
          id: newProduct.id,
          title: newProduct.title,
          title2: newProduct.title2,
          category: newProduct.category,
          image: newProduct.image,
          price: newProduct.price,
          quantity: document.getElementById("quantity").value,
          quantityValue: document.getElementById(
            document.getElementById("quantity").value
          ).innerHTML,
          height: newProduct.height,
          weight: newProduct.weight,
          breadth: newProduct.breadth,
          length: newProduct.length,
        },
      });
    }
    let stringBasket = JSON.stringify(basket);
    localStorage.setItem("localBasket", stringBasket);
  };

  return (
    <div className="recipe">
      <div className="recipe_left">
        <h5 id="recipe_left_header" className="recipe_left_header font_alike">
          {newProduct.title2}
        </h5>
        {newProduct.garlic === "yes" && (
          <h5 className="price garlic">(With Garlic)</h5>
        )}
        {newProduct.category === "powder" && (
          <h5 id="price" className="price">
            ₹ {newProduct.price} / KG
          </h5>
        )}
        {newProduct.category === "box" && (
          <h5 id="price" className="price">
            ₹ {newProduct.price} / Box of 6
          </h5>
        )}
        {newProduct.category === "pack" && (
          <h5 id="price" className="price">
            ₹ {newProduct.price} / 100 GRAMS
          </h5>
        )}
        <div className="recipe_left_quantity">
          <form>
            <label htmlFor="quantity">
              <h5 className="quantity font_alike">QUANTITY</h5>
            </label>
            {newProduct.category === "box" && (
              <select id="quantity" name="quantity">
                <option id="1" value={1}>
                  1
                </option>
                <option id="2" value={2}>
                  2
                </option>
                <option id="3" value={3}>
                  3
                </option>
                <option id="4" value={4}>
                  4
                </option>
              </select>
            )}
            {newProduct.category === "powder" && (
              <select id="quantity" name="quantity">
                {/* <option id={3} value={3}>3 KG</option>
                                
                                <option id={5/2} value={5/2}>2.5 KG</option>

                                <option id={2} value={2}>2 KG</option> */}
                <option id={1} value={1}>
                  1 KG
                </option>
                <option id={1 / 2} value={1 / 2}>
                  500 GRAMS
                </option>
                <option id={1 / 4} value={1 / 4}>
                  250 GRAMS
                </option>
              </select>
            )}
            {newProduct.category === "pack" && (
              <select id="quantity" name="quantity">
                <option id="1" value={1}>
                  100 GRAMS
                </option>
                <option id="2" value={2}>
                  200 GRAMS
                </option>
              </select>
            )}
          </form>
        </div>
        <button ref={buttonRef} onClick={addToBasket} className="recipe_button">
          ADD TO CART
        </button>
      </div>
      <div className="recipe_mid">
        <img loading="lazy" alt={newProduct.id} src={newProduct.image}></img>
      </div>
      <div className="recipe_right">
        <h4 className="recipe_right_header">PRODUCT DESCRIPTION</h4>
        <p className="recipe_p">{newProduct.desc}</p>
        <h4 className="recipe_right_header best_results">BEST RESULTS</h4>
        <p className="recipe_p">
          We are planning to pen down our ancestral recipes under the Best
          Results section of every product. Follow these recipes to yield the
          most authentic Brahmin Delicacies. We will be updating this shortly.
        </p>
      </div>
    </div>
  );
}

export default Recipe;

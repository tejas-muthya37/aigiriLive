import React from 'react';
import "./recipe.css"

function Recipe() {
    return (
        <div className="recipe">
            <div className="recipe_left">
                <h3 className="recipe_left_header">Sambar Powder</h3>
                <div className="recipe_left_content">
                    <h5 className="price"><small>₹</small> 199.99</h5>
                    <div className="quantity_div">
                        <h3 className="recipe_left_quantity">Quantity</h3>
                        <h5 className="quantity">1</h5>
                    </div>
                    <button>Add to Cart</button>
                </div>
            </div>
            <div className="recipe_mid">
                <img alt="" src="https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg"></img>
            </div>
            <div className="recipe_right">
                <h4>Product Description</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <h4 className="best_results">Best Results</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>
    )
}

export default Recipe;


import React from 'react';
import img9 from "./img9.jpg";
import "./feature.css";

function Feature() {
    return (
        <div className="feature">

            <div className="row">

            <div className="col-lg-6">

                    <img className="feature_img" src={img9} alt=""></img>

                </div>

            <div className="col-lg-6">

                    {/* <div className="feature_right"> */}
                        <h2>LIP SMACKING RECIPES!</h2>
                   
                    {/* </div> */}

            </div>
                
            </div>
            
        </div>
    )
}

export default Feature;

import React from 'react';
import "./invoicetemp.css";
import logo from "./aigiri_logo_cropped.png";
import { useStateValue } from "./StateProvider";
import {getBasketTotal} from "./reducer";

function InvoiceTemp() {

    const [{ basket }] = useStateValue();

    function genPDF() {
        window.print();
    }

    return (
        <div className="invoice_temp">
        
        <button className="generate_invoice_button" onClick={genPDF}>Download a copy</button>

            <div className="invoice_temp_top">
                <div className="temp_top_left">
                <h2 className="invoice_header">INVOICE</h2>
                    <p className="invoice_no">No. 343434</p>
                    
                </div>
                <div className="temp_top_right">
                <img alt="" className="aigiri_logo" src={logo}></img>
                <p className="invoice_no">12-11-2020</p> 

                </div>
            </div>
            <div className="invoice_temp_mid">
                
                    <table className="item_table">
                    <thead>
                    <tr className="item_table_headers">
                        <th>ITEM</th>
                        <th>QUANTITY</th>
                        <th>PRICE</th>
                    </tr>
                    </thead>
                    <tbody>
                    {basket.map((item) => (
                        <tr className="item_data">
                        <td>{item.title}</td>
                        <td className="quantity_table">{item.quantityValue}</td>
                        <td>₹ {item.price * item.quantity}</td>
                    </tr>
                    ))}
                    </tbody>
                    
                    </table>

                    <div className="temp_mid_total">
                        <div className="total_left">
                            
                            <p>CART TOTAL</p>
                            <p>SHIPPING COST</p>
                            <p className="payment_method">PAYMENT METHOD</p>
                            <p className="grand_total total_last_child">GRAND TOTAL</p>
                            

                        </div>
                        <div className="total_mid">
                            
                            <p>-</p>
                            <p>-</p>
                            <p>-</p>
                            <p className="total_last_child last_dash">-</p>
                            

                        </div>
                        <div className="total_right">
                            
                            <p>₹ {getBasketTotal(basket)}</p>
                            <p>₹ 200</p>
                            <p>Prepaid</p>
                            <p className="total_last_child grand_total grand_total_rupee">₹ {getBasketTotal(basket) + 200}</p>
                            
                        </div>
                    </div>
            </div>
            <div className="invoice_temp_bottom">
                <div className="temp_bottom_left">
                <p className="payable_to">PAYABLE TO</p>
                <p className="name_phone">AIGIRI FOODS</p>
                <p className="name_phone">+91 9164187714 </p>
                <p>#34, 7th Cross, 5th Main, Srinidhi Layout, Konanakunte, JP Nagar, Bangalore 062</p>
                </div>

                <div className="temp_bottom_right">
                <p className="payable_to">SHIPPED TO</p>
                <p className="name_phone customer_name">PAWAN MUTHYA</p>
                <p>#34, 7th Cross, 5th Main, Srinidhi Layout, Konanakunte, JP Nagar, Bangalore 062</p>
                </div>
            </div>
            <a className="continue_shopping" href="/">Click here to continue shopping</a>
        </div>
    )
}

export default InvoiceTemp;

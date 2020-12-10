import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./checkout.css";

function Checkout() {

    const [country, setCountry] = useState("India");

    function handleClick(event) {
        let newCountry = event.target.value;
        setCountry(newCountry);
    }

    function addOrder() {
        // var myHeaders = new Headers();
        // myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEwNTE1ODQsImlzcyI6Imh0dHBzOi8vYXBpdjIuc2hpcHJvY2tldC5pbi92MS9leHRlcm5hbC9hdXRoL2xvZ2luIiwiaWF0IjoxNjA3NDkwNzIyLCJleHAiOjE2MDgzNTQ3MjIsIm5iZiI6MTYwNzQ5MDcyMiwianRpIjoia0NtWnhNUWRDRDNYMkxFVyJ9.H0L1eb7nVGz5iHQUJszqEXQpE-MqmTYL5ujg_95b1lQ");

        // var raw = JSON.stringify({"order_id":"224-453","order_date":"2020-12-08 11:11","pickup_location":"Primary",
        //                         "billing_customer_name":"Tejas","billing_address":"House 221B, Leaf Village",
        //                         "billing_city":"New Delhi","billing_pincode":"110002","billing_state":"Delhi",
        //                         "billing_country":"India","billing_email":"naruto@uzumaki.com","billing_phone":"9876543210",
        //                         "shipping_is_billing":true,"order_items":[{"name":"Kunai","sku":"chakra123","units":10,"selling_price":"900"}],
        //                         "payment_method":"Prepaid","sub_total":9000,"length":10,"breadth":15,"height":20,"weight":2.5});

        // var requestOptions = {
        // method: 'POST',
        // headers: myHeaders,
        // body: raw,
        // redirect: 'follow'
        // };

        // fetch("https://apiv2.shiprocket.in/v1/external/orders/create/adhoc", requestOptions)
        // .then(response => response.text())
        // .then(result => console.log(result))
        // .catch(error => console.log('error', error));

        var d = document.getElementById('stateSelect').innerHTML;
        console.log(d);
        
        }

        var citiesByState = {
            "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool", "Kakinada", "Rajamahendravaram", "Kadapa", 
                                "Tirupati", "Anantapuram", "Vizianagaram", "Eluru", "Chirala", "Ongole", "Adoni", "Madanapalle",
                                "Machilipatnam", "Tenali", "Proddatur", "Chittoor", "Hindupur", "Srikakulam", "Bhimavaram", "Guntakal",
                                "Dharmavaram", "Gudivada", "Narasaraopet", "Tadipatri", "Mangalagiri", "Tadepalligudem", "Amaravati", "Chilakaluripet"],
            
                "Goa": ["Bicholim", "Canacona", "Cuncolim", "Curchorem", "Mapusa", "Margao", "Mormugao", "Panaji", "Pernem", "Ponda", "Quepem",
                        "Sanguem", "Sanquelim", "Valpoi"],
            
                "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar", "Junagadh", "Gandhinagar", "Gandhidham", "Anand", "Navsari", "Morbi", "Nadiad", "Surendranagar", "Bharuch", "Mehsana", "Bhuj", "Daman", "Porbandar", "Palanpur", "Valsad", "Vapi", "Gondal", "Veraval", "Godhara", "Patan", "Kalol, Gandhinagar", "Dahod", "Botad", "Amreli", "Deesa", "Jetpur"]
            
                // Karnataka: [""]
                // Kerala: [""]
                // Maharashtra: [""]
                // Punjab: [""]
                // Rajasthan: [""]
                // Tamil Nadu: [""]
                // Telangana: [""]
                // West Bengal: [""]
            }
            function makeSubmenu(value) {
            
                if(value.length===0) document.getElementById("citySelect").innerHTML = "<option></option>";
                else {
                    var citiesOptions = "";
                    var cityId;
                    for(cityId in citiesByState[value]) {
                    citiesOptions+="<option>"+citiesByState[value][cityId]+"</option>";
                    }
                    document.getElementById("citySelect").innerHTML = citiesOptions;
                }
                
            
            }
            
            function resetSelection() {
            document.getElementById("stateSelect").selectedIndex = 0;
            document.getElementById("citySelect").selectedIndex = 0;
            }

    return (
        <div onLoad={resetSelection} className="container contact">

            <h4>Order Now</h4>

            <form className="text-center" method="post" action="/" encType="text/plain">

                <input type="text" id="defaultContactFormName" className="form-control mb-4" placeholder="Name" />

                <input type="email" id="defaultContactFormEmail" className="form-control mb-4" placeholder="E-mail" />
                
                <div className="locationInput">

                <select onChange={handleClick} id="countrySelect" className="locationInputs">
                    <option value="India" selected>India</option>
                    <option value="Other">Other</option>
                    
                </select>
                
                {country === "India" && <select className="locationInputs" id="stateSelect" size="1" onChange={event => makeSubmenu(event.target.value)}>
                    <option className="states" value="" disabled selected>State</option>
                    <option className="states">Andhra Pradesh</option>
                    <option className="states">Goa</option>
                    <option className="states">Gujarat</option>
                </select>}
                
                {country === "India" && <select className="locationInputs" id="citySelect" size="1" >
                    <option value="" disabled selected>City</option>
                    <option></option>
                </select>}
                </div>

                <input type="text" id="defaultContactFormAddress" className="form-control mb-4" placeholder="Your Residential Address" />

                {country === "Other" && <p className="international_shipping_note">Note: Please mention the country, state and city in the address field in case you want the product to shipped out of India.</p>}

                <Link to="/"><button onClick={addOrder} className="contact-btn">Place Order</button></Link>

            </form>

        </div>
    );
}

export default Checkout;

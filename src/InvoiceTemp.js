import React from "react";
import "./invoicetemp.css";
import { useStateValue } from "./StateProvider.js";
import { getBasketTotal } from "./reducer.js";
import uuid from "react-uuid";

function InvoiceTemp() {
  const [{ basket }] = useStateValue();

  let newString = "";
  basket?.map(
    (item) =>
      (newString +=
        "\n\n\n\n\n" +
        item.title +
        "\t - \t" +
        item.quantityValue +
        "\t - \t₹ " +
        String(item.quantity * item.price))
  );

  newString += "\n\n\n\n\n------------------- END OF ORDER -------------------";

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  // ********* SHIPROCKET ACCOUNT LINK *********

  var raw = JSON.stringify({
    email: "tejas.muthya38@gmail.com",
    password: "madhwapaaka",
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("https://apiv2.shiprocket.in/v1/external/auth/login", requestOptions)
    .then((response) => response.text())
    .then(function (result) {
      let newData = JSON.parse(result);
      let newToken = newData.token;
      localStorage.setItem("TOKEN", newToken);
    })
    .catch((error) => console.log("error", error));

  var todayDate = new Date().toLocaleDateString("en-GB");

  let userName = localStorage.getItem("srName");
  let userAddress = localStorage.getItem("srAddress");
  let userCity = localStorage.getItem("srCity");
  let userState = localStorage.getItem("srState");
  let userCountry = localStorage.getItem("srCountry");
  let userPincode = localStorage.getItem("srPincode");
  let userEmail = localStorage.getItem("srEmail");
  let userPhone = localStorage.getItem("srPhone");
  let userTotal = getBasketTotal(basket);
  let userPayment = localStorage.getItem("srPayment");

  let shippingCost;

  // ********* SHIPPING COST FOR EACH STATE *********

  if (userTotal > 1000 || userCountry === "Other") {
    shippingCost = 0;
  } else {
    switch (userState) {
      case "Delhi":
        shippingCost = 165;
        break;
      case "Andhra Pradesh":
        shippingCost = 245;
        break;
      case "Goa":
        shippingCost = 175;
        break;
      case "Karnataka":
        if (userCity === "Bengaluru") {
          shippingCost = 125;
        } else {
          shippingCost = 210;
        }
        break;
      case "Gujarat":
        shippingCost = 175;
        break;
      case "Kerala":
        shippingCost = 245;
        break;
      case "Maharashtra":
        shippingCost = 175;
        break;
      case "Punjab":
        shippingCost = 245;
        break;
      case "Rajasthan":
        shippingCost = 175;
        break;
      case "Telangana":
        shippingCost = 245;
        break;
      case "West Bengal":
        shippingCost = 175;
        break;
      case "Haryana":
        shippingCost = 245;
        break;
      default:
        shippingCost = 245;
    }
  }

  let newArray = basket.map((item) => ({
    name: item.title,
    sku: uuid(),
    units: 1,
    selling_price: item.price,
  }));

  function addOrder() {
    var myHeaders = new Headers();
    let newToken = localStorage.getItem("TOKEN");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + newToken);

    let srDate =
      new Date().toLocaleDateString("en-CA") +
      " " +
      new Date().toLocaleTimeString("en-US", { hour12: false }).slice(0, 5);
    let srOrderId = uuid();
    let srName = localStorage.getItem("srName");
    let srAddress = localStorage.getItem("srAddress");
    let srCity = localStorage.getItem("srCity");
    let srState = localStorage.getItem("srState");
    let srCountry = localStorage.getItem("srCountry");
    let srPincode = localStorage.getItem("srPincode");
    let srEmail = localStorage.getItem("srEmail");
    let srPhone = localStorage.getItem("srPhone");
    let srHeight = 20;
    let srWeight = 5;
    let srLength = 30;
    let srBreadth = 30;
    let srTotal = getBasketTotal(basket) + shippingCost;

    var raw = JSON.stringify({
      order_id: srOrderId,
      order_date: srDate,
      pickup_location: "Primary",
      address: "#181 1st A Cross 2nd Phase 4th Block",
      address_2: "BSK 3rd Stage Bengaluru 560085",
      city: "Bangalore",
      billing_customer_name: srName,
      billing_last_name: "",
      billing_address: srAddress,
      billing_city: srCity,
      billing_pincode: srPincode,
      billing_state: srState,
      billing_country: srCountry,
      billing_email: srEmail,
      billing_phone: srPhone,
      shipping_is_billing: true,
      order_items: [...newArray],
      payment_method: "Prepaid",
      sub_total: srTotal,
      length: srLength,
      breadth: srBreadth,
      height: srHeight,
      weight: srWeight,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://apiv2.shiprocket.in/v1/external/orders/create/adhoc",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  function genPDF() {
    window.print();
  }

  return (
    <div className="invoice_temp">
      <form
        onSubmit={addOrder}
        className="invisible_form"
        method="POST"
        action="https://formsubmit.co/madhwapaaka@gmail.com"
      >
        <div className="buttons">
          <button
            onClick={genPDF}
            type="submit"
            className="generate_invoice_button"
          >
            PRINT
          </button>
          <button type="submit" className="confirm_order_button">
            CONFIRM ORDER
          </button>
        </div>

        {userPayment === "Online" && (
          <input
            type="hidden"
            name="NOTICE"
            value={
              "Your order will be dispatched once you complete your online payment of ₹ " +
              (userTotal + shippingCost) +
              " towards Madhwa Paaka - +91 9980284000"
            }
          />
        )}

        <input name="NAME" type="hidden" value={userName} />
        <input name="email" type="hidden" value={userEmail} />
        <input name="CONTACT" type="hidden" value={userPhone} />
        <input name="COUNTRY" type="hidden" value={userCountry} />
        <input name="STATE" type="hidden" value={userState} />
        <input name="CITY" type="hidden" value={userCity} />
        <input name="PINCODE" type="hidden" value={userPincode} />
        <input name="ADDRESS" type="hidden" value={userAddress} />
        <input type="hidden" name="YOUR-ORDER" value={newString} />
        <input type="hidden" name="PAYMENT-METHOD" value={userPayment} />
        <input type="hidden" name="CART-TOTAL" value={userTotal} />
        <input type="hidden" name="SHIPPING-COST" value={shippingCost} />
        <input
          type="hidden"
          name="GRAND-TOTAL"
          value={userTotal + shippingCost}
        />
        <input
          type="hidden"
          name="_subject"
          value="Your order from Madhwa Paaka"
        />
        <input
          type="hidden"
          name="_autoresponse"
          value="Thank you for shopping with Madhwa Paaka. This is a confirmation mail that we have successfully received your order."
        />
        <input
          type="hidden"
          name="_next"
          value="http://www.madhwapaaka.in/success"
        />
      </form>

      <div className="invoice_temp_top">
        <div className="temp_top_left">
          <h2 className="invoice_header">INVOICE</h2>
          <p className="invoice_no">{todayDate}</p>
        </div>
        <div className="temp_top_right">
          <h2 className="logo_text">ಮಧ್ವಪಾಕ</h2>
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
              <tr key={basket.indexOf(item)} className="item_data">
                <td>{item.title2}</td>
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
            <p>₹ {shippingCost}</p>
            <p>{userPayment}</p>
            <p className="total_last_child grand_total_rupee">
              ₹ {getBasketTotal(basket) + shippingCost}
            </p>
          </div>
        </div>
      </div>
      <div className="invoice_temp_bottom">
        <div className="temp_bottom_left">
          <p className="payable_to">PAYABLE TO</p>
          <p className="name_phone">Madhwa Paaka</p>
          <p className="name_phone">+91 9980284000</p>
          <p className="address">Bengaluru, Karnataka</p>
        </div>

        <div className="temp_bottom_right">
          <p className="payable_to">SHIPPED TO</p>
          <p className="name_phone customer_name">{userName}</p>
          <p className="name_phone">{userPhone}</p>
          <p className="address">{userAddress}</p>
        </div>
      </div>
    </div>
  );
}

export default InvoiceTemp;

import React, { useState, useEffect, useRef } from "react";
import "./checkout.css";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import { Link } from "react-router-dom";
import Payment from "./Payment";
// import { useStateValue } from './StateProvider';

const Checkout = () => {
  const nameRef = useRef(null);
  const addressRef = useRef(null);
  const countryRef = useRef(null);
  const cityRef = useRef(null);
  const stateRef = useRef(null);
  const pincodeRef = useRef(null);
  const mailRef = useRef(null);
  const phoneRef = useRef(null);
  const phoneRef1 = useRef(null);
  const submitRef = useRef(null);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const [fields, setFields] = useState(false);

  const [country, setCountry] = useState("India");

  function handleClick1(event) {
    let newCountry = event.target.value;
    setCountry(newCountry);
  }

  const [payment, setPayment] = useState("COD");

  function handleClick2(event) {
    let newPayment = event.target.value;
    setPayment(newPayment);
    document.getElementById("payments").classList.add("payment_part");
  }

  function handleClick3(event) {
    let newPayment = event.target.value;
    setPayment(newPayment);
    document.getElementById("payments").classList.remove("payment_part");
  }

  // -------------------------------------------------- Create Order API --------------------------------------------------------------

  function addVars() {
    let srName = String(nameRef.current.value);
    let srAddress = String(addressRef.current.value);
    // let srCity = String(cityRef.current.value);
    // let srState = String(stateRef.current.value);
    let srCity = country === "India" ? String(cityRef.current.value) : "";
    let srState = country === "India" ? String(stateRef.current.value) : "";
    let srCountry = String(country);
    // let srPincode = Number(pincodeRef.current.value);
    let srPincode = country === "India" ? String(pincodeRef.current.value) : "";
    let srEmail = String(mailRef.current.value);
    // let srPhone = String(phoneRef.current.value);
    let srPhone =
      country === "India"
        ? String(phoneRef.current.value)
        : phoneRef1.current.value;

    localStorage.setItem("srName", srName);
    localStorage.setItem("srAddress", srAddress);
    localStorage.setItem("srCity", srCity);
    localStorage.setItem("srState", srState);
    localStorage.setItem("srCountry", srCountry);
    localStorage.setItem("srPincode", srPincode);
    localStorage.setItem("srEmail", srEmail);
    localStorage.setItem("srPhone", srPhone);
    localStorage.setItem("srPayment", payment);

    if (nameRef.current.value === "") {
      setFields(false);
      alert("Please enter your name!");
    }
    if (mailRef.current.value.includes("@") === false) {
      setFields(false);
      alert("Please enter a valid email ID!");
    }
    if (addressRef.current.value === "") {
      setFields(false);
      alert("Please specify the delivery location!");
    }
    if (country === "India") {
      if (pincodeRef.current.value.length !== 6) {
        setFields(false);
        alert("Please enter a valid 6-Digit PINCODE!");
      }

      if (phoneRef.current.value.length !== 10) {
        setFields(false);
        alert("Please enter a valid 10-Digit Phone Number!");
      }
    }
  }

  function lengthCheck1() {
    if (nameRef.current.value.length > 0) {
      setFields(true);
    }
  }

  function lengthCheck2() {
    if (mailRef.current.value.includes("@") === true) {
      setFields(true);
    }
  }

  function lengthCheck3() {
    if (phoneRef.current.value.length === 10) {
      setFields(true);
    }
  }

  function lengthCheck5() {
    if (pincodeRef.current.value.length === 6) {
      setFields(true);
    }
  }

  function lengthCheck6() {
    if (addressRef.current.value.length > 10) {
      setFields(true);
    }
  }

  function scrollTop() {
    window.scroll({
      top: 0,
      left: 0,
    });
  }

  function keydown1(e) {
    if (e.keyCode === 13) {
      mailRef.current.focus();
    }
  }

  function keydown2(e) {
    if (e.keyCode === 13) {
      phoneRef.current.focus();
    }
  }

  function keydown3(e) {
    if (e.keyCode === 13) {
      countryRef.current.focus();
    }
  }

  function keydown4(e) {
    if (e.keyCode === 13) {
      stateRef.current.focus();
    }
  }

  function keydown5(e) {
    if (e.keyCode === 13) {
      cityRef.current.focus();
    }
  }

  function keydown6(e) {
    if (e.keyCode === 13) {
      pincodeRef.current.focus();
    }
  }

  function keydown7(e) {
    if (e.keyCode === 13) {
      addressRef.current.focus();
    }
  }

  function keydown8(e) {
    if (e.keyCode === 13) {
      submitRef.current.focus();
    }
  }

  var citiesByState = {
    "Andhra Pradesh": [
      "Visakhapatnam",
      "Vijayawada",
      "Guntur",
      "Nellore",
      "Kurnool",
      "Kakinada",
      "Rajamahendravaram",
      "Kadapa",
      "Tirupati",
      "Anantapuram",
      "Vizianagaram",
      "Eluru",
      "Chirala",
      "Ongole",
      "Adoni",
      "Madanapalle",
      "Machilipatnam",
      "Tenali",
      "Proddatur",
      "Chittoor",
      "Hindupur",
      "Srikakulam",
      "Bhimavaram",
      "Guntakal",
      "Dharmavaram",
      "Gudivada",
      "Narasaraopet",
      "Tadipatri",
      "Mangalagiri",
      "Tadepalligudem",
      "Amaravati",
      "Chilakaluripet",
    ],

    Goa: [
      "Bicholim",
      "Canacona",
      "Cuncolim",
      "Curchorem",
      "Mapusa",
      "Margao",
      "Mormugao",
      "Panaji",
      "Pernem",
      "Ponda",
      "Quepem",
      "Sanguem",
      "Sanquelim",
      "Valpoi",
    ],

    Gujarat: [
      "Ahmedabad",
      "Surat",
      "Vadodara",
      "Rajkot",
      "Bhavnagar",
      "Jamnagar",
      "Junagadh",
      "Gandhinagar",
      "Gandhidham",
      "Anand",
      "Navsari",
      "Morbi",
      "Nadiad",
      "Surendranagar",
      "Bharuch",
      "Mehsana",
      "Bhuj",
      "Daman",
      "Porbandar",
      "Palanpur",
      "Valsad",
      "Vapi",
      "Gondal",
      "Veraval",
      "Godhara",
      "Patan",
      "Kalol, Gandhinagar",
      "Dahod",
      "Botad",
      "Amreli",
      "Deesa",
      "Jetpur",
    ],

    Karnataka: [
      "Bengaluru",
      "Hubli-Dharwad",
      "Mysuru",
      "Kalaburagi",
      "Mangaluru",
      "Belagavi",
      "Davanagere",
      "Ballari",
      "Vijayapura",
      "Shivamogga",
      "Tumakuru",
      "Raichur",
      "Bidar",
      "Hosapete",
      "Gadag-Betageri",
      "Robertsonpete",
      "Hassan",
      "Bhadravati",
      "Chitradurga",
      "Udupi",
      "Kolara",
      "Mandya",
      "Chikkamagaluru",
      "Gangavati",
      "Bagalkote",
      "Ranebennuru",
    ],

    Kerala: [
      "Alleppey",
      "Ernakulam",
      "Idukki",
      "Kannur",
      "Kasaragod",
      "Kollam",
      "Kottayam",
      "Kozhikode",
      "Malappuram",
      "Munnar",
      "Palakkad",
      "Thekkady",
      "Thiruvananthapuram",
      "Thrissur",
      "Wayanad",
      "Varkala",
    ],

    Maharashtra: [
      "Mumbai",
      "Pune",
      "Nagpur",
      "Nashik",
      "Thane",
      "Aurangabad",
      "Solapur",
      "Dhule",
      "Amaravati",
      "Malegoan",
      "Kolhapur",
      "Nanded-Waghela",
      "Sangli",
      "Bhiwandi-Nizampur",
      "Akola",
      "Latur",
      "Jalgaon",
      "Ahmednagar",
      "Miraj",
      "Ichalkaranji",
      "Chandrapur",
      "Parbhani",
      "Jalna",
      "Bhusawal",
      "Navi Mumbai Panvel Raigad",
      "Panvel City",
      "Satara",
      "Beed",
      "Yavatmal",
      "Kamptee",
      "Gondia",
      "Barshi",
      "Achalpur",
      "Osmanabad",
      "Nandurbar",
      "Wardha",
      "Udgir",
      "Hinganghat",
    ],

    Punjab: [
      "Ludhiana",
      "Amritsar",
      "Jalandhar",
      "Patiala",
      "Bathinda",
      "Hoshiarpur",
      "Hoshiarpur",
      "Mohali",
      "Batala",
      "Pathankot",
      "Moga",
      "Abohar",
      "Malerkotla",
      "Khanna",
      "Phagwara",
      "Muktsar",
      "Barnala",
      "Rajpura",
      "Firozpur",
      "Kapurthala",
      "Sunam",
    ],

    Rajasthan: [
      "Jaipur",
      "Jodhpur",
      "Ajmer",
      "Udaipur",
      "Kota",
      "Bikaner",
      "Bhilwara",
      "Alwar",
      "Bharatpur",
      "Sri Ganganagar",
      "Sikar",
      "Pali",
      "Hanumangarh",
    ],

    "Tamil Nadu": [
      "Chennai",
      "Coimbatore",
      "Madurai",
      "Tiruchirappalli",
      "Tiruppur",
      "Salem",
      "Erode",
      "Tirunelveli",
      "Vellore",
      "Thoothukkudi",
      "Dindigul",
      "Thanjavur",
      "Ranipet",
      "Sivakasi",
      "Karur",
      "Udhagamandalam",
      "Hosur",
      "Nagercoil",
      "Kancheepuram",
      "Kumarapalayam",
      "Karaikkudi",
      "Neyveli",
      "Cuddalore",
      "Kumbakonam",
      "Tiruvannamalai",
      "Pollachi",
      "Rajapalayam",
      "Gudiyatham",
      "Pudukkottai",
      "Vaniyambadi",
      "Ambur",
      "Nagapattinam",
    ],

    Telangana: [
      "Hyderabad",
      "Warangal",
      "Mahabubnagar",
      "Khammam",
      "Ramagundam",
      "Nizamabad",
      "Suryapet",
      "Nalgonda",
      "Miryalaguda",
      "Karimnagar",
      "Adilabad",
      "Jagityal",
      "Nirmal",
    ],

    "West Bengal": [
      "Kolkata",
      "Asansol",
      "Siliguri",
      "Durgapur",
      "Bardhaman",
      "English Bazar",
      "Baharampur",
      "Habra",
      "Kharagpur",
      "Shantipur",
      "Dankuni",
      "Dhulian",
      "Ranaghat",
      "Haldia",
      "Raiganj",
      "Krishnanagar",
      "Nabadwip",
      "Medinipur",
      "Jalpaiguri",
      "Balurghat",
      "Basirhat",
      "Bankura",
      "Chakdaha",
      "Darjeeling",
      "Alipurduar",
      "Purulia",
      "Jangipur",
      "Bangaon",
      "Cooch Behar",
    ],

    "NCT Delhi": [
      "Delhi",
      "Najafgarh",
      "New Delhi|Narela",
      "Sultanpur Majra",
      "Kirari Suleman Nagar",
      "Bhalswa Jahangir Pur",
      "Nangloi",
      "Karawal Nagar",
      "Dallo Pura",
      "Delhi Cantonment",
      "Deoli",
      "Gokal Pur",
      "Mustafabad",
      "Jaitpur, Delhi",
      "Burari",
      "Gharoli",
      "Chilla Saroda Bangar",
      "Badarpur Delhi",
      "Jaffrabad",
      "Puth Kalan",
      "Mandoli",
    ],

    Haryana: [
      "Faridabad",
      "Gurugram",
      "Panipat",
      "Ambala",
      "Yamunanagar",
      "Rohtak",
      "Hisar",
      "Karnal",
      "Sonipat",
      "Panchkula",
      "Bhiwani",
      "Sirsa",
      "Bahadurgarh",
      "Jind",
      "Thanesar",
      "Kaithal",
      "Rewari",
      "Mahendergarh",
      "Pundri",
      "Kosli",
    ],
  };

  function makeSubmenu(value) {
    if (value.length === 0)
      document.getElementById("citySelect").innerHTML = "<option></option>";
    else {
      var citiesOptions = "";
      var cityId;
      for (cityId in citiesByState[value]) {
        citiesOptions +=
          "<option>" + citiesByState[value][cityId] + "</option>";
      }
      document.getElementById("citySelect").innerHTML = citiesOptions;
    }
  }

  return (
    <div className="container contact ss-item-required">
      <h4>Order Now</h4>

      <div className="text-center">
        <input
          name="name"
          onChange={lengthCheck1}
          onKeyDown={keydown1}
          type="text"
          id="defaultContactFormName"
          ref={nameRef}
          className="form-control mb-4 border-required"
          placeholder="Name"
        />

        <input
          name="email"
          onChange={lengthCheck2}
          onKeyDown={keydown2}
          type="email"
          id="defaultContactFormEmail"
          ref={mailRef}
          className="form-control mb-4 border-required"
          placeholder="E-mail"
        />

        {country === "India" && (
          <input
            onChange={lengthCheck3}
            onKeyDown={keydown3}
            placeholder="10-Digit Contact Number"
            id="defaultContactFormPhone"
            ref={phoneRef}
            className="border-required phone"
            type=""
            name="phone"
            pattern="[0-9]{10}"
            maxLength="10"
          />
        )}

        {country === "Other" && (
          <input
            onKeyDown={keydown3}
            placeholder="Contact Number with Country Code"
            id="defaultContactFormPhone1"
            ref={phoneRef1}
            className="border-required phone"
            type="number"
            name="phone"
          />
        )}

        <div className="locationInput">
          <select
            name="country"
            onKeyDown={keydown4}
            onChange={handleClick1}
            ref={countryRef}
            id="countrySelect"
            className="locationInputs"
          >
            <option value="India">India</option>
            <option value="Other">Other</option>
          </select>

          {country === "India" && (
            <select
              onKeyDown={keydown5}
              name="state"
              ref={stateRef}
              defaultValue="State"
              className="locationInputs"
              id="stateSelect"
              size="1"
              onChange={(event) => makeSubmenu(event.target.value)}
            >
              {/* <option className="states" disabled>State</option> */}
              <option className="states">Karnataka</option>
              <option className="states">Maharashtra</option>
              <option className="states">NCT Delhi</option>
              <option className="states">Andhra Pradesh</option>
              <option className="states">Tamil Nadu</option>
              <option className="states">Telangana</option>
              <option className="states">Gujarat</option>
              <option className="states">Kerala</option>
              <option className="states">Punjab</option>
              <option className="states">Rajasthan</option>
              <option className="states">West Bengal</option>
              <option className="states">Haryana</option>
              <option className="states">Goa</option>
            </select>
          )}
        </div>

        <div className="locationInput">
          {country === "India" && (
            <select
              name="city"
              onKeyDown={keydown6}
              defaultValue="City"
              className="locationInputs"
              ref={cityRef}
              id="citySelect"
              size="1"
            >
              <option className="cities">Bengaluru</option>
              <option className="cities">Hubli-Dharwad</option>
              <option className="cities">Mysuru</option>
              <option className="cities">Kalaburagi</option>
              <option className="cities">Mangaluru</option>
              <option className="cities">Belagavi</option>
              <option className="cities">Davanagere</option>
              <option className="cities">Ballari</option>
              <option className="cities">Vijayapura</option>
              <option className="cities">Shivamogga</option>
              <option className="cities">Tumakuru</option>
              <option className="cities">Raichur</option>
              <option className="cities">Bidar</option>
              <option className="cities">Hosapete</option>
              <option className="cities">Gadag-Betageri</option>
              <option className="cities">Robertsonpete</option>
              <option className="cities">Hassan</option>
              <option className="cities">Bhadravati</option>
              <option className="cities">Chitradurga</option>
              <option className="cities">Udupi</option>
              <option className="cities">Kolara</option>
              <option className="cities">Mandya</option>
              <option className="cities">Chikkamagaluru</option>
              <option className="cities">Gangavati</option>
              <option className="cities">Bagalkote</option>
              <option className="cities">Ranebennuru</option>
            </select>
          )}

          {country === "India" && (
            <input
              onChange={lengthCheck5}
              onKeyDown={keydown7}
              placeholder="PINCODE"
              id="defaultContactFormPin"
              ref={pincodeRef}
              className="border-required pincode locationInputs"
              type=""
              name="pin"
              pattern="[0-9]{6}"
              maxLength="6"
            />
          )}
        </div>

        <input
          onChange={lengthCheck6}
          type="text"
          name="address"
          onKeyDown={keydown8}
          id="defaultContactFormAddress"
          ref={addressRef}
          className="form-control mb-4 border-required address"
          placeholder="Your Residential Address"
        />

        {country === "Other" && (
          <p className="international_shipping_note">
            Note : Please mention the country, state and city in the address
            field in case you want the product to be shipped out of India.
          </p>
        )}

        <div className="payment_left">
          <div className="payment_options">
            <div className="form-check form-check-inline payment_option">
              <input
                className="form-check-input check_input"
                checked={payment === "COD"}
                onClick={handleClick2}
                type="radio"
                name="payment"
                id="inlineRadio1"
                value="COD"
              />
              <label
                className="form-check-label input_label"
                htmlFor="inlineRadio1"
              >
                <AccountBalanceWalletIcon /> - Cash On Delivery
              </label>
            </div>
            <div className="form-check form-check-inline payment_option">
              <input
                className="form-check-input check_input"
                onClick={handleClick3}
                type="radio"
                name="payment"
                id="inlineRadio2"
                value="Online"
              />
              <label
                className="form-check-label input_label"
                htmlFor="inlineRadio2"
              >
                <PhoneIphoneIcon /> - Online Payment
              </label>
            </div>
          </div>
          <div id="payments" className="payment_part">
            <Payment />
          </div>
        </div>
        {fields === true ? (
          <Link className="link_button" to="/invoice">
            <button
              type="submit"
              onMouseDown={addVars}
              onClick={scrollTop}
              ref={submitRef}
              className="contact-btn"
            >
              CONTINUE
            </button>
          </Link>
        ) : (
          <Link className="link_button" to="/checkout">
            <button
              type="submit"
              onClick={scrollTop}
              ref={submitRef}
              className="contact-btn"
            >
              CONTINUE
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Checkout;

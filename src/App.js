import React from "react";
import './App.css';
import NavBar from "./NavBar";
import BestSeller from "./BestSeller";
import Products from "./Products";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Feature from "./Feature";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./About";
import Recipe from "./Recipe";
import Cart from "./Cart";
import Checkout from "./Checkout";
import InvoiceTemp from "./InvoiceTemp";
import { useStateValue } from "./StateProvider";

function App() {

  let [{ basket }] = useStateValue();


  return (
    <Router>
      <div className="App">
      
      <Switch>
      <Route path="/recipe/:id">
        <NavBar />
        <Recipe />
        <Footer />
      </Route>
      <Route path="/about">
        <NavBar />
        <About />
        <Footer />
      </Route>
      {basket?.length>0 && <Route path="/checkout">
        <NavBar />
        <Checkout />
        <Footer />
      </Route>}
      {basket?.length===0 && <Route path="/checkout">
      <h3 id="empty_cart">Your shopping cart is empty.</h3>

      </Route>}
      <Route path="/cart">
        <NavBar />
        <Cart />
        <Footer />
      </Route>
      {basket?.length>0 && <Route path="/invoice">
        <InvoiceTemp />
      </Route>}
      {basket?.length===0 && <Route path="/invoice">
      <h3 id="empty_cart">Your shopping cart is empty.</h3>

      </Route>}
      <Route path="/">
        <NavBar />
        <Carousel />
        <BestSeller />
        <Feature />
        <Products />
        <Footer />
      </Route>
      </Switch>
    </div>
    </Router>
    
  );
}

export default App;

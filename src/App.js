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


function App() {

  return (
    <Router>
      <div className="App">
      <NavBar />
      <Switch>
      <Route path="/recipe/:id">
        <Recipe />
      </Route>
      <Route path="/about">
          <About />
      </Route>
      <Route path="/checkout">
          <Checkout />
      </Route>
      <Route path="/cart">
          <Cart />
      </Route>
      <Route path="/">
          <Carousel />
          <BestSeller />
          <Feature />
          <Products/>
      </Route>
      </Switch>
      <Footer />
    </div>
    </Router>
    
  );
}

export default App;

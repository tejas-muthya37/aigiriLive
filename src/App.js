import React, { lazy, Suspense } from "react";
import "./App.css";
import NavBar from "./NavBar";
import BestSeller from "./BestSeller";
import Products from "./Products";
// import Carousel from "./Carousel";
import Footer from "./Footer";
// import Feature from "./Feature";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// import About from "./About";
import Recipe from "./Recipe";
import FirstDesc from "./FirstDesc";
import SecondDesc from "./SecondDesc";
import Cart from "./Cart";
import Checkout from "./Checkout";
import InvoiceTemp from "./InvoiceTemp";
import { useStateValue } from "./StateProvider.js";
import Empty from "./Empty";
import Success from "./Success";
import Payment from "./Payment";
const Feature = lazy(() => import("./Feature"));
const Carousel = lazy(() => import("./Carousel"));
const About = lazy(() => import("./About"));

function App() {
  let [{ basket }] = useStateValue();

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/recipe/:id">
            <NavBar />
            <Recipe />
            <Footer />
          </Route>
          <Route exact path="/pay">
            <Payment />
          </Route>
          <Route exact path="/about">
            <NavBar />
            <Suspense
              fallback={
                <div className="spinner-border text-success" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              }
            >
              <About />
            </Suspense>
            <Footer />
          </Route>
          <Route exact path="/products">
            <NavBar />
            <Products />
            <Footer />
          </Route>
          <Route exact path="/success">
            <NavBar />
            <Success />
            <Footer />
          </Route>

          {basket?.length > 0 && (
            <Route exact path="/checkout">
              <NavBar />
              <Checkout />
              <Footer />
            </Route>
          )}
          {basket?.length === 0 && (
            <Route exact path="/checkout">
              <NavBar />
              <Empty />
              <Footer />
            </Route>
          )}
          {basket?.length > 0 && (
            <Route exact path="/cart">
              <NavBar />
              <Cart />
              <Footer />
            </Route>
          )}
          {basket?.length === 0 && (
            <Route exact path="/cart">
              <NavBar />
              <Empty />
              <Footer />
            </Route>
          )}

          {basket?.length > 0 && (
            <Route exact path="/invoice">
              <InvoiceTemp />
            </Route>
          )}
          {basket?.length === 0 && (
            <Route exact path="/invoice">
              <NavBar />
              <Empty />
              <Footer />
            </Route>
          )}
          <Route exact path="/">
            <NavBar />
            <Suspense
              fallback={
                <div className="spinner-border text-success" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              }
            >
              <Carousel />
            </Suspense>
            <FirstDesc />
            <BestSeller />
            <Suspense
              fallback={
                <div className="spinner-border text-success" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              }
            >
              <Feature />
            </Suspense>
            <SecondDesc />
            <Products />
            <Footer />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

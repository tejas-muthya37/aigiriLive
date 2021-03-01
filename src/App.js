import React, {lazy, Suspense} from "react";
import './App.css';
import NavBar from "./NavBar";
import BestSeller from "./BestSeller";
import Products from "./Products";
// import Carousel from "./Carousel";
import Footer from "./Footer";
// import Feature from "./Feature";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import About from "./About";
import Recipe from "./Recipe";
import Cart from "./Cart";
import Checkout from "./Checkout";
import InvoiceTemp from "./InvoiceTemp";
import { useStateValue } from "./StateProvider";
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
      <Route path="/recipe/:id">
        <NavBar />
        <Recipe />
        <Footer />
      </Route>
      <Route path="/pay">
    
        <Payment />

      </Route>
      <Route path="/about">
        <NavBar />
        <Suspense fallback={<div className="spinner-border text-success" role="status"><span className="sr-only">Loading...</span></div>}>
        <About />
        </Suspense>
        <Footer />
      </Route>
      <Route path="/products">
        <NavBar />
        <Products />
        <Footer />
      </Route>
      <Route path="/success">
        <NavBar />
        <Success />
        <Footer />
      </Route>
      
      {basket?.length>0 && <Route path="/checkout">
        <NavBar />
        <Checkout />
        <Footer />
      </Route>}
      {basket?.length===0 && <Route path="/checkout">
        <NavBar />
        <Empty />
        <Footer />

      </Route>}
      {basket?.length>0 && <Route path="/cart">
        <NavBar />
        <Cart />
        <Footer />
      </Route>}
      {basket?.length===0 && <Route path="/cart">
        <NavBar />
        <Empty />
        <Footer />

      </Route>}

      {basket?.length>0 && <Route path="/invoice">
        <InvoiceTemp />
      </Route>}
      {basket?.length===0 && <Route path="/invoice">
      <NavBar />
        <Empty />
        <Footer />

      </Route>}
      <Route path="/">
        <NavBar />
        <Suspense fallback={<div className="spinner-border text-success" role="status"><span className="sr-only">Loading...</span></div>}>
        <Carousel />
        </Suspense>
        
        <BestSeller />
        <Suspense fallback={<div className="spinner-border text-success" role="status"><span className="sr-only">Loading...</span></div>}>
          <Feature />
        </Suspense>
        <Products />
        <Footer />
      </Route>
      </Switch>
    </div>
    </Router>
    
  );
}

export default App;

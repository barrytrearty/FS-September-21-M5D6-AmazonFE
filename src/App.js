import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Product from "./components/Product";
import NewProduct from "./components/NewProduct";
import ShoppingCart from "./components/ShoppingCart";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      {/* <Route path="/" exact component={Home} /> */}
      <Route path="/" exact component={Home} />
      <Route path="/products/:id" exact component={Product} />
      <Route path="/newproduct" exact component={NewProduct} />
      <Route path="/shoppingCart" exact component={ShoppingCart} />
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;

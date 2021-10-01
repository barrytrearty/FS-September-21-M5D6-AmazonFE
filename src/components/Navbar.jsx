import React from "react";
import { Navbar, Button, FormControl, Nav, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import "./styles.css";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/">
        Amazon
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Link to="/" style={{ marginRight: "2em", textDecoration: "none" }}>
          Home
        </Link>
        <Link to="/products" style={{ marginRight: "2em" }}>
          Products
        </Link>
        <Link to="/newproduct" style={{ marginRight: "2em" }}>
          Add a product
        </Link>
      </Nav>
      <Form inline>
        <Link to="/shoppingCart">
          <div id="cart">
            <HiShoppingCart className="mr-3" />
            <h6 id="cart-number" className="pl-1">
              0
            </h6>
          </div>
        </Link>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  );
};

export default NavBar;

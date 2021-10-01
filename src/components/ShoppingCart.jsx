import React, { useState, useEffect } from "react";
import {
  Container,
  Col,
  Row,
  Button,
  Image,
  Form,
  Card,
  Modal,
} from "react-bootstrap";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const id = 1;

  const fetchCartItems = async (id) => {
    try {
      let response = await fetch(`http://localhost:5000/users/${id}`);
      let fetchedCartItems = await response.json();
      setCartItems(fetchedCartItems.products);
      setLoading(false);
      console.log(fetchedCartItems);
      console.log(cartItems);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCartItems(id);
  }, []);

  return (
    <Container>
      <h2>Shopping Cart</h2>

      {cartItems.map((item) => (
        <Row className="border p-2">
          <Col>{item.name}</Col> <Col>{item.price}</Col>{" "}
          <Button variant="danger"></Button>
        </Row>
      ))}
    </Container>
  );
};

export default ShoppingCart;

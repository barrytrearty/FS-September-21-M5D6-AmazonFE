import React, { useState, useEffect } from "react";
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import BlogList from "../../components/blog/blog-list";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [productsArray, setProductsArray] = useState([]);
  const [offsetValue, setOffsetValue] = useState(0);
  const [categoriesArray, setCategoriesArray] = useState([]);

  const fetchProducts = async () => {
    try {
      let response = await fetch(
        `http://localhost:5000/products?offset=${offsetValue}`
      );
      let products = await response.json();
      setProductsArray(products);
      setLoading(false);
      return products;
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategories = async () => {
    try {
      let response = await fetch(`http://localhost:5000/categories`);
      let categories = await response.json();
      setCategoriesArray(categories);
      // setLoading(false);
      // return categories;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCategories();
    console.log(categoriesArray);
  }, []);
  useEffect(() => {
    console.log(offsetValue);
    fetchProducts();
  }, [offsetValue]);

  return (
    <Container fluid="sm">
      <h1 className="blog-main-title">Welcome to Amazon</h1>
      <Row>
        {categoriesArray.map((category) => {
          <Button>{category.name}</Button>;
        })}
      </Row>
      <Row>
        {productsArray.map((product) => (
          <Col md={4} style={{ marginBottom: 50 }}>
            <Link to={`/product/${product.id}`}>
              <Card>
                <Card.Img variant="top" src={product.image_url} />
                <Card.Body>
                  <Card.Title>
                    {product.name.toUpperCase()} {product.name}
                  </Card.Title>
                  {/* <p>{product.categories[0].name}</p> */}
                  {/* <p>{product.reviews[0]}.text</p> */}
                </Card.Body>
                <Card.Footer>{product.price}</Card.Footer>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
      <div className="mx-auto">
        <Button
          onClick={() => {
            if (offsetValue > 0) setOffsetValue(offsetValue - 5);
          }}
        >
          [1]
        </Button>
        <Button onClick={() => setOffsetValue(offsetValue + 5)}>[2]</Button>
      </div>
    </Container>
  );
};

export default Home;

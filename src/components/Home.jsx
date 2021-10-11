import React, { useState, useEffect } from "react";
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import BlogList from "../../components/blog/blog-list";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [productsArray, setProductsArray] = useState([]);
  const [offsetValue, setOffsetValue] = useState(0);
  const [limitValue, setLimitValue] = useState(5);
  const [categoriesArray, setCategoriesArray] = useState([]);
  const [categoryValue, setCategoryValue] = useState(null);

  const fetchProducts = async () => {
    try {
      if (categoryValue) {
        let response = await fetch(
          `http://localhost:5000/categories/${categoryValue}`
        );
        let categoryProducts = await response.json();
        setProductsArray(categoryProducts.products);
        setLoading(false);
        return categoryProducts;
      } else {
        let response = await fetch(
          `http://localhost:5000/products?offset=${offsetValue}&limit=${limitValue}`
        );
        let products = await response.json();
        setProductsArray(products.products);
        setLoading(false);
        return products;
      }
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
  }, [offsetValue, categoryValue]);

  return (
    <Container fluid="sm">
      <h1 className="blog-main-title">Welcome to Amazon</h1>
      <Row>
        {categoriesArray.map((category) => (
          <Button
            variant="light"
            className="mx-1"
            onClick={() => setCategoryValue(category.id)}
          >
            {category.name}
          </Button>
        ))}
      </Row>
      <Row>
        {productsArray.map((product) => (
          <Col md={4} style={{ marginBottom: 50 }}>
            <Link to={`/products/${product._id}`}>
              <Card>
                <Card.Img variant="top" src={product.image_url} />
                <Card.Body>
                  <Card.Title>{product.name.toUpperCase()}</Card.Title>
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
          Prev
        </Button>
        <Button onClick={() => setOffsetValue(offsetValue + 5)}>Next</Button>
      </div>
    </Container>
  );
};

export default Home;

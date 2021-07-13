import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Search({ getSetData }) {
  const defaultSearch = {
    make: "",
    model: "",
    year: "",
    min: "",
    max: "",
  };
  const [searchQuery, setSearchQuery] = useState(defaultSearch);
  const [validated, setValidated] = useState(null);

  function handleChange(e) {
    setSearchQuery({ ...searchQuery, [e.target.name]: e.target.value });
    setValidated(null);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { min, max } = searchQuery;
    if (min && max && min > max) {
      setValidated(false);
    } else {
      getSetData(searchQuery);
      setSearchQuery(defaultSearch);
    }
  }
  return (
    <Container className="mb-5">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="g-2">
          <Col md>
            <Form.Group controlId="make">
              <Form.Label>Make</Form.Label>
              <Form.Control
                type="text"
                name="make"
                value={searchQuery.make}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>

          <Col md>
            <Form.Group controlId="model">
              <Form.Label>Model</Form.Label>
              <Form.Control
                type="text"
                name="model"
                value={searchQuery.model}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>

          <Col md>
            <Form.Group controlId="year">
              <Form.Label>Year</Form.Label>
              <Form.Control
                type="text"
                name="year"
                value={searchQuery.year}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="g-2">
          <Col md>
            <Form.Group controlId="min">
              <Form.Label>Min Price</Form.Label>
              <Form.Control
                type="text"
                name="min"
                value={searchQuery.min}
                onChange={handleChange}
                isInvalid={validated === false}
              />
              <Form.Control.Feedback type="invalid">
                Min need tobe less than max
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col md>
            <Form.Group controlId="max">
              <Form.Label>Max Price</Form.Label>
              <Form.Control
                type="text"
                name="max"
                value={searchQuery.max}
                onChange={handleChange}
                isInvalid={validated === false}
              />
              <Form.Control.Feedback type="invalid">
                Min need tobe less than max
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row className="w-100">
          <Button variant="primary" className="mx-auto" type="submit">
            Search
          </Button>
        </Row>
      </Form>
    </Container>
  );
}

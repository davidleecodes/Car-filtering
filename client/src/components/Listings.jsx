import React from "react";

import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
export default function Listing({ cars }) {
  return (
    <Container className="mb-5">
      <ListGroup>
        <ListGroup.Item className="d-none d-sm-flex ">
          <Row className="w-100">
            <Col xs={6} sm={12}>
              <Row className="w-100">
                <Col xs={3} className="fw-bold">
                  Make
                </Col>
                <Col xs={3} className="fw-bold">
                  Model
                </Col>
                <Col xs={2} className="fw-bold">
                  Price
                </Col>
                <Col xs={2} className="fw-bold">
                  Year
                </Col>
                <Col xs={2} className="fw-bold">
                  {" "}
                  Count
                </Col>
              </Row>
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item className="d-block d-sm-none ">
          <Row className="w-100">
            <Col xs={6} sm={12}>
              <Row className="w-100">
                <Col xs={12}> Cars</Col>
              </Row>
            </Col>
          </Row>
        </ListGroup.Item>
        {cars &&
          cars.map((car) => (
            <ListGroup.Item key={car.id}>
              <Row className="w-100">
                <Col xs={6} className="d-block d-sm-none ">
                  <Col className="fw-bold">Make</Col>
                  <Col className="fw-bold">Model:</Col>
                  <Col className="fw-bold">Price:</Col>

                  <Col className="fw-bold">Year:</Col>
                  <Col className="fw-bold">Count:</Col>
                </Col>
                <Col xs={6} sm={12}>
                  <Row className="w-100">
                    <Col xs={12} sm={3}>
                      {car.make}
                    </Col>

                    <Col xs={12} sm={3}>
                      {car.model}
                    </Col>

                    <Col xs={12} sm={2}>
                      {car.price}
                    </Col>

                    <Col xs={12} sm={2}>
                      {car.year}
                    </Col>

                    <Col xs={12} sm={2}>
                      {car.vehicle_count}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
      </ListGroup>
    </Container>
  );
}

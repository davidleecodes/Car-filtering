import React from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Stats({ stats }) {
  return (
    <Container className={"my-5"}>
      <Row>
        <Col>
          <p className="fw-bold">Total </p>
          <p>{stats?.totalNumber}</p>
        </Col>

        <Col>
          <p className="fw-bold"> SubGroup</p>
          <p>{stats?.totalSubGroup}</p>
        </Col>
        <Col>
          <p className="fw-bold">Lowest </p>
          <p> {stats?.lowestPrice}</p>
        </Col>
        <Col>
          <p className="fw-bold">Median </p>
          <p>{stats?.medianPrice}</p>
        </Col>
        <Col>
          <p className="fw-bold">Highest </p>
          <p> {stats?.highestPrice}</p>
        </Col>
      </Row>
    </Container>
  );
}

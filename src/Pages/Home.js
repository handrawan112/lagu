import React from "react";

import {Container,Row,Col} from "reactstrap";
import {Link} from "react-router-dom";
import "./Home.css";

export default function Home(){

  return (
    <Container className="HomePageBG" fluid>
      <Row>
        <Col align="center" className="text">
          <h1>Go to web</h1>
          <Link className="t-none text-warning" to="/lagu"><i className="fa fa-arrow-right" /> Lagu</Link>
        </Col>
      </Row>
    </Container>
  );
}

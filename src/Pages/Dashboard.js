import React from "react";

import {Container,Row} from "reactstrap";

import Left from "../Component/DashboardJS/Left";
import Right from "../Component/DashboardJS/Right";

export default function Dashboard(){

  return (
    <Container fluid>
      <Row>
        <Left />
        <Right />
      </Row>
    </Container>
  );
}

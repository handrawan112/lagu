import React from "react";

import {Container,Row} from "reactstrap";

import Left from "../Component/DashboardJS/Left";
import Right from "../Component/DashboardJS/Right";

import ProviderContext from "./ContextProvider";

export default function Dashboard(){

  return (
        <ProviderContext>
          <Container fluid>
            <Row>
              <Left />
              <Right />
            </Row>
          </Container>
        </ProviderContext>
  );

}

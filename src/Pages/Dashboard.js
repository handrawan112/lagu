import React from "react";

import {Container,Row} from "reactstrap";

import Left from "../Component/DashboardJS/Left";
import RightSwitch from "../Component/RightSwitch";

import ProviderContext from "./ContextProvider";


export default function Dashboard(){

  return (
        <ProviderContext>
          <Container fluid>
            <Row>
              <Left />
              <RightSwitch />
            </Row>
          </Container>
        </ProviderContext>
  );

}

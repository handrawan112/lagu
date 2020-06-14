import React from "react";

import {Row,Col} from "reactstrap";

import "./RightStyle.css";

export default function Right(){

  return (
      <Col className="RightBG" sm="12" md="10">
        <Row>
          <div className="ml-3 mt-3">
            Detail
          </div>
        </Row>
        <Row>
          <div className="ml-3 mt-3">
            Detail
          </div>
        </Row>
      </Col>
  );
}

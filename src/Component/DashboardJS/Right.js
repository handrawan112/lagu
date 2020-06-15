import React from "react";

import {Row,Col} from "reactstrap";

import "./RightStyle.css";

import {listLaguContext} from "../../context";

export default function Right(){

let lagu=React.useContext(listLaguContext);

console.log(lagu)

  return (
      <Col className="RightBG" sm="10" md="10">
      <Row>
        {
          lagu===undefined||lagu===null?null:lagu.items.map((item)=>{
            return (
              <Col sm="6" md="4" className="text-center mt-4">
                <img src={item.snippet.thumbnails.high.url} width="300" height="300" alt="image" />
                <div>{item.snippet.title}</div>
              </Col>
            );
          })
        }
        </Row>
      </Col>
  );
}

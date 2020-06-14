import React from "react";

import {Row,Col,Button} from "reactstrap";
import "./LeftStyle.css";

import {Link} from "react-router-dom";

export default function Left(){

  return (
      <Col className="LeftBG" sm="12" md="2">
        <Row>
          <div className="mb-3">
            <h5 style={{"pointer-events":"none"}}>WoaTube Downloader</h5>
          </div>
        </Row>
        <Row>
          <div className="mb-3">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Once - Aku Mau" />
              <div class="input-group-prepend">
                <Button color="dark" class="input-group-text"><i className="fa fa-search" /></Button>
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <div className="mb-3">
            <Link style={{"text-decoration":"none","color":"rgb(78,79,80)"}} className="Link" to="/bookmark">
              <h6><i className="fa fa-bookmark" /> Bookmark</h6>
            </Link>
          </div>
        </Row>
        <Row>
          <div className="mb-3">
            <Link style={{"text-decoration":"none","color":"rgb(78,79,80)"}} className="Link" to="/bookmark">
              <h6><i className="fa fa-history" /> History</h6>
            </Link>
          </div>
        </Row>
      </Col>
  );
}

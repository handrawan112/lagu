import React from "react";

import {Row,Col} from "reactstrap";

import "./RightStyle.css";

import {listLaguContext,errorContext} from "../../context";

export default function Right(){

let error=React.useContext(errorContext);
let lagu=React.useContext(listLaguContext);

if(error===undefined){
  return (
      <Col className="RightBG" sm="10" md="10">
      <Row>
        {lagu===undefined?null:<div className="ml-3 mt-3">Ditemukan 1 dari {lagu.items.filter((item)=>item.id.videoId===undefined?null:item).length} Daftar musik</div>}
      </Row>
      <Row>
        {
          lagu===undefined?null:lagu.items.filter((item)=>item.id.videoId===undefined?null:item).map((item)=>{
            return (
              <Col sm="6" md="4" className="text-center mt-4">
                <img src={item.snippet.thumbnails.high.url} width="350" height="400" alt="image" />
                <h5>{item.snippet.title}</h5>
                <div>Diupload oleh : {item.snippet.channelTitle}</div>
                <div>Published time : {new Date(item.snippet.publishedAt).toLocaleDateString()+" "+new Date(item.snippet.publishedAt).toLocaleTimeString()}</div>
              </Col>
            );
          })
        }
        </Row>
      </Col>
  );
}else{
  return (
      <Col className="ErrorBG" sm="10" md="10">
        <h3>{error}</h3>
      </Col>
  );
}

}

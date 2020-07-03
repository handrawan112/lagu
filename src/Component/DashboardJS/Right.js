import React from "react";

import {Row,Col} from "reactstrap";

import "./RightStyle.css";

import {storeContext} from "../../context";
import {BTNBookmark} from "../Storage/storageContext";
import ModalToggle from "../ModalVideo";

export default function Right(){

let lagu=React.useContext(storeContext);

if(lagu.LIST_LAGU_ERROR===undefined){
  return (
      <Col className="RightBG" sm="10" md="10">
      <Row>
        {lagu===undefined?null:<div className="ml-3 mt-3">Ditemukan 1 dari {lagu.LIST_LAGU===undefined?null:lagu.LIST_LAGU.items.filter((item)=>item.id.videoId===undefined?null:item).length} Daftar musik</div>}
      </Row>
      <Row>
        {
          lagu===undefined?null:lagu.LIST_LAGU===undefined?null:lagu.LIST_LAGU.items.filter((item)=>item.id.videoId===undefined?null:item).map((item)=>{

            return (
              <Col sm="6" md="4" className="text-center mt-4">
                {/*
                  <iframe title={item.id.videoId} src={`https://www.youtube.com/embed/${item.id.videoId}?controls=1`} style={{"border":"none"}} width="350" height="300"></iframe>
                */}
                <img src={item.snippet.thumbnails.high.url} width="350" height="300" alt="foto" />
                <h5>{
                  window.localStorage?
                  <BTNBookmark keyId={item.id.videoId} value={item} initName={"Bookmark"} />:null
                } {item.snippet.title}</h5>
                <div>Diupload oleh : {item.snippet.channelTitle}</div>
                <div>Published time : {new Date(item.snippet.publishedAt).toLocaleDateString()+" "+new Date(item.snippet.publishedAt).toLocaleTimeString()}</div>
                <ModalToggle videoId={item.id.videoId} titleHeader={item.snippet.title} date={item.snippet.publishedAt} />

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
        <h3>{lagu.ERROR}</h3>
      </Col>
  );
}

}

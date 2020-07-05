import React from "react";

import {Row,Col} from "reactstrap";

import "./RightStyle.css";

import {storeContext} from "../../context";
import {BTNBookmark} from "../Storage/storageContext";

import DownloadMP3 from "../Fitur/DownloadMp3";
import DownloadMP4 from "../Fitur/DownloadMp4";

import ModalToggle from "../ModalVideo";

export default function Right(){

let lagu=React.useContext(storeContext);

if(lagu.LIST_LAGU_ERROR===undefined){
  return (
      <Col className="RightBG" xs="12" sm="12" md="9" lg="10">
      <Row>
        {lagu===undefined?null:<div className="ml-3 mb-3">Ditemukan 1 dari {lagu.LIST_LAGU===undefined?null:lagu.LIST_LAGU.items.filter((item)=>item.id.videoId===undefined?null:item).length} Daftar musik</div>}
      </Row>
      <Row>
        {
          lagu===undefined?null:lagu.LIST_LAGU===undefined?null:lagu.LIST_LAGU.items.filter((item)=>item.id.videoId===undefined?null:item).map((item)=>{

            return (
              <Col xs="12" sm="6" md="4" className="text-center mt-4 p-2">
                {/*
                  <iframe title={item.id.videoId} src={`https://www.youtube.com/embed/${item.id.videoId}?controls=1`} style={{"border":"none"}} width="350" height="300"></iframe>
                */}
                {
                  window.matchMedia("(max-width:768px)").matches?
                    <img src={item.snippet.thumbnails.high.url} width="65%" height="50%" alt="foto" />
                  :
                    <img src={item.snippet.thumbnails.high.url} width="325px" height="300px" alt="foto" />
                }

                <div>{
                  window.localStorage?
                  <BTNBookmark keyId={item.id.videoId} value={item} initName={"Bookmark"} />:null
                } {item.snippet.title} </div>

                <div>Diupload oleh : {item.snippet.channelTitle}</div>
                <div>Published time : {new Date(item.snippet.publishedAt).toLocaleDateString()+" "+new Date(item.snippet.publishedAt).toLocaleTimeString()}</div>
                <ModalToggle videoId={item.id.videoId} titleHeader={item.snippet.title} date={item.snippet.publishedAt} />
                <DownloadMP3 videoId={item.id.videoId} />
                <DownloadMP4 videoId={item.id.videoId} />
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

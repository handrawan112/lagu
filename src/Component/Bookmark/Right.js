import React from "react";


import {updateContext,storeContext} from "../../context";
import {GetDataBookmarkContextStorage} from "../Storage/storageContext";

import {Row,Col} from "reactstrap";
import ModalToggle from "../ModalVideo";
import {BTNBookmark} from "../Storage/storageContext";

import DownloadMP3 from "../Fitur/DownloadMp3";
import DownloadMP4 from "../Fitur/DownloadMp4";

export default function Bookmark(){

let update=React.useContext(updateContext);
let data=React.useContext(storeContext);

React.useEffect(()=>{
  update({BookmarkLocal:{
    BookmarkLocal:GetDataBookmarkContextStorage().bookmark
    }
  });
},[update]);

if(window.localStorage){

  if(data.BookmarkLocal===undefined){
    return (
      <Col sm="10" md="10" className="mt-3 mb-3">
        No data is empty
      </Col>
    );
  }else{
    return (
      <Col sm="10" md="9" lg="10" className="mt-3 mb-3 RightBGBookmark">
        <Row>
          <Col sm="12" md="12" align="center">
            <h3>Lagu Favorite</h3>
          </Col>
        </Row>
        <Row>
        {
          Object.keys(GetDataBookmarkContextStorage().bookmark).length<=0?<div className="m-3" align="center"><h3>No data - Data is empty</h3></div>:Object.values(GetDataBookmarkContextStorage().bookmark).map((item,index)=>{

            return (
              <React.Fragment>
                <Col sm="3" md="3" className="m-1">
                  <img src={item.snippet===undefined?"/assets/favicon.ico":item.snippet.thumbnails.high.url} width="100%" height="100%" alt="foto" />
                  {/*
                    <iframe title={item.id.videoId} src={`https://www.youtube.com/embed/${item.id.videoId}?controls=1`} width="100%" height="100%" style={{"border":"none"}}></iframe>
                  */}
                </Col>
                <Col sm="8" md="8" className="m-1">
                  <h5>{
                    window.localStorage?
                    <BTNBookmark keyId={item.id.videoId} value={item} initName={"Bookmark"} />:null
                  } {item.snippet.title}</h5>
                  <div>Diupload oleh : {item.snippet.channelTitle}</div>
                  <div>Published time : {new Date(item.snippet.publishedAt).toLocaleDateString()+" "+new Date(item.snippet.publishedAt).toLocaleTimeString()}</div>
                  <div>
                    <ModalToggle videoId={item.id.videoId} titleHeader={item.snippet.title} date={item.snippet.publishedAt} />
                    <DownloadMP3 videoId={item.id.videoId} />
                    <DownloadMP4 videoId={item.id.videoId} />
                  </div>
                  <q>{item.snippet.description}</q>

                </Col>
              </React.Fragment>
            );
          })
        }
        </Row>
      </Col>
    );
  }

}else{
  return (
    <React.Fragment>
      <div className="m-3" align="center">
        <h4>Your browser not support for activated this fitur</h4>
        <div>Please upgrade your browser</div>
      </div>
    </React.Fragment>
  )
}

}

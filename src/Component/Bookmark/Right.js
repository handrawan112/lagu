import React from "react";


import {updateContext,storeContext} from "../../context";
import {GetDataBookmarkContextStorage} from "../Storage/storageContext";

import {Row,Col} from "reactstrap";

export default function Bookmark(){

let update=React.useContext(updateContext);
let data=React.useContext(storeContext);

React.useEffect(()=>{
  update({BookmarkLocal:GetDataBookmarkContextStorage().bookmark});
},[update]);

console.log(data.BookmarkLocal);

if(window.localStorage){

  if(data.BookmarkLocal===undefined){
    return (
      <Col sm="10" md="10" className="mt-3 mb-3">
        No data is empty
      </Col>
    );
  }else{
    return (
      <Col sm="10" md="10" className="mt-3 mb-3">
        <Row>
          <Col sm="12" md="12" align="center">
            <h3>Bookmark</h3>
          </Col>
        </Row>
        <Row style={{"max-height":"87.5vh","overflow":"auto"}}>
        {
          Object.keys(data.BookmarkLocal).length<=0?<div className="m-3" align="center"><h3>No data - Data is empty</h3></div>:Object.values(data.BookmarkLocal).map((item,index)=>{

            return (
              <React.Fragment>
                <Col sm="3" md="3" className="m-1">
                  <iframe title={item.id.videoId} src={`https://www.youtube.com/embed/${item.id.videoId}?controls=1`} width="100%" height="100%" style={{"border":"none"}}></iframe>
                </Col>
                <Col sm="8" md="8" className="m-1">
                  <h5>{item.snippet.title}</h5>
                  <div>Diupload oleh : {item.snippet.channelTitle}</div>
                  <div>Published time : {new Date(item.snippet.publishedAt).toLocaleDateString()+" "+new Date(item.snippet.publishedAt).toLocaleTimeString()}</div>
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

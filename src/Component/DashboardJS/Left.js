import React from "react";

import {Row,Col,Button} from "reactstrap";
import "./LeftStyle.css";

import {storeContext,updateContext,urlContext,apiContext} from "../../context";
import {Link,useRouteMatch} from "react-router-dom";

import {GetDataBookmarkContextStorage,SaveHistoryContextStorage,CheckedHistoryContextStorage,GetDataHistoryContextStorage} from "../Storage/storageContext";
import axios from "axios";

export default function Left(){

let {path}=useRouteMatch();

//global context
let API_YT=React.useContext(apiContext);
let baseUrl=React.useContext(urlContext);
let lagu=React.useContext(storeContext);
let update=React.useContext(updateContext);
//global context

const [search,setSearch]=React.useState("musik indonesia");

const stringify=React.useCallback((handrawan)=>{
  var temp=[];
  for(var i in handrawan){
    temp.push(i+"="+handrawan[i]);
    temp.push("&");}
    temp.pop();
    return temp.join("").toString();
},[]);

const getLaguList=React.useCallback(()=>{
  update({BookmarkLocal:{BookmarkLocal:GetDataBookmarkContextStorage().bookmark}})
  let params={
    part:"snippet",
    key:API_YT,
    maxResults:50,
    q:search,
  };
  axios({
    url:`${baseUrl}?${stringify(params)}`,
    method:"GET",
  }).then(({data})=>{
    update({type:"LIST_LAGU",LIST_LAGU:data});
  }).catch(err=>{
    let msg="";
    if(err.response.data.message===undefined){
      msg=err.message;
    }else{
      msg=err.response.data.message;
    }
    update({type:"ERROR",ERROR:msg});
  });
},[baseUrl,stringify,API_YT,search,update]);

React.useEffect(()=>{
  getLaguList();
},[getLaguList]);

const getLagu=React.useCallback((e)=>{
  e.preventDefault();
  getLaguList();
  if(!CheckedHistoryContextStorage()){
    SaveHistoryContextStorage(window.btoa(search),search,"History");
  }
},[getLaguList,search]);

const handleSearch=React.useCallback((e)=>{
  setSearch(e.target.value);
},[setSearch]);

  return (
      <Col className="LeftBG" sm="12" md="2">
        <Row>
          <div className="mb-3">
            <h5 style={{"pointer-events":"none"}}>WoaTube Downloader</h5>
          </div>
        </Row>
        <Row>
        <form onSubmit={getLagu}>
          <div className="mb-3">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Once - Aku Mau" onInput={handleSearch} />
              <div class="input-group-prepend">
                <Button color="dark" class="input-group-text"><i className="fa fa-search" /></Button>
              </div>
            </div>
          </div>
        </form>
        </Row>
        <Row>
          <div className="mb-3">
            <Link style={{"text-decoration":"none","color":"rgb(78,79,80)"}} className="Link" to={`${path}`}>
              <h6><i className="fa fa-home" />Home <span className="badge badge-dark">{lagu.LIST_LAGU===undefined?null:lagu.LIST_LAGU.items.filter((item)=>item.id.videoId===undefined?null:item).length} Lagu</span></h6>
            </Link>
          </div>
        </Row>
        <Row>
          <div className="mb-3">
            <Link style={{"text-decoration":"none","color":"rgb(78,79,80)"}} className="Link" to={`${path}/bookmark`}>
              <h6><i className="fa fa-bookmark" /> Favorite <span className="badge badge-dark">{Object.keys(GetDataBookmarkContextStorage().bookmark).length}</span></h6>
            </Link>
          </div>
        </Row>
        <Row>
          <div className="mb-3">
            <Link style={{"text-decoration":"none","color":"rgb(78,79,80)"}} className="Link" to={`${path}/history`}>
              <h6><i className="fa fa-history" /> History <span className="badge badge-dark">{Object.keys(GetDataHistoryContextStorage().history).length}</span></h6>
            </Link>
          </div>
        </Row>
      </Col>
  );
}

//tested

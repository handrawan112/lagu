import React from "react";

import {Row,Col,Button} from "reactstrap";
import "./LeftStyle.css";

import {listLaguContext,updateContext,urlContext,apiContext} from "../../context";
import {Link} from "react-router-dom";

import axios from "axios";

export default function Left(){

//global context
let API_YT=React.useContext(apiContext);
let baseUrl=React.useContext(urlContext);
let lagu=React.useContext(listLaguContext);
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

const getLagu=React.useCallback((e)=>{
  e.preventDefault();
  getLaguList();
},[getLaguList]);

React.useEffect(()=>{
  getLaguList();
},[getLaguList]);

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

//tested

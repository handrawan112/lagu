import React from "react";

import {Row,Col,Button,Collapse} from "reactstrap";
import "./LeftStyle.css";

import {storeContext,updateContext,urlContext,apiContext} from "../../context";
import {Link,useRouteMatch,useHistory} from "react-router-dom";
import Lagu from "../listLagu.json";

import {GetDataBookmarkContextStorage,SaveHistoryContextStorage,CheckedHistoryContextStorage,GetDataHistoryContextStorage} from "../Storage/storageContext";
import axios from "axios";

export default function Left(){

let {path}=useRouteMatch();
let history=useHistory();

//global context
let API_YT=React.useContext(apiContext);
let baseUrl=React.useContext(urlContext);
let lagu=React.useContext(storeContext);
let update=React.useContext(updateContext);
//global context

const [search,setSearch]=React.useState("musik indonesia");
const [collapseX,setCollapseX]=React.useState(false);
const toggleCollapse=()=>{
  setCollapseX(!collapseX);
};


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
    url:`${baseUrl}/?${stringify(params)}`,
    method:"GET",
  }).then(({data})=>{
    history.push("/lagu");
    update({type:"LIST_LAGU",LIST_LAGU:data});
  }).catch(err=>{
    let msg="";
    try {
      if(err.response.data.message===undefined){
        msg=err.message;
      }else{
        msg=err.response.data.message;
      }
    } catch (e) {
      if(err.response===undefined){
        msg=err.message;
      }else{
        msg=err.response.data.message;
      }
    } finally {
      update({LIST_LAGU_ERROR:true,ERROR:msg});
    }
  });
},[baseUrl,stringify,API_YT,search,update,history]);

React.useEffect(()=>{
  update({type:"LIST_LAGU",LIST_LAGU:Lagu});
},[update]);

const getLagu=React.useCallback((e)=>{
  e.preventDefault();
  getLaguList();
  if(!CheckedHistoryContextStorage()){
    SaveHistoryContextStorage(window.btoa(search),search,"History");
  }
},[getLaguList,search]);

const handleSearch=(e)=>{
  setSearch(e.target.value);
};


  return (
      <Col className="LeftBG" xs="12" sm="12" md="3" lg="2">
        <Row>
          <Col xs="9" sm="9" md="12" lg="12">
              <div style={{"pointer-events":"none","font-size":"1.1em"}}>WoaTube Downloader</div>
          </Col>
          <Col xs="3" sm="3" md="12" lg="12" align="center">
            <div className="mb-3">
              <button className="btn-collapse btn btn-dark" onClick={toggleCollapse}><i className="fa fa-list" /> </button>
            </div>
          </Col>
        </Row>

        {
          window.matchMedia("(max-width:768px)").matches?
          <Collapse isOpen={collapseX}>
            <ListRow
              path={path}
              getLagu={getLagu}
              lagu={lagu}
              handleSearch={handleSearch}
             />
          </Collapse>
          :<ListRow
            path={path}
            getLagu={getLagu}
            lagu={lagu}
            handleSearch={handleSearch}
          />
        }

      </Col>
  );
}

function ListRow(props){

  return (
    <React.Fragment>
    <Row>
    <Col xs="12" sm="12" md="12" style={{"padding":"0"}}>
    <form onSubmit={props.getLagu}>
      <div className="mb-3">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Once - Aku Mau" onChange={props.handleSearch} required />
          <div class="input-group-prepend">
            <Button color="dark" class="input-group-text"><i className="fa fa-search" /></Button>
          </div>
        </div>
      </div>
    </form>
    </Col>
    </Row>

    <Row>
      <div className="mb-3">
        <Link style={{"text-decoration":"none","color":"rgb(78,79,80)"}} className="Link" to={`${props.path}`}>
          <h6><i className="fa fa-home" />Home
          {/*
            <span className="badge badge-dark">{lagu.LIST_LAGU===undefined?null:lagu.LIST_LAGU.items.filter((item)=>item.id.videoId===undefined?null:item).length} Lagu</span>
          */}
          {props.lagu===undefined?null:null}
          </h6>
        </Link>
      </div>
    </Row>

    <Row>
      <div className="mb-3">
        <Link style={{"text-decoration":"none","color":"rgb(78,79,80)"}} className="Link" to={`${props.path}/bookmark`}>
          <h6><i className="fa fa-bookmark" /> Favorite <span className="badge badge-dark">{Object.keys(GetDataBookmarkContextStorage().bookmark).length}</span></h6>
        </Link>
      </div>
    </Row>
    <Row>
      <div className="mb-3">
        <Link style={{"text-decoration":"none","color":"rgb(78,79,80)"}} className="Link" to={`${props.path}/history`}>
          <h6><i className="fa fa-history" /> History <span className="badge badge-dark">{Object.keys(GetDataHistoryContextStorage().history).length}</span></h6>
        </Link>
      </div>
    </Row>
    </React.Fragment>
  );
}

//tested

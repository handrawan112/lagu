import React from "react";

import {Row,Col} from "reactstrap";

import {updateContext,storeContext} from "../../context";
import {GetDataHistoryContextStorage,RemoveHistoryContextStorage} from "../Storage/storageContext";
import "./Right.css";

export default function Right(){

  let store=React.useContext(storeContext);
  let update=React.useContext(updateContext);

  const removeHistory=React.useCallback((key)=>{
    update({RefreshHistory:true});
    RemoveHistoryContextStorage(key);
  },[update]);


  return (
    <Col sm="10" md="10" className="RightBGHistory">
      <Row>
          <Col className="mt-3" sm="10" md="9" lg="10" align="center">
            <h3>History Pencarian</h3>
            <div className="breadcrumb" style={{"background":"none"}}>
              <a href={`#lagu`} className="breadcrumb-item">lagu</a>
              <a href={`#history`} className="breadcrumb-item">history</a>
            </div>
          </Col>
      </Row>
      <Row style={{"max-height":"80vh","overflow":"auto"}}>
      {store===undefined?null:null}
      {Object.values(GetDataHistoryContextStorage().history).length<=0?<h3 className="ml-3">No history is empty</h3>:Object.values(GetDataHistoryContextStorage().history).map((item,index)=>{
        return (
          <React.Fragment>
            <Col className="mt-1" xs="9" sm="9" md="9" style={{"max-height":"85vh","overflow":"auto"}}>
            ({index+1}) {item}
            </Col>
            <Col className="mt-1" xs="9" sm="2" md="2">
              <button onClick={()=>removeHistory(window.btoa(item))} className="badge badge-dark" style={{"border":"none","padding":"12px"}}><i className="fa fa-trash" /></button>
            </Col>
          </React.Fragment>
        );
      })
      }
      </Row>
    </Col>
  );
}

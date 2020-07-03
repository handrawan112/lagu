import React from "react";

import {Row,Col} from "reactstrap";

import {updateContext,storeContext} from "../../context";
import {GetDataHistoryContextStorage,RemoveHistoryContextStorage} from "../Storage/storageContext";

export default function Right(){

  let store=React.useContext(storeContext);
  let update=React.useContext(updateContext);

  const removeHistory=React.useCallback((key)=>{
    update({RefreshHistory:true});
    RemoveHistoryContextStorage(key);
  },[update]);


  return (
    <Col sm="10" md="10">
      <Row>
          <Col className="mt-3" sm="12" md="12" align="center">
            <h3>History Pencarian</h3>
            <div className="breadcrumb" style={{"background":"none"}}>
              <a href={`#lagu`} className="breadcrumb-item">lagu</a>
              <a href={`#history`} className="breadcrumb-item">history</a>
            </div>
          </Col>
      </Row>
      <Row style={{"max-height":"87.5vh","overflow":"auto"}}>
      {store===undefined?null:null}
      {Object.values(GetDataHistoryContextStorage().history).length<=0?<h3 className="ml-3">No history is empty</h3>:Object.values(GetDataHistoryContextStorage().history).map((item,index)=>{
        return (
          <React.Fragment>
            <Col className="mt-3" sm="11" md="11" style={{"max-height":"85vh","overflow":"auto"}}>
            ({index+1}) {item}
            </Col>
            <Col className="mt-2" sm="1" md="1" align="center">
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

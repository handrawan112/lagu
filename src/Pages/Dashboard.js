import React from "react";

import {Container,Row} from "reactstrap";

import Left from "../Component/DashboardJS/Left";
import Right from "../Component/DashboardJS/Right";

import {storeContext,listLaguContext,historyContext,bookmarkContext,updateContext} from "../context";
import {ContextData,dataContext} from "../Component/reducer";

export default function Dashboard(){

let [state,dispatch]=React.useReducer(ContextData,dataContext);

  return (
    <updateContext.Provider value={dispatch}>
    <storeContext.Provider value={[]}>
    <listLaguContext.Provider value={state.LIST_LAGU}>
      <historyContext.Provider value={state.HISTORY}>
        <bookmarkContext.Provider value={state.BOOKMARK}>
          <Container fluid>
            <Row>
              <Left />
              <Right />
            </Row>
          </Container>
        </bookmarkContext.Provider>
      </historyContext.Provider>
    </listLaguContext.Provider>
    </storeContext.Provider>
    </updateContext.Provider>
  );

}

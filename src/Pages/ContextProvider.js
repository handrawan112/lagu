import React from "react";

import {storeContext,listLaguContext,historyContext,bookmarkContext,updateContext,errorContext} from "../context";
import {ContextData,dataContext} from "../Component/reducer";

export default function ProviderContext(props){

let [state,dispatch]=React.useReducer(ContextData,dataContext);

  return (
    <updateContext.Provider value={dispatch}>
      <errorContext.Provider value={state.ERROR}>
        <storeContext.Provider value={[]}>
          <listLaguContext.Provider value={state.LIST_LAGU}>
            <historyContext.Provider value={state.HISTORY}>
              <bookmarkContext.Provider value={state.BOOKMARK}>
                  {props.children}
              </bookmarkContext.Provider>
            </historyContext.Provider>
          </listLaguContext.Provider>
        </storeContext.Provider>
      </errorContext.Provider>
    </updateContext.Provider>
  );

}

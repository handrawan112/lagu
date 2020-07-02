import React from "react";

import {storeContext,updateContext} from "../context";
let stateX={
  LIST_LAGU:undefined,
  LIST_LAGU_ERROR:undefined
};

export default function ProviderContext(props){
let [state,dispatch]=React.useReducer((state,newValue)=>({...state,...newValue}),stateX);

  return (
    <updateContext.Provider value={dispatch}>
        <storeContext.Provider value={state}>
          {props.children}
        </storeContext.Provider>
    </updateContext.Provider>
  );

}

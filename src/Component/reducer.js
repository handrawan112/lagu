export let dataContext={
  LIST_LAGU:undefined,
  BOOKMARK:undefined,
  HISTORY:undefined
};

export function ContextData(state,action){

  switch (action.type){
    case "LIST_LAGU":
      return {LIST_LAGU:action.LIST_LAGU};
    case "BOOKMARK":
      return {BOOKMARK:action.BOOKMARK};
    case "HISTORY":
      return {HISTORY:action.HISTORY};
    default:
      break;
  }

}

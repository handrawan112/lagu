import React from "react";
import Swal from "sweetalert2";

import {updateContext} from "../../context";

//Bookmark storage
export function SaveBookmarkContextStorage(key,value,initName){
let initData=JSON.parse(localStorage.getItem("bookmark"))||{bookmark:{}};
  if(Object.keys(initData["bookmark"]).includes(key)){
    Swal.fire({
      icon:"error",
      title:`Storage for key ${window.btoa(key)}`,
      text:`Saved failed`,
      timer:10000
    })
  }else{
    initData["bookmark"][key]=value;
    Swal.fire({
      icon:"success",
      title:`Storage for key ${window.btoa(key)}`,
      text:`Saved success`,
      timer:10000
    })
  }
  localStorage.setItem("bookmark",JSON.stringify(initData));
}

export function RemoveBookmarkContextStorage(key){
  let initData=JSON.parse(localStorage.getItem("bookmark"))||{bookmark:{}};
  if(Object.keys(initData["bookmark"]).includes(key)){
    Swal.fire({
      icon:"success",
      title:`Storage for key ${window.btoa(key)}`,
      text:`Deleted success`,
      timer:10000
    });
    delete initData["bookmark"][key];
  }
  localStorage.setItem("bookmark",JSON.stringify(initData));
}

export function CheckedBookmarkContextStorage(key){
  let initData=JSON.parse(localStorage.getItem("bookmark"))||{bookmark:{}};
  if(Object.keys(initData["bookmark"]).includes(key)){
    return true;
  }
  return false;
}

export function GetDataBookmarkContextStorage(){
  let initData=JSON.parse(localStorage.getItem("bookmark"))||{bookmark:{}};
  return initData;
}

export function BTNBookmark(props){
let update=React.useContext(updateContext);

let removeBookmark=React.useCallback(()=>{
  const keyId=props.keyId;
  update({RefreshBookmark:true});
  RemoveBookmarkContextStorage(keyId);
},[props.keyId,update]);

let addBookmark=React.useCallback(()=>{
  const keyId=props.keyId,value=props.value,initName=props.initName;
  update({RefreshBookmark:true});
  SaveBookmarkContextStorage(keyId,value,initName);
},[props.keyId,props.value,props.initName,update]);

if(CheckedBookmarkContextStorage(props.keyId)){

  return (
    <button className="p-1 badge badge-soft-success" style={{"border":"none"}} onClick={()=>removeBookmark()}><i className="fa fa-bookmark text-primary" /> Unsave</button>
  );
}else{

  return (
    <button className="p-1 badge badge-soft-success" style={{"border":"none"}} onClick={()=>addBookmark()}><i className="fa fa-star text-primary" /> Save</button>
  );
}
}
//Bookmark storage

//History storage
export function SaveHistoryContextStorage(key,value,initName){
let initData=JSON.parse(localStorage.getItem("bookmark"))||{bookmark:{}};
  if(Object.keys(initData["bookmark"]).includes(key)){
    Swal.fire({
      icon:"error",
      title:`Storage for key ${window.btoa(key)}`,
      text:`Saved failed`,
      timer:10000
    })
  }else{
    initData["bookmark"][key]=value;
    Swal.fire({
      icon:"success",
      title:`Storage for key ${window.btoa(key)}`,
      text:`Saved success`,
      timer:10000
    })
  }
  localStorage.setItem("bookmark",JSON.stringify(initData));
}

export function RemoveHistoryContextStorage(key){
  let initData=JSON.parse(localStorage.getItem("bookmark"))||{bookmark:{}};
  if(Object.keys(initData["bookmark"]).includes(key)){
    Swal.fire({
      icon:"success",
      title:`Storage for key ${window.btoa(key)}`,
      text:`Deleted success`,
      timer:10000
    });
    delete initData["bookmark"][key];
  }
  localStorage.setItem("bookmark",JSON.stringify(initData));
}

export function CheckedHistoryContextStorage(key){
  let initData=JSON.parse(localStorage.getItem("bookmark"))||{bookmark:{}};
  if(Object.keys(initData["bookmark"]).includes(key)){
    return true;
  }
  return false;
}

export function GetDataHistoryContextStorage(){
  let initData=JSON.parse(localStorage.getItem("bookmark"))||{bookmark:{}};
  return initData;
}

export function BTNHistory(props){
let update=React.useContext(updateContext);

let removeBookmark=React.useCallback(()=>{
  const keyId=props.keyId;
  update({RefreshBookmark:true});
  RemoveBookmarkContextStorage(keyId);
},[props.keyId,update]);

let addBookmark=React.useCallback(()=>{
  const keyId=props.keyId,value=props.value,initName=props.initName;
  update({RefreshBookmark:true});
  SaveBookmarkContextStorage(keyId,value,initName);
},[props.keyId,props.value,props.initName,update]);

if(CheckedBookmarkContextStorage(props.keyId)){

  return (
    <button className="p-1 badge badge-soft-success" style={{"border":"none"}} onClick={()=>removeBookmark()}><i className="fa fa-bookmark text-primary" /> Unsave</button>
  );
}else{

  return (
    <button className="p-1 badge badge-soft-success" style={{"border":"none"}} onClick={()=>addBookmark()}><i className="fa fa-star text-primary" /> Save</button>
  );
}
}
//History storage

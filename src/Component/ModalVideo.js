import React from "react";

import {Modal,ModalHeader,ModalBody,ModalFooter} from "reactstrap";

export default function ModalToggle(props){

  const [modalToggle,setModalToggle]=React.useState(false);

  const hideModal=()=>{
    setModalToggle(!modalToggle);
  };

  return (
    <React.Fragment>
    {
      props.videoId===undefined?null:
      <button className="ml-2 btn badge btn-dark" style={{"border":"none"}} onClick={()=>setModalToggle(!modalToggle)}><i className="fa fa-play" /> Play</button>
    }
    <Modal isOpen={modalToggle}>
      <ModalHeader style={{"background-color":"#EFE2BA"}} toggle={hideModal}><h4>{props.titleHeader===undefined?null:props.titleHeader}</h4></ModalHeader>
      <ModalBody align="center">
        <iframe title={props.videoId} style={{"position":"relative","border":"none"}}  width="350" height="300" src={`https://www.youtube.com/embed/${props.videoId}?controls=1&rel=0&autoplay=1`} allowfullscreen></iframe>
      </ModalBody>
      <ModalFooter>
          Published Time : {props.date===undefined?null:new Date(props.date).toLocaleDateString()+" "+new Date(props.date).toLocaleTimeString()}
      </ModalFooter>
    </Modal>
    </React.Fragment>
  );
}

import React from "react";

export default function DownloadMP3(props){

  const redirectDownload=()=>{
    window.open(`https://recordmp3.co/#/watch?v=${props.videoId}`);
  };

if(props.videoId===undefined){
  return (
    null
  );
}else{
  return (
    <button style={{"position":"relative","border":"none"}} onClick={redirectDownload} className="badge badge-dark ml-3"><i className="fa fa-download" /> MP3</button>
  );
}

}

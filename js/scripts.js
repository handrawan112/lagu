"use strict";
try{

function waktu(){
document.querySelector("#info-waktu").innerText=(new Date().toLocaleTimeString());
}
setInterval(waktu,500);
document.querySelector("#info-visitor").innerText=navigator.platform;
}catch(e){
alert("Error at file Index.html : Error => "+e);
}
try{
$("form").submit(function(e){
e.preventDefault();
var kt=$("#carix").val();

document.querySelector(".loading").className="d-block loading spinner-grow card-text";
document.querySelector("#hasil-pencarian").className="d-none card-text woa-hasil-batas ";

document.getElementById("hasil-pencarian").style.display="none";

var params={
part:"snippet",
key:"AIzaSyDdaea_oi7oBeBWgsublBVmD8pytmFzsto",
maxResults:50,
q:kt,
};
var url="https://www.googleapis.com/youtube/v3/search?"+stringify(params);

$.getJSON(url,function(res){
var results=res.items,vid=[],ket=[],cket=[],imgs=[];
results.map((out)=>{
vid.push(out.id.videoId);
ket.push(out.snippet.title);
cket.push(out.snippet.channelTitle);
imgs.push("https://i.ytimg.com/vi/"+out.id.videoId+"/hqdefault.jpg");
});
var hasil="",c=0,jum=[];
for(var i in vid){
if(typeof vid[i]!=="undefined"){
c++;
hasil+="<h1>"+c+"||"+ket[i]+"</h1><br>";
hasil+="<img src='https://i.ytimg.com/vi/"+vid[i]+"/hqdefault.jpg' alt='gambar'/><br>";
hasil+= "<b>Dikirim oleh : "+cket[i]+"</b><br>";
hasil+="<a href='javascript:window.open(\"https://www.youtube.com/watch?v="+vid[i]+"\");'> Lihat Video </a>";
hasil+="<br><a href='javascript:window.open(\"https://www.ssyoutube.com/watch?v="+vid[i]+"\");'> Unduh Video </a> |";
hasil+="|<a href='javascript:window.open(\"https://www.recordmp3.co/#/watch?v=​"+vid[i]+"\");'> Unduh MP3 </a><br><br>";
jum.push(vid[i]);

}
}
document.querySelector("#hasil-pencarian").innerHTML=hasil;
document.querySelector(".status").innerText="Ditemukan 1 dari "+jum.length;
document.querySelector(".loading").className="d-none loading spinner-grow card-text";
document.getElementById("hasil-pencarian").style.display="block";
document.querySelector("#hasil-pencarian").className="d-block card-text woa-hasil-batas ";

});

/*https://i.ytimg.com/vi/idvideo/hqdefault.jpg*/
//end form
});
//end
function stringify(handrawan){var temp=[];for(var i in handrawan){temp.push(i+"="+handrawan[i]);temp.push("&");}temp.pop();return temp.join("").toString();}

}catch(e){
alert("Error socket :  "+e);
}


"use strict";
try{
var yx=0;
function cek(){
var dim=document.getElementById("carix").value;
if(dim.length>0){

}else{
animTulis("carix",{
"Ketik katakunci disini  ":"Lalu klik tombol search =>  ",
});

}}
setInterval(cek,7000);
cek();
function animTulis(id,mrp){
if(typeof id==="string"&&typeof mrp==="object"){
var x=document.getElementById(id);
var y=0,yxy=false,prm=Object.entries(mrp).toString().split(",");
var xy=setInterval(tulisAnim,20);
function tulisAnim(){
if(y===prm[yx].length){
clearInterval(xy);
setTimeout(function(){
if(yx===prm.length-1){
yx=0;
y=0;
clearInterval(xy);
}else{
yx+=1;
y=0;
}

},1000);
}else{
x.placeholder=prm[yx].substring(0,y);
y++;
}
}

//end
}}

animTulis("pesanWeb",{
"Hallo":"Wawan",
});


}catch(e){
alert("Hubungi Developer => Error:Anim "+e);
}




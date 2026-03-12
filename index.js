var brd = document.getElementById("brd");
var propil = document.getElementById("propil");
var ark = document.getElementById("ark");
var fotofoto = document.getElementById("fotofoto");
var video = document.getElementById("video");
var po = document.getElementById("po");
var ii = document.getElementById("ii");
var ia = document.getElementById("ia");
var io = document.getElementById("io");
var ie = document.getElementById("ie");
var api = document.getElementById("api")
var manc = document.getElementById("manc");
var miaw = document.getElementById("miaw");
var apip = document.getElementById("apip");
var manca = document.getElementById("manca");
var regi = document.getElementById("regi");
po.addEventListener("click",function(){
    brd.style.display="block";
    propil.style.display="none";
    ark.style.display="none";
    fotofoto.style.display="none";
    video.style.display="none";
})
ii.addEventListener("click",function(){
    propil.style.display="block";
    brd.style.display="none";
    ark.style.display="none";
    fotofoto.style.display="none";
    video.style.display="none";
})
ia.addEventListener("click",function(){
    propil.style.display="none";
    brd.style.display="none";
    ark.style.display="block";
    fotofoto.style.display="none";
    video.style.display="none";
})
io.addEventListener("click",function(){
    propil.style.display="none";
    brd.style.display="none";
    ark.style.display="none";
    fotofoto.style.display="block";
    video.style.display="none";
})
ie.addEventListener("click",function(){
    propil.style.display="none";
    brd.style.display="none";
    ark.style.display="none";
    fotofoto.style.display="none";
    video.style.display="block";
})
api.addEventListener("click",function(){
    apip.style.display="block";
    manca.style.display="none";
    regi.style.display="none";
})
manc.addEventListener("click",function(){
    apip.style.display="none";
    manca.style.display="block";
    regi.style.display="none";
})
miaw.addEventListener("click",function(){
    apip.style.display="none";
    manca.style.display="none";
    regi.style.display="block";
})
let video = document.getElementById("bgvideo")

function toggleSound(){

if(video.muted){
video.muted=false
}else{
video.muted=true
}

}

function downloadVideo(){

let link=document.getElementById("url").value

if(link===""){
alert("Paste YouTube link")
return
}

window.open("https://ssyoutube.com/"+link)

}

function downloadMP3(){

let link=document.getElementById("url").value

if(link===""){
alert("Paste YouTube link")
return
}

window.open("https://en.onlymp3.to/"+link)

}
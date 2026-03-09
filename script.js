function toggleSound(){

let video = document.getElementById("bg-video");
let btn = document.getElementById("soundBtn");

video.muted = !video.muted;

btn.innerHTML = video.muted ? "🔇" : "🔊";

}

async function downloadVideo(){

let url = document.getElementById("url").value;

if(url === ""){
alert("Paste TikTok Link");
return;
}

let api = "https://tikwm.com/api/?url=" + encodeURIComponent(url);

try{

let res = await fetch(api);
let data = await res.json();

if(data.data){

let video = data.data.play;

document.getElementById("result").innerHTML =
`<a href="${video}" target="_blank">Download Video (No Watermark)</a>`;

}else{

document.getElementById("result").innerHTML =
"Video not found";

}

}catch{

document.getElementById("result").innerHTML =
"Error loading video";

}

}
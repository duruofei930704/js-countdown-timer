const christmas = new Date("25 Dec 2021");

function countdown(){
  let now = new Date();
  let differnece = (christmas - now)/1000;
  let days = Math.floor(differnece/3600/24);
  let hours =  Math.floor(differnece/3600)%24;
  let minutes = Math.floor(differnece/60)%60;
  let seconds = Math.floor(differnece)%60;
  let dayEl = document.getElementById('day');   
  let hourEl = document.getElementById('hour'); 
  let minEl = document.getElementById('min'); 
  let secEl = document.getElementById('sec'); 
  dayEl.innerHTML = formatTime(days);
  hourEl.innerHTML = formatTime(hours);
  minEl.innerHTML = formatTime(minutes);
  secEl.innerHTML = formatTime(seconds);
}

function formatTime(time){
  return time<10?`0${time}`:time;
}

setInterval(countdown, 1000);

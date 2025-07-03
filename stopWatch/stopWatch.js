let second = 0;
let interval = 0;

const timeDisplay = document.querySelector('.time-display h2');
const hourBtn = document.getElementById('hourBtn');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

function updateTime(){
    const hour = String(Math.floor(second / 3600)).padStart(2,'0');
    const mins = String(Math.floor(second % 3600/60)).padStart(2,'0');
    const secs = String(second % 60).padStart(2,'0');
    timeDisplay.textContent = `${hour}:${mins}:${secs}`;
    localStorage.setItem('stopwatchTime',second);
}

// load time from localStroage
const saved = localStorage.getItem('stopwatchTime');
if(saved){
    second = parseInt(saved);
}
updateTime();

startBtn.addEventListener('click',()=>{
    if(interval) return;
    interval = setInterval(()=>{
        second++;
        updateTime();

    },1000);
});
stopBtn.addEventListener('click',()=>{
    clearInterval(interval);
    interval = null;
});
resetBtn.addEventListener('click',()=>{
    clearInterval(interval);
    interval = null;
    second = 0;
    updateTime();
    localStorage.removeItem('stopwatchTime');
});
//Variables
let time =0;
let timerID = 0;
let timerFlag = false;

//Elements in a variable
const start = document.getElementById("start");
const reset = document.getElementById("reset");
const timer = document.getElementById("time-display");
//use this function to start the timer

//this function update the timer values

// Start the timer
const initTimer = () => {
    timerFlag =true;
    timerID = setInterval(() => {//to play the function again each second
        time++;
        timerCount();
    }, 1000);
};

const timerCount =() => {
    const min= Math.floor(time/60);
    const sec = time % 60;
    if (sec <10) {
        timer.innerHTML = `${min}:0${sec}`;
    } else {
        timer.innerHTML = `${min}:${sec}`;
    }

};

// stop and clear the timer
const stopTimer = () =>{
clearInterval(timerID);
};

start.addEventListener("click", function(){
    if (timerFlag==false){
        initTimer();
    }
    
});

reset.addEventListener("click", function(){
    stopTimer();
    timerFlag = false;
    time = 0;
    timerCount();
});


const timer = document.querySelector(".timer");
const title = document.querySelector(".title");
const startBtn = document.querySelector(".startBtn");
const pauseBtn = document.querySelector(".pauseBtn");
const resumeBtn = document.querySelector(".resumeBtn");
const resetBtn = document.querySelector(".resetBtn");
const pomoCountsDisplay = document.querySelector(".pomoCountsDisplay");

const WORK_TIME = 1 * 60;
const BREAK_TIME = 0.5 * 60;

let timerId = null;
let oneRoundCompleted = false; // One Round = Work Time + Break Time
let totalCount = 0;
let paused = false;

//Function to save counts to Local Storage
const saveLocalCounts = () =>{
    let count = JSON.parse(localStorage.getItem("pomoCounts"));
    count !== null ? count++ : count = 1;
    count++;
    localStorage.setItem("pomoCounts", JSON.stringify(count));
}
const updateTitle = (msg) =>{
    title.textContent = msg;
}
// Function to CountDown
const countDown = (time) =>{
    return ()=>{
        const mins = Math.floor(time/60).toString().padStart(2, "0");
        const secs = Math.floor(time%60).toString().padStart(2, "0");
        // timer.textContent = time;
        timer.textContent = `${mins} : ${secs}`;
        time--;
        if(time<0)
        {
            stopTimer();
            if(!oneRoundCompleted)
            {
                timerId = startTimer(BREAK_TIME);
                oneRoundCompleted = true;
                updateTitle("It's break time!");
            }
            else
            {
                updateTitle("Completed 1 Round of Pomodoro Clock!");
                setTimeout(()=>updateTitle("Start Timer Again!"),2000);  
                totalCount++;
                saveLocalCounts();  
                showPomoCounts();
            }
        }
    }
}
// Arrow Function to start timer
const startTimer = (startTime) =>{
    if(timerId !== null)
    {
        stopTimer();
    }
    return setInterval(countDown(startTime), 1000);
}

// Arrow Function to stop timer
const stopTimer = (startTime) =>{
    clearInterval(timerId);
    timerId = null;
}

// Arrow Function to get Time in Seconds
const getTimeInSeconds = (timeString) =>{
    const[minutes, seconds] = timeString.split(":");
    return parseInt(minutes*60) + parseInt(seconds);
}

// Add Event Lister for Star Button
startBtn.addEventListener('click',()=>{
    timerId = startTimer(WORK_TIME);
    updateTitle("Its Work Time!");
});

// Add Event Lister for Reset Button
resetBtn.addEventListener('click',()=>{
    stopTimer();
    timer.textContent = "25:00";
    updateTitle("Click Start to Start Timer");
});

// Add Event Lister for Pause Button
pauseBtn.addEventListener('click',()=>{
    stopTimer();
    paused = true;
    updateTitle("Timer Pasused!")
});

// Add Event Lister for Resume Button
resumeBtn.addEventListener('click',()=>{
    if(paused)
    {
        const currentTime = getTimeInSeconds(timer.textContent);
        timerId = startTimer(currentTime);
        paused = false;
        (!oneRoundCompleted) ? updateTitle("Its Work Time!") : updateTitle("Its Break Time!");
    } 
});

//Function to show completed pomodoros to screen from local storage
const showPomoCounts = () =>{
    const counts = JSON.parse(localStorage.getItem("pomoCounts"));
    if(counts>0)
    {
        pomoCountsDisplay.style.display = "flex";
    }
    pomoCountsDisplay.firstElementChild.textContent = counts;
}

showPomoCounts();
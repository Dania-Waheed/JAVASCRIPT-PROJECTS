let days = document.getElementById("days");
let hours = document.getElementById("hours");
let mins = document.getElementById("mins");
let secs = document.getElementById("secs");

const fomatTime = (time) =>{
    return time < 10 ? `0${time}` : time;
}

const updateCountDown = (deadline) =>{
    const currentTime = new Date();
    const timeDifference = deadline - currentTime;

    let calSecs = Math.floor(timeDifference/1000) % 60;
    let calMins = Math.floor(timeDifference/1000/60) % 60;
    let calHrs = Math.floor(timeDifference/1000/60/60) % 24;
    let calDays = Math.floor(timeDifference/1000/60/60/24);
   
    days.textContent = fomatTime(calDays);
    hours.textContent = fomatTime(calHrs);
    mins.textContent = fomatTime(calMins);
    secs.textContent = fomatTime(calSecs);   
}

const countDown = (targetDate) =>{
    setInterval(()=> updateCountDown(targetDate), 1000);
}
const targetDate = new Date("January 02 2024 07:00");
countDown(targetDate);

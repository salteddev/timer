let clock = document.querySelector('.main-clock > h2');
let timeToDo = document.querySelector('.clock-header > h2');
let getInfoBtn = document.querySelector('#get');
let inputWrapper = document.querySelector('.inputs');
let globalhours = displayTime();

function displayTime(){
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    if (minutes<10){
        minutes = "0" + minutes;
    }
    if (seconds<10){
        seconds = "0" + seconds;
    }
    let fulltime = hours + ':' + minutes + ':' + seconds;
    clock.textContent = fulltime;
    return hours
};
displayTime();
setInterval(displayTime, 1000);
getInfoBtn.addEventListener('click', test)
function test (){
    let workInputFrom = document.querySelector('#work-from').value;
    let workInputTo = document.querySelector('#work-to').value;
    let workTime = {
        from: workInputFrom,
        to: workInputTo,
    };
    let sleepInputFrom = document.querySelector('#sleep-from').value;
    let sleepInputTo = document.querySelector('#sleep-to').value;
    let sleepTime = {
        from: sleepInputFrom,
        to: sleepInputTo,
    };
    let gymInputFrom = document.querySelector('#gym-from').value;
    let gymInputTo = document.querySelector('#gym-to').value;
    let gymTime = {
        from: gymInputFrom,
        to: gymInputTo,
    };
    let breakfastInputFrom = document.querySelector('#breakfast-from').value;
    let breakfastInputTo = document.querySelector('#breakfast-to').value;
    let breakfastTime = {
        from: breakfastInputFrom,
        to: breakfastInputTo,
    };
    let dinnerInputFrom = document.querySelector('#dinner-from').value;
    let dinnerInputTo = document.querySelector('#dinner-to').value;
    let dinnerTime = {
        from: dinnerInputFrom,
        to: dinnerInputTo,
    };
    let supperInputFrom = document.querySelector('#supper-from').value;
    let supperInputTo = document.querySelector('#supper-to').value;
    let supperTime = {
        from: supperInputFrom,
        to: supperInputTo,
    };
    if (workTime.from <= globalhours && workTime.to > globalhours){
        timeToDo.textContent = "Работа 🔥"
    }
    else if(sleepTime.from <= globalhours && sleepTime.to > globalhours){
        timeToDo.textContent = "Спать 😴"
        console.log(true)
    }
    else if(gymTime.from <= globalhours && gymTime.to > globalhours){
        timeToDo.textContent = "Спортзал 🏋️‍"
    }
    else if(breakfastTime.from <= globalhours && breakfastTime.to > globalhours){
        timeToDo.textContent = "Завтрак 🍳"
    }
    else if (dinnerTime.from <= globalhours && dinnerTime.to > globalhours){
        timeToDo.textContent = "Обед 🥩"
    }
    else if(supperTime.from <= globalhours && supperTime.to > globalhours){
        timeToDo.textContent = "Ужин 🥞"
    }
    console.log(globalhours)
}
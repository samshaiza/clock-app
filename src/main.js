import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import zones from "./timezones.json";

const container = document.querySelector(".container");
const timeZoneDisplay = document.querySelector(".time-zone-display");
const timeDisplay = document.querySelector(".time-display");
const dateDisplay = document.querySelector(".date-display");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close");
const timeZoneForm = document.querySelector(".time-zone-form");
const dropdown = document.querySelector(".select-time-zone");

dayjs.extend(utc);
dayjs.extend(timezone);
let currentTZ = dayjs.tz.guess();
let now = dayjs();

let tzs = []

zones.forEach(item => {
    tzs.push(`
        <option value="${item.tzCode}" class="time-zone-opt">${item.label}</option>
    `);
});

dropdown.innerHTML = tzs;

timeZoneForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(dropdown.value);
    changeTimeZone(dropdown.value);
});

timeZoneDisplay.onclick = function () {
    modal.style.display = "block";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

function changeTimeZone(i) {
    // now = dayjs(now).tz(i);
    currentTZ = i;
    console.log(i);
}

const months = {
    "1": "Jan",
    "2": "Feb",
    "3": "Mar",
    "4": "Apr",
    "5": "May",
    "6": "Jun",
    "7": "Jul",
    "8": "Aug",
    "9": "Sep",
    "10": "Oct",
    "11": "Nov",
    "12": "Dec",
}

function createContainerContents() {
    now = dayjs().tz(currentTZ);

    timeZoneDisplay.innerHTML = findTimeZone(now);
    timeDisplay.innerHTML = findTime(now);
    dateDisplay.innerHTML = findDate(now);
}

function findTimeZone(now) {
    //let returnTimeZone = (now.get('hour') % 12) + ":" + now.get('minute') + ":" + now.get('second');
    return currentTZ;
}

function findTime(now) {
    let returnTime = now.format('hh:mm:ss A');
    // let returnTime = (now.get('hour') % 12) + ":" + now.get('minute') + ":" + now.get('second');
    return returnTime;
}

function findDate(now) {
    
    let returnDate = now.format('MMM DD, YYYY');
    return returnDate;
}



// findTime(now);

let timerInterval = setInterval(createContainerContents, 1000);
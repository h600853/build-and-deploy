import {  getSecondsLeftOfYear, getTimeString, getMinutesLeftOfYear, getHoursLeftOfYear, getDaysLeftOfYear} from "./clock";

const timeContainer = document.getElementById("time");
const timeLeft = document.getElementById("seconds-left");
const timeLeftMinutes = document.getElementById("minutes-left");
const timeLeftHours = document.getElementById("hours-left");
const timeLeftInDays = document.getElementById("days-left");

const render = () => {
  const now = new Date();
  timeLeft.innerText = getSecondsLeftOfYear(now);
  timeContainer.innerText = getTimeString(now);
  timeLeftMinutes.innerText = getMinutesLeftOfYear(now);
  timeLeftHours.innerText = getHoursLeftOfYear(now);
  timeLeftInDays.innerText = getDaysLeftOfYear(now);
}

render();
setInterval(render, 1000);

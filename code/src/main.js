import {  getSecondsLeftOfYear, getTimeString, getMinutesLeftOfYear } from "./clock";

const timeContainer = document.getElementById("time");
const timeLeft = document.getElementById("seconds-left");
const timeLeftMinutes = document.getElementById("minutes-left");

const render = () => {
  const now = new Date();
  timeLeft.innerText = getSecondsLeftOfYear(now);
  timeContainer.innerText = getTimeString(now);
  timeLeftMinutes.innerText = getMinutesLeftOfYear(now);
}

render();
setInterval(render, 1000);

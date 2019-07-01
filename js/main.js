const clock = () => {
  const fullDate = new Date();
  var hours = fullDate.getHours();
  var mins = fullDate.getMinutes();
  var secs = fullDate.getSeconds();

  if (fullDate.getHours >= 0 && fullDate.getHours <= 11) {
    document.querySelector(".time-label").innerHTML = "CLOCKLY ~ AM ~";
  } else {
    document.querySelector(".time-label").innerHTML = "CLOCKLY ~ PM ~";
  }

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (hours > 12) {
    hours = hours - 12;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
  if (secs < 10) {
    secs = "0" + secs;
  }

  document.querySelector("#hours").innerHTML = hours;
  document.querySelector("#minutes").innerHTML = `:${mins} : `;
  document.querySelector("#seconds").innerHTML = secs;
};
setInterval(clock, 100);

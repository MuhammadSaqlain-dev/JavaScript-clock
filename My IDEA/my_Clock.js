window.onload = () => {
  var seconds = 55;
  var minutes = 59;
  var hours = 11;
  var appendSeconds = document.getElementById("seconds");
  var appendMinutes = document.getElementById("minutes");
  var appendHours = document.getElementById("hours");
  var appendSession = document.getElementById("session");
  var Interval;

  trigger = () => (Interval = setInterval(thisFunction, 1000));

  thisFunction = () => {
    seconds++;

    if (seconds <= 9) {
      appendSeconds.innerHTML = "0" + seconds;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }

    if (seconds > 59) {
      minutes++;
      appendMinutes.innerHTML = "0" + minutes;

      seconds = "00";
      appendSeconds.innerHTML = seconds;
    }

    if (minutes > 9) {
      appendMinutes.innerHTML = minutes;
    }

    if (minutes > 59) {
      hours++;
      appendHours.innerHTML = "0" + hours;

      minutes = "00";
      appendMinutes.innerHTML = minutes;
    }

    if (hours <= 9) {
      appendHours.innerHTML = "0" + hours;
    }

    if (9 < hours <= 11) {
      appendHours.innerHTML = hours;
    }

    if (hours > 11) {
      appendSession.innerHTML = "AM" ? "PM" : "AM";

      seconds = "00";
      minutes = "00";
      hours = "00";

      appendSeconds.innerHTML = seconds;
      appendMinutes.innerHTML = minutes;
      appendHours.innerHTML = hours;
    }

    console.log(seconds);
  };
  trigger();
};

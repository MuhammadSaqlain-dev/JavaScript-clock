window.onload = () => {
  showTime = () => {
    setTimeout(showTime, 1000);

    var getDate = new Date();
    var h = getDate.getHours();
    var m = getDate.getMinutes();
    var s = getDate.getSeconds();
    var session = "AM";

    if (h == 12) {
      h = 0;
    }

    if (h > 12) {
      h = h - 12;
      session = "PM";
    }

    h = h > 9 ? h : "0" + h;
    m = m > 9 ? m : "0" + m;
    s = s > 9 ? s : "0" + s;

    const time = h + ":" + m + ":" + s + " " + session;

    document.getElementById("digital-clock").innerText = time;
  };

  setTimeout(showTime, 1500);
};

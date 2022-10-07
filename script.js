function myClock() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  if (h < 10) {
    h = "0" + h;
  } else {
    h = h;
  }

  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = session + " " + h + ":" + m + ":" + s;
  document.getElementById("ClockDisplay").innerText = time;
  document.getElementById("ClockDisplay").textContent = time;

  setTimeout(myClock, 1000);
}

myClock();

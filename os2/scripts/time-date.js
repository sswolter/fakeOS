const displayTime = () => {
  const dateTime = new Date();
  const hours = dateTime.getHours();
  const minutes = dateTime.getMinutes();
  const amPm = document.getElementById("amPm");

  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;

  if (hours >= 12) {
    amPm.innerText = " PM";
  } else {
    amPm.innerText = " AM";
  }

  if (hours > 12) {
    hours = hours - 12;
  }
};
setInterval(displayTime, 10);

console.log("date time script");

const displayDate = () => {
  const dateTime = new Date();
  const year = dateTime.getFullYear();
  const month = dateTime.getMonth();
  const day = dateTime.getDate();
  console.log(year);

  document.getElementById("day").innerHTML = day;
  document.getElementById("month").innerHTML = month;
  document.getElementById("year").innerHTML = year;
};

displayDate();

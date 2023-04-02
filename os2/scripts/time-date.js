const displayTime = () => {
  const dateTime = new Date();
  let hours = dateTime.getHours();
  const minutes = dateTime.getMinutes();
  const amPm = document.getElementById("amPm");

  if (hours >= 12) {
    amPm.innerHTML = "&nbsp;PM";
  } else {
    amPm.innerHTML = "&nbsp;AM";
  }

  if (hours > 12) {
    hours = hours - 12;
  }

  if (minutes.length < 2) {
    document.getElementById("minutes").innerHTML = `0${minutes}`;
  } else {
    document.getElementById("minutes").innerHTML = minutes;
  }

  console.log(`0${minutes}`);
  document.getElementById("hours").innerHTML = hours;
};
setInterval(displayTime, 1000);

console.log("date time script");

const displayDate = () => {
  const dateTime = new Date();
  const year = dateTime.getFullYear();
  const month = dateTime.getMonth() + 1;
  const day = dateTime.getDate();
  console.log(year);

  document.getElementById("day").innerHTML = day;
  document.getElementById("month").innerHTML = month;
  document.getElementById("year").innerHTML = year;
};

displayDate();

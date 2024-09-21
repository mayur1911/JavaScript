// const time = document.getElementById('time')
const btn = document.getElementById("stop-btn");
const startBbtn = document.getElementById("start-btn");

function showTime() {
  const currentTime = new Date();
  // console.log(currentTime)

  const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
  //console.log(time)
  document.getElementById("time").innerText = time;
}

// showTime();

// setTimeOut runs some function after  n miliseconds for first time
// setInterval runs some fuction after each n seconds repeatedly
let interval = setInterval(() => {
  showTime();
}, 100);

btn.addEventListener("click", () => {
  clearInterval(interval);
  interval = null; // Set interval to null after stopping
});

startBbtn.addEventListener("click", () => {
  if (!interval) {
    // Only start the interval if it's not already running
    interval = setInterval(() => {
      showTime();
    }, 100);
  }
});

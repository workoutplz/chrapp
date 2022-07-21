const clock = document.querySelector("h2#clock");

function getClock() {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`

}
getClock();
setInterval(getClock, 1000);
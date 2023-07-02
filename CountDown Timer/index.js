let seconds = 0
let minutes = 0
let hours = 0

//INPUTS
const secondsInput = document.getElementsByClassName('seconds')[0]
const minutesInput = document.getElementsByClassName('minutes')[0]
const hoursInput = document.getElementsByClassName('hours')[0]

// BUTTONS
const start = document.getElementsByClassName('start')[0]
const continueBtn = document.getElementsByClassName('continue')[0]
const end = document.getElementsByClassName('reset')[0]
let timer

function startInterval() {
  start.style.display = 'none'
  continueBtn.style.display = 'inline-block'
  timer = setInterval(() => {
    seconds++

    if (seconds <= 9) {
      secondsInput.innerHTML = '0' + seconds
    }
    if (seconds > 9) {
      secondsInput.innerHTML = seconds
    }
    if (seconds > 59) {
      minutes++
      minutesInput.innerHTML = '0' + minutes
      seconds = 0
      secondsInput.innerHTML = '0' + 0
    }
    if (minutes > 9) {
      minutesInput.innerHTML = minutes
    }
    if (minutes > 59) {
      hours++
      minutes = 0
      minutesInput.innerHTML = '00'
      hoursInput.innerHTML = '0' + hours
    }
    if (hours > 9) {
      hoursInput.innerHTML = hours
    }
  }, 1000)
}

start.addEventListener('click', startInterval)
continueBtn.addEventListener('click', () => {
  continueBtn.style.display = 'none'
  start.style.display = 'inline-block'
  clearInterval(timer)
})
end.addEventListener('click', () => {
  clearInterval(timer)
  seconds = 0
  secondsInput.innerHTML = '00'
})

// MINUTES, SECONDS, MILLISECONDS
//VALUES
// let tens = 0;
// let seconds = 0;
// let minutes = 0;

// //INPUTS
// const tensInput = document.getElementsByClassName("tens")[0];
// const secondsInput = document.getElementsByClassName("seconds")[0];
// const minutesInput = document.getElementsByClassName("minutes")[0];

// // BUTTONS
// const start = document.getElementsByClassName("start")[0];
// const continueBtn = document.getElementsByClassName("continue")[0];
// const end = document.getElementsByClassName("reset")[0];
// let timer;

// function startInterval() {
//   start.style.display = "none";
//   continueBtn.style.display = "inline-block";
//   timer = setInterval(() => {
//     tens++;

//     if (tens < 9) {
//       tensInput.innerHTML = "0" + tens;
//     }
//     if (tens > 9) {
//       tensInput.innerHTML = tens;
//     }
//     if (tens > 99) {
//       seconds++;
//       secondsInput.innerHTML = "0" + seconds;
//       tens = 0;
//       tensInput.innerHTML = "0" + 0;
//     }
//     if (seconds > 9) {
//       secondsInput.innerHTML = seconds;
//     }
//     if (seconds > 59) {
//       minutes++;
//       seconds = 0;
//       secondsInput.innerHTML = "00";
//       minutesInput.innerHTML = "0" + minutes;
//     }
//     if (minutes > 9) {
//       minutesInput.innerHTML = minutes;
//     }
//   }, 10);
// }

// start.addEventListener("click", startInterval);
// continueBtn.addEventListener("click", () => {
//   continueBtn.style.display = "none";
//   start.style.display = "inline-block";
//   clearInterval(timer);
// });
// end.addEventListener("click", () => {
//   clearInterval(timer);
//   tens = 0;
//   seconds = 0;
//   tensInput.innerHTML = "00";
//   secondsInput.innerHTML = "00";
// });

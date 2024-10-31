const timeDisplay = document.getElementById("time-display");
const datePicker = document.getElementById("date-picker");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");

let startTime = 0;
let elapsedTime = 0;
let intervalId = null;

// Set current date in date picker
async function setCurrentDate() {
  const today = new Date();
  const formattedDate = today.toISOString().split('T')[0];
  datePicker.value = formattedDate;
}
setCurrentDate();

// Update the time display
function updateTimeDisplay(ms) {
  const hours = String(Math.floor((ms / 3600000) % 24)).padStart(2, "0");
  const minutes = String(Math.floor((ms / 60000) % 60)).padStart(2, "0");
  const seconds = String(Math.floor((ms / 1000) % 60)).padStart(2, "0");
  timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

// Start the stopwatch
async function startStopwatch() {
  if (intervalId) return; // Prevent multiple intervals
  startTime = Date.now() - elapsedTime;
  
  intervalId = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    updateTimeDisplay(elapsedTime);
  }, 1000);
}

// Stop the stopwatch
function stopStopwatch() {
  clearInterval(intervalId);
  intervalId = null;
}

// Reset the stopwatch
function resetStopwatch() {
  stopStopwatch();
  elapsedTime = 0;
  updateTimeDisplay(elapsedTime);
}

// Event listeners
startBtn.addEventListener("click", startStopwatch);
stopBtn.addEventListener("click", stopStopwatch);
resetBtn.addEventListener("click", resetStopwatch);

function setInitialDate() {
    const now = new Date();
    const year1 = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const currentDate = `${year1}-${month}-${day}`;

    datePicker.value = currentDate;
}

setInitialDate();

datePicker.addEventListener('keydown', function(e) {
    e.preventDefault(); // Prevent keyboard input
});

datePicker.addEventListener('click', function() {
    this.blur(); // Remove focus to prevent keyboard input
});


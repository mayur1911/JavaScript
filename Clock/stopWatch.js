const startWatchBtn = document.getElementById('start-watch-btn');
const timerInput = document.getElementById('timer');
const elapsedTimeDisplay = document.getElementById('elapsed');
let countdownInterval;

function startStopwatch(duration) {
    let timeRemaining = duration; // Time in seconds

    // Clear any existing interval before starting a new one
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }

    // Update the displayed time immediately
    updateElapsedTime(timeRemaining);

    countdownInterval = setInterval(() => {
        timeRemaining--;  // Decrease the remaining time
        updateElapsedTime(timeRemaining);

        // When time reaches zero, stop the interval
        if (timeRemaining <= 0) {
            clearInterval(countdownInterval);
            alert("Time's up!");
        }
    }, 1000);  // Run the countdown every second
}

function updateElapsedTime(seconds) {
    elapsedTimeDisplay.innerText = `Time elapsed: ${seconds} seconds`;
}

startWatchBtn.addEventListener('click', () => {
    const inputTime = parseInt(timerInput.value, 10);  // Get the time from input

    if (!isNaN(inputTime) && inputTime > 0) {
        startStopwatch(inputTime);  // Start the stopwatch with the entered time
    } else {
        alert("Please enter a valid time in seconds.");
    }
});

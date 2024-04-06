// Set the timer duration in seconds
const timerDuration = 60; // 1 minute in this example

// Get the timer display element
const timerDisplay = document.querySelector('.time-left');

// Initialize the timer countdown
let timeLeft = timerDuration;

// Function to update the timer display
function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds; // Add leading zero if seconds is less than 10
    timerDisplay.textContent = `${minutes}:${seconds}`;
}

// Function to start the timer
function startTimer() {
    updateTimer(); // Initial display of timer
    const timerInterval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateTimer();
        } else {
            clearInterval(timerInterval); // Stop the timer when it reaches zero
            // Optionally, you can add code to execute when the timer finishes
            console.log('Timer finished!');
        }
    }, 1000); // Update the timer every second (1000 milliseconds)
}

// Example usage: Start the timer when the window loads
window.onload = startTimer;



document.addEventListener('DOMContentLoaded', function() {
    const contentPlaceholder = document.getElementById('content-placeholder');

    function loadMoreContent() {
        // Simulate loading more content (e.g., fetch data from server)
        const newContent = document.createElement('div');
        newContent.innerHTML = '<p>New content</p>'; // Replace with your actual content

        // Append the new content
        contentPlaceholder.appendChild(newContent);
    }

    // Load more content when user scrolls to the bottom
    window.addEventListener('scroll', function() {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            loadMoreContent();
        }
    });
});

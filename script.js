// Initialize the puzzle data (replace with your actual puzzles)
const puzzles = [
  { emoji: "🦁🌍", answer: "Lion World" },
  { emoji: "🚀🌕", answer: "Rocket to the Moon" },
  { emoji: "🍕🎉", answer: "Pizza Party" }
];

// Get today's date and calculate the puzzle for today
const today = new Date();
const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
const puzzleForToday = puzzles[dayOfYear % puzzles.length];  // Loop through puzzles

// Display the puzzle on the page
const puzzleElement = document.getElementById("puzzle");
puzzleElement.textContent = puzzleForToday.emoji;

// Display the "Come back tomorrow" message
const nextPuzzleMessage = document.getElementById("next-puzzle-message");
nextPuzzleMessage.style.display = "block";  // Ensure this message is visible

// To reset puzzle at midnight (local timezone)
function resetPuzzleAtMidnight() {
  const now = new Date();
  const nextMidnight = new Date(now);
  nextMidnight.setHours(24, 0, 0, 0);  // Set the time to midnight

  const timeUntilMidnight = nextMidnight - now; // Calculate the time remaining
  setTimeout(function() {
    location.reload();  // Refresh the page at midnight to show a new puzzle
  }, timeUntilMidnight);
}

// Call the reset function to reload puzzle at midnight
resetPuzzleAtMidnight();

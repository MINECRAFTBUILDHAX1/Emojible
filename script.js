// Sample emojis and answers
const puzzles = [
    { emoji: '🦁👑', answer: 'The Lion King' },
    { emoji: '👑💍', answer: 'The Lord of the Rings' },
    { emoji: '🍔🍟👨‍🍳', answer: 'Fast Food Chef' }
];

let currentPuzzle = 0;

// Function to load the puzzle for today
function loadPuzzle() {
    const puzzle = puzzles[currentPuzzle];
    document.getElementById('emoji-puzzle').textContent = puzzle.emoji;
    document.getElementById('answer-input').value = '';
    document.getElementById('message').textContent = '';

    // Show message for the next puzzle
    const nextPuzzleMessage = document.getElementById('next-puzzle-message');
    nextPuzzleMessage.style.display = 'block';
}

// Event listener for the submit button
document.getElementById('submit-btn').addEventListener('click', function() {
    const userAnswer = document.getElementById('answer-input').value.trim();
    const correctAnswer = puzzles[currentPuzzle].answer;

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        document.getElementById('message').textContent = 'Correct! 🎉';
        currentPuzzle++;
        if (currentPuzzle < puzzles.length) {
            setTimeout(loadPuzzle, 1000);
        } else {
            document.getElementById('message').textContent = 'You finished all the puzzles! 🏆';
        }
    } else {
        document.getElementById('message').textContent = 'Try again! ❌';
    }
});

// Function to reset the puzzle at midnight (local time zone)
function resetPuzzleAtMidnight() {
    const now = new Date();
    const nextMidnight = new Date(now);
    nextMidnight.setHours(24, 0, 0, 0); // Set the time to midnight

    const timeUntilMidnight = nextMidnight - now; // Time remaining
    setTimeout(function() {
        currentPuzzle = 0;  // Reset puzzle index for the new day
        loadPuzzle(); // Reload the puzzle for the new day
    }, timeUntilMidnight);
}

// Call reset function at midnight to show the next puzzle
resetPuzzleAtMidnight();

// Initial puzzle load
loadPuzzle();

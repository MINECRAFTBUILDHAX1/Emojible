// Sample emojis and answers
const puzzles = [
    { emoji: '🦁👑', answer: 'The Lion King' },
    { emoji: '👑💍', answer: 'The Lord of the Rings' },
    { emoji: '🍔🍟👨‍🍳', answer: 'Fast Food Chef' }
];

let currentPuzzle = 0;

function loadPuzzle() {
    const puzzle = puzzles[currentPuzzle];
    document.getElementById('emoji-puzzle').textContent = puzzle.emoji;
    document.getElementById('answer-input').value = '';
    document.getElementById('message').textContent = '';
}

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

// Initial puzzle load
loadPuzzle();

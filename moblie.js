// Function to show a screen and hide others
function showScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.style.display = 'none';
    });
    document.getElementById(screenId).style.display = 'block';
}

// Event listeners for buttons
document.getElementById('yes-blue').addEventListener('click', function() {
    showScreen('blue-bag-match');
});

document.getElementById('no-blue').addEventListener('click', function() {
    showScreen('recycle');
});

document.getElementById('no-recycle').addEventListener('click', function() {
    showScreen('daily');
});

// Example: Log In button (you'd add actual login logic here)
document.querySelector('#login button').addEventListener('click', function() {
    // Replace with the next screen you want to show after login
    // For example, if you want to go directly to 'blue-bag-prompt':
    showScreen('blue-bag-prompt'); 
});

// Example: Sign Up button (you'd add actual signup logic here)
document.querySelector('#signup button').addEventListener('click', function() {
    // Replace with the next screen you want to show after signup
    // For example, if you want to go directly to 'blue-bag-prompt':
    showScreen('blue-bag-prompt');
});
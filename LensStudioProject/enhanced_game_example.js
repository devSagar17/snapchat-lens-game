// Enhanced Snapchat Lens Studio Game Example
// Extended version with additional features

// Game variables
var score = 0;
var highScore = 0;
var gameActive = false;
var timer = 30; // 30 seconds game time
var combo = 0; // Combo counter for consecutive taps
var multiplier = 1; // Score multiplier

// UI elements
var scoreText = null;
var timerText = null;
var startButton = null;
var highScoreText = null;
var comboText = null;

// Initialize the game
function initializeGame() {
    // Load high score from persistent storage if available
    loadHighScore();
    
    // Create UI elements
    createUI();
    
    // Set up touch/tap interactions
    setupInteractions();
    
    // Initialize game state
    resetGame();
}

// Create UI elements
function createUI() {
    // Score text
    scoreText = Scene.createText("Score: 0");
    scoreText.size = 40;
    scoreText.position = new vec2(-0.3, 0.4);
    
    // High score text
    highScoreText = Scene.createText("High Score: " + highScore);
    highScoreText.size = 30;
    highScoreText.position = new vec2(-0.3, 0.35);
    
    // Timer text
    timerText = Scene.createText("Time: 30");
    timerText.size = 40;
    timerText.position = new vec2(0.3, 0.4);
    
    // Combo text
    comboText = Scene.createText("Combo: x1");
    comboText.size = 35;
    comboText.position = new vec2(0, 0.3);
    comboText.color = new vec4(1, 1, 0, 1); // Yellow color
    
    // Start button
    startButton = Scene.createText("START GAME");
    startButton.size = 50;
    startButton.position = new vec2(0, 0);
    startButton.color = new vec4(0, 1, 0, 1); // Green color
}

// Set up touch/tap interactions
function setupInteractions() {
    // Start button tap
    startButton.onTouchStart(function() {
        if (!gameActive) {
            startGame();
        }
    });
    
    // Screen tap during gameplay
    Touch.onTouchStart(function(touchPos) {
        if (gameActive) {
            incrementScore();
            showTapEffect(touchPos); // Visual feedback
        }
    });
}

// Show visual effect where user tapped
function showTapEffect(position) {
    var effect = Scene.createText("+1");
    effect.size = 30;
    effect.position = position;
    effect.color = new vec4(1, 1, 0, 1); // Yellow
    
    // Animate the effect
    var startTime = getTime();
    var duration = 1; // 1 second
    
    function animate() {
        var elapsed = getTime() - startTime;
        if (elapsed < duration) {
            // Move upward
            effect.position = new vec2(
                effect.position.x,
                effect.position.y + 0.01
            );
            
            // Fade out
            var alpha = 1 - (elapsed / duration);
            effect.color = new vec4(1, 1, 0, alpha);
            
            // Continue animation
            global.setTimeout(animate, 16); // ~60fps
        } else {
            // Remove effect
            effect.destroy();
        }
    }
    
    animate();
}

// Reset game state
function resetGame() {
    score = 0;
    combo = 0;
    multiplier = 1;
    timer = 30;
    gameActive = false;
    
    if (scoreText) {
        scoreText.text = "Score: 0";
    }
    
    if (timerText) {
        timerText.text = "Time: 30";
    }
    
    if (comboText) {
        comboText.text = "Combo: x1";
        comboText.color = new vec4(1, 1, 0, 1); // Yellow
    }
    
    if (startButton) {
        startButton.text = "START GAME";
    }
}

// Start the game
function startGame() {
    gameActive = true;
    startButton.text = "GAME ON!";
    
    // Start countdown timer
    var countdown = global.setTimeout(function() {
        if (timer > 0 && gameActive) {
            timer--;
            timerText.text = "Time: " + timer;
            
            // Update combo (resets if no activity)
            if (combo > 0) {
                combo--;
                updateComboDisplay();
            }
            
            if (timer <= 0) {
                endGame();
            } else {
                global.setTimeout(countdown, 1000); // Continue countdown
            }
        }
    }, 1000);
}

// Increment score with combo system
function incrementScore() {
    if (gameActive) {
        combo++;
        
        // Increase multiplier for higher combos
        if (combo >= 10) {
            multiplier = 3;
        } else if (combo >= 5) {
            multiplier = 2;
        } else {
            multiplier = 1;
        }
        
        // Add score with multiplier
        score += multiplier;
        
        // Update UI
        scoreText.text = "Score: " + score;
        updateComboDisplay();
    }
}

// Update combo display
function updateComboDisplay() {
    if (comboText) {
        comboText.text = "Combo: x" + multiplier;
        
        // Change color based on combo level
        if (multiplier >= 3) {
            comboText.color = new vec4(1, 0, 0, 1); // Red for high combo
        } else if (multiplier >= 2) {
            comboText.color = new vec4(0, 1, 0, 1); // Green for medium combo
        } else {
            comboText.color = new vec4(1, 1, 0, 1); // Yellow for base combo
        }
    }
}

// Load high score from persistent storage
function loadHighScore() {
    // In a real implementation, you would use Lens Studio's persistence API
    // This is a placeholder
    highScore = 0;
}

// Save high score to persistent storage
function saveHighScore() {
    // In a real implementation, you would use Lens Studio's persistence API
    // This is a placeholder
    if (score > highScore) {
        highScore = score;
    }
}

// End the game
function endGame() {
    gameActive = false;
    startButton.text = "PLAY AGAIN";
    
    // Save high score
    saveHighScore();
    
    // Update high score display
    if (highScoreText) {
        highScoreText.text = "High Score: " + highScore;
    }
    
    // Show final score
    var finalMessage = Scene.createText("Game Over! Final Score: " + score);
    finalMessage.size = 40;
    finalMessage.position = new vec2(0, -0.2);
    finalMessage.color = new vec4(1, 1, 0, 1); // Yellow color
    
    // Remove message after 3 seconds
    global.setTimeout(function() {
        if (finalMessage) {
            finalMessage.destroy();
        }
    }, 3000);
}

// Initialize when script loads
initializeGame();
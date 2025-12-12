// Snapchat Lens Studio AR Game
// Enhanced version with face tracking and 3D elements

// Game variables
var score = 0;
var gameActive = false;
var timer = 30; // 30 seconds game time
var faceFound = false;

// UI elements
var scoreText = null;
var timerText = null;
var startButton = null;
var faceIndicator = null;

// AR elements
var faceMesh = null;
var arObject = null;
var particles = [];

// Initialize the game
function initializeGame() {
    // Create UI elements
    createUI();
    
    // Set up AR elements
    setupARElements();
    
    // Set up touch/tap interactions
    setupInteractions();
    
    // Initialize game state
    resetGame();
    
    // Start face tracking
    startFaceTracking();
}

// Create UI elements
function createUI() {
    // Score text
    scoreText = Scene.createText("Score: 0");
    scoreText.size = 40;
    scoreText.position = new vec2(-0.3, 0.4);
    
    // Timer text
    timerText = Scene.createText("Time: 30");
    timerText.size = 40;
    timerText.position = new vec2(0.3, 0.4);
    
    // Start button
    startButton = Scene.createText("START AR GAME");
    startButton.size = 50;
    startButton.position = new vec2(0, 0);
    startButton.color = new vec4(0, 1, 0, 1); // Green color
    
    // Face indicator
    faceIndicator = Scene.createText("No Face Detected");
    faceIndicator.size = 30;
    faceIndicator.position = new vec2(0, -0.4);
    faceIndicator.color = new vec4(1, 0, 0, 1); // Red color
}

// Set up AR elements
function setupARElements() {
    // Create a 3D object that will follow the face
    arObject = Scene.createArcSphereMesh(0.1, 16, 16);
    arObject.enabled = false; // Hide until face is detected
    
    // Set material properties
    var material = Material.create("Unlit");
    material.mainPass.baseColor = new vec4(1, 0, 0, 1); // Red color
    arObject.mainMaterial = material;
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
            createTapEffect(touchPos);
        }
    });
}

// Start face tracking
function startFaceTracking() {
    // Check for face presence
    global.setTimeout(function() {
        if (typeof FaceTracking !== 'undefined' && FaceTracking.count > 0) {
            faceFound = true;
            if (faceIndicator) {
                faceIndicator.text = "Face Detected!";
                faceIndicator.color = new vec4(0, 1, 0, 1); // Green color
            }
            
            // Enable AR object
            if (arObject) {
                arObject.enabled = true;
                
                // Attach to face
                var face = FaceTracking.face(0);
                arObject.transform.position = face.center;
            }
        } else {
            faceFound = false;
            if (faceIndicator) {
                faceIndicator.text = "No Face Detected";
                faceIndicator.color = new vec4(1, 0, 0, 1); // Red color
            }
            
            // Disable AR object
            if (arObject) {
                arObject.enabled = false;
            }
        }
        
        // Continue checking
        if (!gameActive) {
            startFaceTracking();
        }
    }, 500); // Check every 500ms
}

// Create visual effect for taps
function createTapEffect(position) {
    // Create a particle
    var particle = Scene.createArcSphereMesh(0.05, 8, 8);
    particle.transform.position = new vec3(position.x, position.y, 0);
    
    // Set material
    var material = Material.create("Unlit");
    material.mainPass.baseColor = new vec4(Math.random(), Math.random(), Math.random(), 1);
    particle.mainMaterial = material;
    
    // Add to particles array
    particles.push({
        object: particle,
        startTime: getTime(),
        duration: 1.0 // 1 second
    });
    
    // Animate particle
    animateParticles();
}

// Animate particles
function animateParticles() {
    var currentTime = getTime();
    for (var i = particles.length - 1; i >= 0; i--) {
        var particleData = particles[i];
        var elapsed = currentTime - particleData.startTime;
        
        if (elapsed < particleData.duration) {
            // Scale up and fade out
            var progress = elapsed / particleData.duration;
            var scale = 0.05 + (0.2 * progress);
            var alpha = 1 - progress;
            
            particleData.object.transform.scale = new vec3(scale, scale, scale);
            particleData.object.mainMaterial.mainPass.baseColor = new vec4(
                particleData.object.mainMaterial.mainPass.baseColor.x,
                particleData.object.mainMaterial.mainPass.baseColor.y,
                particleData.object.mainMaterial.mainPass.baseColor.z,
                alpha
            );
        } else {
            // Remove expired particle
            particleData.object.destroy();
            particles.splice(i, 1);
        }
    }
    
    // Continue animation if there are particles
    if (particles.length > 0) {
        global.setTimeout(animateParticles, 16); // ~60fps
    }
}

// Reset game state
function resetGame() {
    score = 0;
    timer = 30;
    gameActive = false;
    
    if (scoreText) {
        scoreText.text = "Score: 0";
    }
    
    if (timerText) {
        timerText.text = "Time: 30";
    }
    
    if (startButton) {
        startButton.text = "START AR GAME";
    }
    
    // Clear particles
    for (var i = 0; i < particles.length; i++) {
        particles[i].object.destroy();
    }
    particles = [];
}

// Start the game
function startGame() {
    gameActive = true;
    startButton.text = "AR GAME ON!";
    
    // Start countdown timer
    var countdown = global.setTimeout(function() {
        if (timer > 0 && gameActive) {
            timer--;
            timerText.text = "Time: " + timer;
            
            // Update AR object position if face is detected
            if (faceFound && typeof FaceTracking !== 'undefined' && FaceTracking.count > 0) {
                var face = FaceTracking.face(0);
                if (arObject) {
                    arObject.transform.position = face.center;
                    
                    // Add a little bounce effect
                    arObject.transform.scale = new vec3(
                        0.1 + Math.sin(getTime() * 10) * 0.02,
                        0.1 + Math.cos(getTime() * 10) * 0.02,
                        0.1
                    );
                }
            }
            
            if (timer <= 0) {
                endGame();
            } else {
                global.setTimeout(countdown, 1000); // Continue countdown
            }
        }
    }, 1000);
}

// Increment score
function incrementScore() {
    if (gameActive) {
        score++;
        scoreText.text = "Score: " + score;
        
        // Change AR object color randomly
        if (arObject) {
            arObject.mainMaterial.mainPass.baseColor = new vec4(
                Math.random(),
                Math.random(),
                Math.random(),
                1
            );
        }
    }
}

// End the game
function endGame() {
    gameActive = false;
    startButton.text = "PLAY AGAIN";
    
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
    
    // Hide AR object
    if (arObject) {
        arObject.enabled = false;
    }
}

// Initialize when script loads
initializeGame();
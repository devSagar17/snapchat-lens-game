# Snapchat AR Lens Game - Complete Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Getting Started](#getting-started)
3. [Game Instructions](#game-instructions)
4. [AR Game Instructions](#ar-game-instructions)
5. [Project Structure](#project-structure)
6. [Support](#support)

---

## Project Overview

This is an augmented reality game built for Snapchat using Lens Studio.

### Features
- Basic tap-based gameplay
- Augmented Reality face tracking
- 3D visual elements
- Particle effects

### Getting Started
1. Open this project in Lens Studio
2. Customize the game elements
3. Export to Snapchat

---

## Game Instructions

### Overview
This is a simple tap-based game designed for Snapchat Lens Studio. Players have 30 seconds to tap as many times as possible to achieve a high score.

The project includes both a basic version and an AR-enhanced version with face tracking and 3D elements. See the AR section for details on the AR features.

### Game Features
- 30-second timer
- Score tracking
- Interactive start/play again button
- Visual feedback

### How to Use in Lens Studio

1. **Open Lens Studio**
   - Launch Snapchat Lens Studio on your computer

2. **Import Project**
   - Select "Create New Lens"
   - Choose "Import Project"
   - Navigate to this folder and select it

3. **Customize the Game**
   - Modify `game.js` to change basic game mechanics
   - Modify `ar_game.js` to change AR features
   - Adjust timing, scoring, or add new features
   - Edit UI elements in the `createUI()` function

4. **Preview the Game**
   - Use Lens Studio's preview feature to test the game
   - Make sure all interactions work correctly

5. **Export for Snapchat**
   - Click "Publish" in Lens Studio
   - Follow Snapchat's submission guidelines
   - Submit your lens for review

### Customization Options

#### Change Game Duration
In `game.js`, modify the line:
```javascript
var timer = 30; // 30 seconds game time
```

#### Modify Scoring System
Edit the `incrementScore()` function to change how points are awarded.

#### Update UI Elements
Adjust the size, position, and color of text elements in the `createUI()` function.

#### Add Sound Effects
Include sound files in the assets folder and reference them in your JavaScript code.

### Technical Details

#### Main Functions
- `initializeGame()`: Sets up the game when loaded
- `startGame()`: Begins the gameplay and timer
- `incrementScore()`: Increases player score
- `endGame()`: Handles game over state

#### Event Handlers
- `onTouchStart()`: Detects screen taps
- Timer events: Manage the 30-second countdown

### Troubleshooting

If the game isn't working as expected:
1. Check that all script references in `lens.json` are correct
2. Ensure there are no syntax errors in `game.js`
3. Verify that UI elements are positioned correctly
4. Test all touch interactions in the preview

---

## AR Game Instructions

### Overview
This is an augmented reality tap-based game designed for Snapchat Lens Studio. It includes both a basic version and an AR-enhanced version with face tracking and 3D elements.

### AR Features
- Face tracking detection
- 3D object that follows facial movements
- Color-changing AR elements
- Particle effects for user interactions
- Real-time face position updates

### How to Use the AR Game in Lens Studio

1. **Open Lens Studio**
   - Launch Snapchat Lens Studio on your computer

2. **Import Project**
   - Select "Create New Lens"
   - Choose "Import Project"
   - Navigate to this folder and select it

3. **Enable Camera Permissions**
   - When prompted, allow Lens Studio to access your camera
   - This is required for face tracking to work

4. **Select the AR Script**
   - In the Resources panel, find the Scripts section
   - Disable `game.js` and enable `ar_game.js`
   - This activates the AR features

5. **Preview the AR Game**
   - Position yourself in front of the camera
   - Wait for "Face Detected" message to appear
   - Tap "START AR GAME" to begin
   - Observe the 3D sphere that follows your face

6. **Interact with AR Elements**
   - Tap anywhere on the screen to create colorful particle effects
   - Watch the AR sphere change colors with each tap
   - See the sphere gently bounce in real-time

### Customization Options for AR Features

#### Adjust AR Object Size
In `ar_game.js`, modify the line in `setupARElements()`:
```javascript
arObject = Scene.createArcSphereMesh(0.1, 16, 16);
```
Change the first parameter (0.1) to adjust the sphere size.

#### Modify Particle Effects
Edit the `createTapEffect()` function to change:
- Particle size
- Colors
- Animation duration

#### Change Face Tracking Behavior
Modify the `startFaceTracking()` function to:
- Adjust tracking sensitivity
- Change how the AR object responds to face movement
- Add additional AR elements

#### Add More AR Objects
Extend the `setupARElements()` function to create additional 3D objects that can:
- Attach to different face landmarks
- Respond to facial expressions
- Interact with the game mechanics

### Technical Details

#### AR Components
- `FaceTracking` API for detecting and tracking faces
- 3D mesh objects that can be positioned in AR space
- Material system for coloring and texturing AR objects
- Real-time position updates based on face movement

#### Main AR Functions
- `setupARElements()`: Creates AR objects and materials
- `startFaceTracking()`: Initializes and maintains face detection
- `createTapEffect()`: Generates particle effects at tap locations
- `animateParticles()`: Manages particle lifecycle and animation

#### Event Handlers
- `onTouchStart()`: Detects screen taps for particle generation
- Face tracking events: Updates AR object positions
- Timer events: Manage the 30-second countdown

### Troubleshooting AR Issues

If the AR features aren't working as expected:

1. **Camera Access**
   - Ensure Lens Studio has permission to access your camera
   - Check that no other application is using the camera

2. **Face Detection**
   - Make sure your face is well-lit and clearly visible
   - Remove any obstructions (hands, hair, etc.)
   - Check that you're using the front-facing camera

3. **AR Object Visibility**
   - Verify that `ar_game.js` is enabled in the Scripts panel
   - Check that the face indicator shows "Face Detected"
   - Confirm that the AR object's material is properly configured

4. **Performance Issues**
   - Reduce the number of particles in `createTapEffect()`
   - Lower the segment count in `Scene.createArcSphereMesh()`
   - Simplify material properties

### AR Best Practices

1. **Performance Optimization**
   - Limit the number of active 3D objects
   - Reuse materials when possible
   - Clean up unused objects regularly

2. **User Experience**
   - Provide clear feedback when face tracking is active
   - Ensure AR elements are clearly visible against various backgrounds
   - Test with different lighting conditions

3. **Compatibility**
   - AR features work best on devices with good cameras
   - Some older devices may have limited AR performance
   - Always provide fallback options for devices without AR support

---

## Project Structure

This document outlines the file structure for the Snapchat Lens Studio game project.

### Root Directory
- `README.md` - Project overview
- `GAME_INSTRUCTIONS.md` - Detailed usage instructions
- `lens.json` - Lens Studio project configuration
- `game.js` - Main game script
- `ar_game.js` - AR-enhanced game script
- `enhanced_game_example.js` - Extended game example with additional features
- `preview.txt` - Placeholder for preview image information

### Assets Directory
- `assets/` - Folder for images, sounds, and 3D models

### File Descriptions

#### lens.json
Configuration file that defines the lens project, including references to scripts and assets.

#### game.js
The main game script containing:
- Game logic and state management
- UI creation and updates
- Touch event handlers
- Timer functionality

#### ar_game.js
An AR-enhanced version of the game with:
- Face tracking integration
- 3D objects that follow facial movements
- Particle effects for taps
- Dynamic color changing elements

#### GAME_INSTRUCTIONS.md
Comprehensive guide covering:
- How to import and use the project in Lens Studio
- Customization options
- Technical details
- Troubleshooting tips

### Getting Started

1. Open Lens Studio
2. Import this project folder
3. Preview the game using Lens Studio's built-in simulator
4. Customize the game mechanics in `game.js`
5. Add assets to the `assets/` folder as needed
6. Publish your lens to Snapchat

### Customization Points

- Game duration (modify `timer` variable)
- Scoring system (modify `incrementScore` function)
- UI elements (adjust in `createUI` function)
- Visual effects (extend `showTapEffect` function)
- Additional game mechanics

---

## Support

For additional help with Lens Studio, visit the official Snapchat Lens Studio documentation.

For additional help with Lens Studio AR features, visit the official Snapchat Lens Studio documentation on face tracking and 3D objects.
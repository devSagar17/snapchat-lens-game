# Snapchat Tap Game Instructions

## Overview
This is a simple tap-based game designed for Snapchat Lens Studio. Players have 30 seconds to tap as many times as possible to achieve a high score.

## Game Features
- 30-second timer
- Score tracking
- Interactive start/play again button
- Visual feedback

## How to Use in Lens Studio

1. **Open Lens Studio**
   - Launch Snapchat Lens Studio on your computer

2. **Import Project**
   - Select "Create New Lens"
   - Choose "Import Project"
   - Navigate to this folder and select it

3. **Customize the Game**
   - Modify `game.js` to change game mechanics
   - Adjust timing, scoring, or add new features
   - Edit UI elements in the `createUI()` function

4. **Preview the Game**
   - Use Lens Studio's preview feature to test the game
   - Make sure all interactions work correctly

5. **Export for Snapchat**
   - Click "Publish" in Lens Studio
   - Follow Snapchat's submission guidelines
   - Submit your lens for review

## Customization Options

### Change Game Duration
In `game.js`, modify the line:
```javascript
var timer = 30; // 30 seconds game time
```

### Modify Scoring System
Edit the `incrementScore()` function to change how points are awarded.

### Update UI Elements
Adjust the size, position, and color of text elements in the `createUI()` function.

### Add Sound Effects
Include sound files in the assets folder and reference them in your JavaScript code.

## Technical Details

### Main Functions
- `initializeGame()`: Sets up the game when loaded
- `startGame()`: Begins the gameplay and timer
- `incrementScore()`: Increases player score
- `endGame()`: Handles game over state

### Event Handlers
- `onTouchStart()`: Detects screen taps
- Timer events: Manage the 30-second countdown

## Troubleshooting

If the game isn't working as expected:
1. Check that all script references in `lens.json` are correct
2. Ensure there are no syntax errors in `game.js`
3. Verify that UI elements are positioned correctly
4. Test all touch interactions in the preview

## Support
For additional help with Lens Studio, visit the official Snapchat Lens Studio documentation.
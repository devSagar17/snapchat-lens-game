# Project Structure

This document outlines the file structure for the Snapchat Lens Studio game project.

## Root Directory
- `README.md` - Project overview
- `GAME_INSTRUCTIONS.md` - Detailed usage instructions
- `lens.json` - Lens Studio project configuration
- `game.js` - Main game script
- `ar_game.js` - AR-enhanced game script
- `enhanced_game_example.js` - Extended game example with additional features
- `preview.txt` - Placeholder for preview image information

## Assets Directory
- `assets/` - Folder for images, sounds, and 3D models

## File Descriptions

### lens.json
Configuration file that defines the lens project, including references to scripts and assets.

### game.js
The main game script containing:
- Game logic and state management
- UI creation and updates
- Touch event handlers
- Timer functionality

### ar_game.js
An AR-enhanced version of the game with:
- Face tracking integration
- 3D objects that follow facial movements
- Particle effects for taps
- Dynamic color changing elements

### GAME_INSTRUCTIONS.md
Comprehensive guide covering:
- How to import and use the project in Lens Studio
- Customization options
- Technical details
- Troubleshooting tips

## Getting Started

1. Open Lens Studio
2. Import this project folder
3. Preview the game using Lens Studio's built-in simulator
4. Customize the game mechanics in `game.js`
5. Add assets to the `assets/` folder as needed
6. Publish your lens to Snapchat

## Customization Points

- Game duration (modify `timer` variable)
- Scoring system (modify `incrementScore` function)
- UI elements (adjust in `createUI` function)
- Visual effects (extend `showTapEffect` function)
- Additional game mechanics
# Snapchat AR Tap Game

This is an augmented reality tap-based game built for Snapchat using Lens Studio.

## Easy Installation Package

For the easiest way to use this project, simply download the `SnapchatARGame.zip` file from this repository and follow the import instructions below.

## Project Structure
- `manifest.ls` - Main project manifest file
- `game.js` - Basic tap game script
- `ar_game.js` - AR-enhanced game script with face tracking
- `scenes/main.ls` - Main scene configuration
- `preview.txt` - Project preview information
- `COMPLETE_DOCUMENTATION.md` - Full documentation
- `enhanced_game_example.js` - Extended game example

## How to Open This Project in Lens Studio

1. **Download and Install Lens Studio**
   - Visit [Snapchat's Lens Studio website](https://lensstudio.snapchat.com/)
   - Download and install the latest version

2. **Open the Project**
   - Launch Lens Studio
   - Click "Import Project" 
   - Navigate to this folder and select it
   - Click "Open"

3. **Select the Script to Use**
   - In the Resources panel, find the "Scripts" section
   - You'll see two JavaScript files:
     - `game.js` (basic version without AR)
     - `ar_game.js` (AR version with face tracking)
   - Enable only one script at a time by checking the box next to it

4. **Preview the Game**
   - Use the preview window to test the game
   - For AR version, ensure your camera is enabled
   - Position yourself in front of the camera for face tracking

## Troubleshooting

If Lens Studio cannot open the project:

1. **Check Lens Studio Version**
   - Ensure you're using a recent version of Lens Studio
   - Older versions may not support newer project formats

2. **Verify File Integrity**
   - Make sure all files are present in the project folder
   - Check that `manifest.ls` exists in the root directory

3. **Try Creating a New Project**
   - Create a new blank project in Lens Studio
   - Copy the JavaScript files (`game.js` and `ar_game.js`) into the project
   - Manually add the scripts to the scene

## Alternative Method: Manual Setup

If importing doesn't work:

1. Open Lens Studio and create a new "Blank" project
2. In the Resources panel, right-click "Scripts" and select "Add Script"
3. Choose "JavaScript" and name it "game"
4. Copy the content of `game.js` into this new script
5. Repeat for `ar_game.js` if you want the AR version
6. For the AR version, you'll also need to:
   - Add a Face Tracker from the Objects panel
   - Add a 3D object (Sphere) to attach to the face tracker

## Documentation

For complete documentation, refer to `COMPLETE_DOCUMENTATION.md` which includes:
- Detailed setup instructions
- Customization options
- Technical explanations
- Publishing guidelines
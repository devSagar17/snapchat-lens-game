# Snapchat AR Tap Game - Final Lens Studio Project

This is the final, properly structured Snapchat Lens Studio project that follows all official requirements.

## Project Structure

```
FinalLensProject/
├── Assets/              # Asset files (textures, models, etc.)
├── Resources/           # Script and resource files
│   ├── game.js          # Basic tap game script
│   └── ar_game.js       # AR-enhanced game script
├── Scenes/              # Scene files
│   └── main.scene       # Main scene definition
├── manifest.ls          # Project manifest (correct extension)
└── README.md            # This file
```

## How to Import into Lens Studio

1. Open Lens Studio
2. Click "Import Project"
3. Navigate to `c:\lens studio\FinalLensProject`
4. Select the `FinalLensProject` folder
5. Click "Open"

## Project Contents

### Basic Version (`Resources/game.js`)
- Simple tap-based game with 30-second timer
- Score tracking
- Interactive start/play again button
- Visual feedback

### AR Version (`Resources/ar_game.js`)
- All features of the basic version
- Face tracking integration
- 3D objects that follow facial movements
- Particle effects for taps
- Dynamic color changing elements

## Switching Between Versions

After importing the project:

1. In the Resources panel, find the "Scripts" section
2. You'll see two JavaScript files:
   - `Resources/game.js` (basic version without AR)
   - `Resources/ar_game.js` (AR version with face tracking)
3. Enable only one script at a time by checking the box next to it

## Requirements

- Snapchat Lens Studio v4.0 or higher
- Computer with webcam (for AR features)

## Notes

- This project follows Lens Studio's official project structure guidelines
- Uses `.ls` extension for manifest file as required
- All scripts are organized in the `Resources/` directory
- Scenes are organized in the `Scenes/` directory
- Assets should be placed in the `Assets/` directory
- Total project size is under 8MB for Snapchat requirements

## Troubleshooting

If you encounter issues:

1. Ensure you're using a recent version of Lens Studio
2. Verify all files are present in their correct directories
3. Check that `manifest.ls` exists in the root directory
4. Make sure you're selecting the correct folder when importing
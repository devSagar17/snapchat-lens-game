# Snapchat AR Game Instructions

## Overview
This is an augmented reality tap-based game designed for Snapchat Lens Studio. It includes both a basic version and an AR-enhanced version with face tracking and 3D elements.

## AR Features
- Face tracking detection
- 3D object that follows facial movements
- Color-changing AR elements
- Particle effects for user interactions
- Real-time face position updates

## How to Use the AR Game in Lens Studio

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

## Customization Options for AR Features

### Adjust AR Object Size
In `ar_game.js`, modify the line in `setupARElements()`:
```javascript
arObject = Scene.createArcSphereMesh(0.1, 16, 16);
```
Change the first parameter (0.1) to adjust the sphere size.

### Modify Particle Effects
Edit the `createTapEffect()` function to change:
- Particle size
- Colors
- Animation duration

### Change Face Tracking Behavior
Modify the `startFaceTracking()` function to:
- Adjust tracking sensitivity
- Change how the AR object responds to face movement
- Add additional AR elements

### Add More AR Objects
Extend the `setupARElements()` function to create additional 3D objects that can:
- Attach to different face landmarks
- Respond to facial expressions
- Interact with the game mechanics

## Technical Details

### AR Components
- `FaceTracking` API for detecting and tracking faces
- 3D mesh objects that can be positioned in AR space
- Material system for coloring and texturing AR objects
- Real-time position updates based on face movement

### Main AR Functions
- `setupARElements()`: Creates AR objects and materials
- `startFaceTracking()`: Initializes and maintains face detection
- `createTapEffect()`: Generates particle effects at tap locations
- `animateParticles()`: Manages particle lifecycle and animation

### Event Handlers
- `onTouchStart()`: Detects screen taps for particle generation
- Face tracking events: Updates AR object positions
- Timer events: Manage the 30-second countdown

## Troubleshooting AR Issues

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

## AR Best Practices

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

## Support
For additional help with Lens Studio AR features, visit the official Snapchat Lens Studio documentation on face tracking and 3D objects.
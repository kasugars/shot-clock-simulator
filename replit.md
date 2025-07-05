# Shot Clock Trainer

## Overview

This project is a basketball training suite featuring two applications: a shot clock trainer and an upcoming scoreboard trainer. The main interface uses a basketball court-themed navigation design where users select between front court (Shot Clock Trainer) and back court (Scoreboard Trainer). The shot clock trainer provides a digital countdown timer with manual controls for starting, stopping, and resetting the clock, featuring a clean, mobile-optimized interface perfect for basketball training sessions.

## System Architecture

### Frontend Architecture
- **Multi-page Application**: Basketball court-themed navigation with separate pages for each trainer
- **Pure HTML/CSS/JavaScript**: Built without frameworks for maximum compatibility
- **Responsive Design**: Mobile-first approach with touch and mouse event support
- **Basketball Court Navigation**: Visual court layout with front/back court selection zones
- **Real-time Updates**: JavaScript interval-based timer with 100ms precision

### Key Design Decisions
- **No Framework Dependency**: Chosen for simplicity and minimal overhead
- **Hardware Aesthetic**: Interface designed to mimic physical shot clock equipment
- **Dual Input Support**: Both mouse and touch events for cross-platform compatibility

## Key Components

### Navigation System (index.html)
- **Basketball Court Design**: Visual representation of basketball court with front/back court zones
- **Front Court Zone**: Links to Shot Clock Trainer (orange gradient)
- **Back Court Zone**: Links to Scoreboard Trainer (blue gradient, coming soon)
- **Center Line & Circle**: Authentic court design elements
- **Responsive Layout**: Adapts to different screen sizes

### Timer Engine (shot-clock.html)
- **ShotClockTimer Class**: Core timer logic and state management
- **Features**: 
  - Countdown functionality with 24-second default
  - Start/stop/reset controls
  - Expiration detection and visual feedback
  - State persistence across operations
- **Back Navigation**: Return to main menu functionality

### Control Interface
- **STOP Button**: Pauses timer with visual press feedback
- **START Button**: Initiates or resumes countdown
- **RESET Button**: Returns timer to 24 seconds
- **ALT RESET Button**: Alternative reset functionality (14 seconds)

### Display System
- **Large Digital Display**: Central countdown visualization
- **Status Indicators**: Visual feedback for timer states
- **Responsive Layout**: Adapts to different screen sizes

## Data Flow

1. **User Interaction**: Button press triggers event listeners
2. **State Management**: Timer class updates internal state
3. **Display Update**: DOM manipulation reflects current time
4. **Interval Processing**: JavaScript intervals handle countdown logic
5. **Visual Feedback**: CSS classes provide real-time status indication

## External Dependencies

### Fonts
- **Google Fonts**: Orbitron and Roboto font families
- **Purpose**: Professional, digital-style typography
- **Fallback**: System fonts for offline functionality

### No Database
- **Client-side Only**: All state managed in browser memory
- **No Persistence**: Timer resets on page reload
- **Future Consideration**: Local storage could be added for settings persistence

## Deployment Strategy

### Static Hosting
- **File Structure**: Self-contained HTML/CSS/JS files
- **No Build Process**: Direct deployment of source files
- **Platform Agnostic**: Compatible with any static hosting service
- **CDN Ready**: Optimized for content delivery networks

### Performance Considerations
- **Minimal Assets**: Lightweight codebase for fast loading
- **Font Preloading**: Google Fonts with preconnect optimization
- **Efficient DOM Updates**: Targeted element updates only

## Changelog

- July 04, 2025. Initial setup
- July 04, 2025. Removed all branding (ESA, SCT-4, Court 1, Electronic Scoreboards Australia)
- July 04, 2025. Changed timer display to always show red numbers
- July 04, 2025. Optimized mobile layout with compact spacing and responsive design
- July 04, 2025. Added +1/-1 indicators on START/RESET buttons
- July 04, 2025. Added PayPal support link for hosting costs
- July 05, 2025. **Major Architecture Change**: Converted to multi-page Basketball Training Suite
- July 05, 2025. Added basketball court-themed navigation page (index.html)
- July 05, 2025. Moved shot clock trainer to separate page (shot-clock.html)
- July 05, 2025. Implemented front court/back court navigation zones
- July 05, 2025. **Completed Scoreboard Trainer**: Full basketball scoreboard control panel simulator
- July 05, 2025. Added authentic LCD display with green digital numbers
- July 05, 2025. Implemented scoring, fouls, timeouts, timer controls with proper button colors
- July 05, 2025. Added possession arrow toggle and error correction functionality
- July 05, 2025. Included buzzer/siren audio feedback and button press sounds
- July 05, 2025. **Critical Issue**: Browser caching preventing home button color changes despite multiple CSS and HTML approaches
- July 05, 2025. **RESTORED**: Reverted scoreboard layout to working backup from 11:36 PM after failed uniform grid attempt
- July 05, 2025. **FIXED**: Button width uniformity achieved by restructuring HTML grid layout (removed nested containers)
- July 05, 2025. **ENHANCED**: Added overtime period support (1,2,3,4,OT) and functional timeout/foul counting
- July 05, 2025. **COMPLETED**: Timeout counting system with period-based resets (2→3→1 based on periods)
- July 05, 2025. **COMPLETED**: Foul counting system that resets to 0 every period change

## User Preferences

Preferred communication style: Simple, everyday language.
User experiencing frustration with button styling changes not taking effect due to aggressive browser caching.
Contact: kasugars@gmail.com for support/donations

## Known Issues

- Home button color change from green to gray requires browser cache clearing
- Scoreboard button alignment affected by CSS version conflicts  
- Multiple cache-busting attempts unsuccessful (inline styles, new files, timestamp versioning)
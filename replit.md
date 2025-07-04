# Shot Clock Trainer

## Overview

This project is a basketball shot clock trainer application designed to help players practice with authentic shot clock timing. The application provides a digital countdown timer with manual controls for starting, stopping, and resetting the clock. It features a clean, mobile-optimized interface perfect for basketball training sessions.

## System Architecture

### Frontend Architecture
- **Pure HTML/CSS/JavaScript**: Single-page application built without frameworks
- **Responsive Design**: Mobile-first approach with touch and mouse event support
- **Component-based Structure**: Modular HTML layout with distinct sections for display and controls
- **Real-time Updates**: JavaScript interval-based timer with 100ms precision

### Key Design Decisions
- **No Framework Dependency**: Chosen for simplicity and minimal overhead
- **Hardware Aesthetic**: Interface designed to mimic physical shot clock equipment
- **Dual Input Support**: Both mouse and touch events for cross-platform compatibility

## Key Components

### Timer Engine (`ShotClockTimer` class)
- **Purpose**: Core timer logic and state management
- **Features**: 
  - Countdown functionality with 24-second default
  - Start/stop/reset controls
  - Expiration detection and visual feedback
  - State persistence across operations

### Control Interface
- **STOP Button**: Pauses timer with visual press feedback
- **START Button**: Initiates or resumes countdown
- **RESET Button**: Returns timer to 24 seconds
- **ALT RESET Button**: Alternative reset functionality (implementation pending)

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

## User Preferences

Preferred communication style: Simple, everyday language.
Contact: kasugars@gmail.com for support/donations
# Basketball Training Suite

A professional basketball training suite featuring shot clock and scoreboard trainers designed for coaches, players, and officials.

## Features

### 🏀 Shot Clock Trainer
- **Precision Timing**: 24-second countdown with 100ms accuracy
- **Manual Controls**: Start, stop, reset, and alternative reset (14 seconds)
- **Quick Adjustments**: Hold STOP + tap START/RESET for ±1 second adjustments
- **Keyboard Support**: Full keyboard control (A, S, D, F keys)
- **Mobile Optimized**: Touch controls with landscape mode support
- **Audio Feedback**: Button press sounds for tactile response

### 🏀 Scoreboard Trainer
- **Complete Scoring System**: Team scores, fouls, timeouts tracking
- **Period Management**: 1-4 quarters plus overtime support
- **Possession Control**: Toggle possession arrow
- **Timer Functions**: Game clock with start/stop/reset controls
- **Audio Alerts**: Buzzer/siren sounds for game events
- **Error Correction**: Undo last action functionality
- **Desktop Optimized**: Professional control panel layout

## Technology Stack

- **Frontend**: Pure HTML, CSS, and JavaScript (no frameworks)
- **Design**: Mobile-first responsive design with desktop optimization
- **Audio**: Web Audio API for sound effects
- **Storage**: Client-side state management
- **Fonts**: Google Fonts (Orbitron, Roboto)

## Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/basketball-training-suite.git
   cd basketball-training-suite
   ```

2. **Open in browser**
   - Open `index.html` in your web browser
   - Or serve with any static file server

3. **For development**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   ```

## Usage

### Navigation
- **Front Court**: Access Shot Clock Trainer
- **Back Court**: Access Scoreboard Trainer

### Shot Clock Controls
- **STOP**: Pause timer
- **START**: Begin/resume countdown (+1 sec when holding STOP)
- **RESET**: Return to 24 seconds (-1 sec when holding STOP)
- **ALT RESET**: Set to 14 seconds

### Scoreboard Controls
- **Scoring**: Add 1, 2, or 3 points per team
- **Fouls**: Track team fouls (resets each period)
- **Timeouts**: Monitor timeouts (2→3→1 based on period)
- **Timer**: Full game clock control
- **Periods**: Progress through quarters and overtime

## Mobile Usage

### Shot Clock Trainer
- Fully optimized for mobile devices
- Works in both portrait and landscape modes
- Touch controls with visual feedback

### Scoreboard Trainer
- Best used in desktop mode on mobile browsers
- Switch to "Desktop Site" in browser settings
- Use landscape mode and pinch/zoom for optimal viewing

## Deployment

### GitHub Pages
1. Enable GitHub Pages in repository settings
2. Select source: Deploy from a branch
3. Choose main branch / (root)

### Netlify
1. Connect your GitHub repository
2. Build settings: None required (static site)
3. Deploy directory: / (root)

### Other Static Hosts
Compatible with any static file hosting service:
- Vercel
- Surge.sh
- Firebase Hosting
- AWS S3 + CloudFront

## Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile Browsers**: iOS Safari, Android Chrome
- **Features**: Web Audio API, CSS Grid, Flexbox

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test across different devices
5. Submit a pull request

## License

MIT License - feel free to use for personal or commercial projects.

## Support

If this project helps your basketball training, consider supporting its development:

[Buy me a coffee](https://www.buymeacoffee.com/kelvinsugars) ☕

## Acknowledgments

Created by a parent who once found basketball scoring stressful—built to support our kids and the game.

---

**Perfect for**: Basketball coaches, players, officials, parents, and anyone learning basketball timing and scoring.
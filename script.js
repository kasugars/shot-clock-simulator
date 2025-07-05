class ShotClockTimer {
    constructor() {
        this.currentTime = 24; // Default 24 seconds
        this.isRunning = false;
        this.intervalId = null;
        this.isStopPressed = false;
        this.isExpired = false;
        
        // DOM elements
        this.timeDisplay = document.getElementById('timeDisplay');
        this.stopBtn = document.getElementById('stopBtn');
        this.startBtn = document.getElementById('startBtn');
        this.resetBtn = document.getElementById('resetBtn');
        this.altResetBtn = document.getElementById('altResetBtn');
        
        this.initializeEventListeners();
        this.updateDisplay();
    }
    
    initializeEventListeners() {
        // Stop button - hold detection
        this.stopBtn.addEventListener('mousedown', () => {
            this.isStopPressed = true;
            this.stopBtn.classList.add('pressed');
            this.stopTimer();
        });
        
        this.stopBtn.addEventListener('mouseup', () => {
            this.isStopPressed = false;
            this.stopBtn.classList.remove('pressed');
        });
        
        this.stopBtn.addEventListener('mouseleave', () => {
            this.isStopPressed = false;
            this.stopBtn.classList.remove('pressed');
        });
        
        // Touch events for mobile
        this.stopBtn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.isStopPressed = true;
            this.stopBtn.classList.add('pressed');
            this.stopTimer();
        });
        
        this.stopBtn.addEventListener('touchend', (e) => {
            e.preventDefault();
            this.isStopPressed = false;
            this.stopBtn.classList.remove('pressed');
        });
        
        // Start button - handle both click and touch
        this.startBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (this.isStopPressed) {
                // Add 1 second when STOP is held
                this.adjustTime(1);
                this.addButtonFeedback(this.startBtn);
            } else {
                this.startTimer();
                this.addButtonFeedback(this.startBtn);
            }
        });

        // Touch events for start button
        this.startBtn.addEventListener('touchend', (e) => {
            e.preventDefault();
            if (this.isStopPressed) {
                // Add 1 second when STOP is held
                this.adjustTime(1);
                this.addButtonFeedback(this.startBtn);
            } else {
                this.startTimer();
                this.addButtonFeedback(this.startBtn);
            }
        });
        
        // Reset button - handle both click and touch
        this.resetBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (this.isStopPressed) {
                // Subtract 1 second when STOP is held
                this.adjustTime(-1);
                this.addButtonFeedback(this.resetBtn);
            } else {
                this.resetTimer(24);
                this.addButtonFeedback(this.resetBtn);
            }
        });

        // Touch events for reset button
        this.resetBtn.addEventListener('touchend', (e) => {
            e.preventDefault();
            if (this.isStopPressed) {
                // Subtract 1 second when STOP is held
                this.adjustTime(-1);
                this.addButtonFeedback(this.resetBtn);
            } else {
                this.resetTimer(24);
                this.addButtonFeedback(this.resetBtn);
            }
        });
        
        // Alt Reset button
        this.altResetBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.resetTimer(14);
            this.addButtonFeedback(this.altResetBtn);
        });
        
        // Prevent context menu on long press
        document.addEventListener('contextmenu', (e) => {
            if (e.target.classList.contains('control-btn')) {
                e.preventDefault();
            }
        });
        
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            switch(e.code) {
                case 'KeyA':
                    e.preventDefault();
                    this.isStopPressed = true;
                    this.stopBtn.classList.add('pressed');
                    this.stopTimer();
                    break;
                case 'KeyS':
                    e.preventDefault();
                    if (this.isStopPressed) {
                        // Add 1 second when A (STOP) is held
                        this.adjustTime(1);
                    } else {
                        this.startTimer();
                    }
                    this.addButtonFeedback(this.startBtn);
                    break;
                case 'KeyD':
                    e.preventDefault();
                    if (this.isStopPressed) {
                        // Subtract 1 second when A (STOP) is held
                        this.adjustTime(-1);
                    } else {
                        this.resetTimer(24);
                    }
                    this.addButtonFeedback(this.resetBtn);
                    break;
                case 'KeyF':
                    e.preventDefault();
                    this.resetTimer(14);
                    this.addButtonFeedback(this.altResetBtn);
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    this.adjustTime(1);
                    break;
                case 'ArrowDown':
                    e.preventDefault();
                    this.adjustTime(-1);
                    break;
            }
        });

        // Keyboard key release
        document.addEventListener('keyup', (e) => {
            switch(e.code) {
                case 'KeyA':
                    this.isStopPressed = false;
                    this.stopBtn.classList.remove('pressed');
                    break;
            }
        });
    }
    
    addButtonFeedback(button) {
        button.classList.add('active');
        setTimeout(() => {
            button.classList.remove('active');
        }, 100);
    }
    
    startTimer() {
        if (this.isRunning || this.currentTime <= 0) return;
        
        this.isRunning = true;
        this.isExpired = false;
        this.timeDisplay.classList.remove('expired');
        
        this.intervalId = setInterval(() => {
            this.currentTime--;
            this.updateDisplay();
            
            if (this.currentTime <= 0) {
                this.currentTime = 0;
                this.stopTimer();
                this.expireTimer();
            }
        }, 1000);
    }
    
    stopTimer() {
        this.isRunning = false;
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }
    
    resetTimer(seconds) {
        this.stopTimer();
        this.currentTime = seconds;
        this.isExpired = false;
        this.timeDisplay.classList.remove('expired');
        this.updateDisplay();
    }
    
    adjustTime(seconds) {
        if (this.isRunning) return; // Don't adjust while running
        
        this.currentTime += seconds;
        if (this.currentTime < 0) this.currentTime = 0;
        if (this.currentTime > 24) this.currentTime = 24; // Maximum 24 seconds
        
        this.isExpired = false;
        this.timeDisplay.classList.remove('expired');
        this.updateDisplay();
        
        // Visual feedback for adjustment
        this.timeDisplay.style.transform = 'scale(1.1)';
        setTimeout(() => {
            this.timeDisplay.style.transform = 'scale(1)';
        }, 150);
    }
    
    expireTimer() {
        this.isExpired = true;
        this.timeDisplay.classList.add('expired');
        
        // Play a beep sound if audio is available
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = 800;
            oscillator.type = 'square';
            
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 1);
        } catch (error) {
            // Audio not supported or blocked
            console.log('Audio not available');
        }
    }
    
    updateDisplay() {
        if (this.currentTime <= 0) {
            this.timeDisplay.textContent = '00';
        } else if (this.currentTime < 10) {
            this.timeDisplay.textContent = '0' + this.currentTime;
        } else {
            this.timeDisplay.textContent = this.currentTime.toString();
        }
    }
    
    // Public methods for external control
    getCurrentTime() {
        return this.currentTime;
    }
    
    getIsRunning() {
        return this.isRunning;
    }
    
    getIsExpired() {
        return this.isExpired;
    }
}

// Initialize the shot clock timer when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const shotClock = new ShotClockTimer();
    
    // Expose to global scope for debugging
    window.shotClock = shotClock;
    
    // Prevent scrolling on mobile when interacting with buttons
    document.addEventListener('touchmove', (e) => {
        if (e.target.classList.contains('control-btn')) {
            e.preventDefault();
        }
    }, { passive: false });
    
    // Prevent double-tap zoom on buttons
    let lastTouchEnd = 0;
    document.addEventListener('touchend', (e) => {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            e.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
    
    // Add visual feedback for successful load
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.3s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Service worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Service worker could be added here for offline functionality
    });
}

// Fullscreen functionality
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.log(`Error attempting to enable fullscreen: ${err.message}`);
        });
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

// Add double-click to go fullscreen
document.addEventListener('dblclick', (e) => {
    if (e.target.classList.contains('shot-clock-display') || 
        e.target.classList.contains('time-display')) {
        toggleFullscreen();
    }
});

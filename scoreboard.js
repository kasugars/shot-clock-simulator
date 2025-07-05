console.log('scoreboard.js file loaded successfully');

class ScoreboardController {
    constructor() {
        this.gameState = {
            scoreA: 0,
            scoreB: 0,
            foulsA: 0,
            foulsB: 0,
            timeoutsA: 0,
            timeoutsB: 0,
            gameTime: 20 * 60, // 20 minutes in seconds
            isRunning: false,
            possession: 'A', // 'A' or 'B'
            indicatorA: false,
            indicatorB: false,
            period: 1, // Current period (1-4, then OT)
            lastAction: null // For error correction
        };
        
        this.actionHistory = []; // Track all actions for undo functionality
        this.timerInterval = null;
        this.initializeDisplay();
        this.initializeAudio();
    }

    initializeDisplay() {
        this.updateDisplay();
    }

    initializeAudio() {
        // Create audio context for buzzer sound
        this.audioContext = null;
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.log('Audio context not supported');
        }
    }

    saveStateToHistory(actionType, actionDetails) {
        // Save current state before making changes
        const stateCopy = JSON.parse(JSON.stringify(this.gameState));
        this.actionHistory.push({
            state: stateCopy,
            action: actionType,
            details: actionDetails,
            timestamp: Date.now()
        });
        
        // Limit history to prevent memory issues (keep last 50 actions)
        if (this.actionHistory.length > 50) {
            this.actionHistory.shift();
        }
    }

    undoLastAction() {
        if (this.actionHistory.length === 0) {
            console.log('No actions to undo');
            return;
        }

        // Restore the previous state
        const previousEntry = this.actionHistory.pop();
        this.gameState = JSON.parse(JSON.stringify(previousEntry.state));
        this.updateDisplay();
        this.playButtonSound();
        
        console.log(`Undid action: ${previousEntry.action}`);
    }

    updateDisplay() {
        // Update scores
        document.getElementById('scoreA').textContent = this.gameState.scoreA.toString().padStart(2, '0');
        document.getElementById('scoreB').textContent = this.gameState.scoreB.toString().padStart(2, '0');
        
        // Update fouls
        document.getElementById('foulsA').textContent = this.gameState.foulsA;
        document.getElementById('foulsB').textContent = this.gameState.foulsB;
        
        // Update timeouts
        document.getElementById('timeoutsA').textContent = this.gameState.timeoutsA;
        document.getElementById('timeoutsB').textContent = this.gameState.timeoutsB;
        
        // Update game time
        const minutes = Math.floor(this.gameState.gameTime / 60);
        const seconds = this.gameState.gameTime % 60;
        const minutesElement = document.getElementById('minutes');
        const secondsElement = document.getElementById('seconds');
        if (minutesElement) minutesElement.textContent = minutes.toString().padStart(2, '0');
        if (secondsElement) secondsElement.textContent = seconds.toString().padStart(2, '0');
        
        // Update possession arrow
        const arrow = document.getElementById('possessionArrow');
        if (arrow) {
            if (this.gameState.possession === 'A') {
                arrow.textContent = '←';
            } else {
                arrow.textContent = '→';
            }
        }
        
        // Update period display
        const periodElement = document.getElementById('period');
        if (periodElement) {
            console.log('Updating period display, period value:', this.gameState.period);
            if (this.gameState.period <= 4) {
                periodElement.textContent = this.gameState.period;
            } else if (this.gameState.period === 5) {
                periodElement.textContent = 'OT';
            }
            console.log('Period element text is now:', periodElement.textContent);
        } else {
            console.log('Period element not found!');
        }
    }

    addScore(team, points) {
        this.saveStateToHistory('score', {team, points});
        this.gameState.lastAction = {type: 'score', team, amount: points};
        
        if (team === 'A') {
            this.gameState.scoreA += points;
        } else {
            this.gameState.scoreB += points;
        }
        
        this.updateDisplay();
        this.playButtonSound();
    }

    addTeamFoul(team) {
        this.saveStateToHistory('foul', {team});
        this.gameState.lastAction = {type: 'foul', team, amount: 1};
        
        if (team === 'A') {
            this.gameState.foulsA += 1;
        } else {
            this.gameState.foulsB += 1;
        }
        
        this.updateDisplay();
        this.playButtonSound();
    }

    addTimeout(team) {
        this.saveStateToHistory('timeout', {team});
        this.gameState.lastAction = {type: 'timeout', team, amount: -1};
        
        if (team === 'A') {
            if (this.gameState.timeoutsA > 0) {
                this.gameState.timeoutsA -= 1;
            }
        } else {
            if (this.gameState.timeoutsB > 0) {
                this.gameState.timeoutsB -= 1;
            }
        }
        
        this.updateDisplay();
        this.playButtonSound();
    }

    toggleIndicator(team) {
        this.saveStateToHistory('indicator', {team});
        if (team === 'A') {
            this.gameState.indicatorA = !this.gameState.indicatorA;
        } else {
            this.gameState.indicatorB = !this.gameState.indicatorB;
        }
        
        this.updateDisplay();
        this.playButtonSound();
    }

    togglePossession() {
        this.saveStateToHistory('possession', {});
        this.gameState.possession = this.gameState.possession === 'A' ? 'B' : 'A';
        this.updateDisplay();
        this.playButtonSound();
    }

    addPeriod() {
        this.saveStateToHistory('period', {});
        
        // Cycle through 1,2,3,4,OT (5), then back to 1
        this.gameState.period += 1;
        if (this.gameState.period > 5) {
            this.gameState.period = 1;
        }
        
        // Reset fouls to 0 every period change
        this.gameState.foulsA = 0;
        this.gameState.foulsB = 0;
        
        // Reset timeouts based on period
        if (this.gameState.period === 3) {
            // Period 3: Reset timeouts to 3 for both teams
            this.gameState.timeoutsA = 3;
            this.gameState.timeoutsB = 3;
        } else if (this.gameState.period === 5) { // OT
            // Overtime: Set timeouts to 1 for both teams
            this.gameState.timeoutsA = 1;
            this.gameState.timeoutsB = 1;
        } else if (this.gameState.period === 1) {
            // New game: Reset timeouts to 2 for both teams
            this.gameState.timeoutsA = 2;
            this.gameState.timeoutsB = 2;
        }
        
        console.log('Period is now:', this.gameState.period);
        this.updateDisplay();
        this.playButtonSound();
    }

    startTimer() {
        if (!this.gameState.isRunning) {
            this.gameState.isRunning = true;
            this.timerInterval = setInterval(() => {
                if (this.gameState.gameTime > 0) {
                    this.gameState.gameTime--;
                    this.updateDisplay();
                } else {
                    this.holdTimer();
                    this.playSiren(); // Auto-buzzer when time expires
                }
            }, 1000);
            
            this.playButtonSound();
        }
    }

    holdTimer() {
        this.gameState.isRunning = false;
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
        this.playButtonSound();
    }

    resetTimer() {
        this.saveStateToHistory('timer_reset', {});
        this.holdTimer();
        this.gameState.gameTime = 20 * 60; // Reset to 20 minutes
        this.updateDisplay();
        this.playButtonSound();
    }

    adjustTime(type, amount) {
        this.saveStateToHistory('time_adjust', {type, amount});
        if (type === 'min') {
            this.gameState.gameTime += amount * 60;
        } else if (type === 'sec') {
            this.gameState.gameTime += amount;
        }
        
        // Ensure time doesn't go negative
        if (this.gameState.gameTime < 0) {
            this.gameState.gameTime = 0;
        }
        
        this.updateDisplay();
        this.playButtonSound();
    }

    errorCorrection() {
        if (this.gameState.lastAction) {
            const action = this.gameState.lastAction;
            
            switch (action.type) {
                case 'score':
                    if (action.team === 'A') {
                        this.gameState.scoreA = Math.max(0, this.gameState.scoreA - action.amount);
                    } else {
                        this.gameState.scoreB = Math.max(0, this.gameState.scoreB - action.amount);
                    }
                    break;
                    
                case 'foul':
                    if (action.team === 'A') {
                        this.gameState.foulsA = Math.max(0, this.gameState.foulsA - action.amount);
                    } else {
                        this.gameState.foulsB = Math.max(0, this.gameState.foulsB - action.amount);
                    }
                    break;
                    
                case 'timeout':
                    if (action.team === 'A') {
                        this.gameState.timeoutsA = Math.max(0, this.gameState.timeoutsA - action.amount);
                    } else {
                        this.gameState.timeoutsB = Math.max(0, this.gameState.timeoutsB - action.amount);
                    }
                    break;
            }
            
            this.gameState.lastAction = null;
            this.updateDisplay();
            this.playButtonSound();
        }
    }

    resetGame() {
        this.holdTimer();
        this.gameState = {
            scoreA: 0,
            scoreB: 0,
            foulsA: 0,
            foulsB: 0,
            timeoutsA: 0,
            timeoutsB: 0,
            gameTime: 20 * 60,
            isRunning: false,
            possession: 'A',
            indicatorA: false,
            indicatorB: false,
            period: 1,
            lastAction: null
        };
        this.actionHistory = []; // Clear undo history on game reset
        this.updateDisplay();
        this.playButtonSound();
    }

    newGame() {
        if (confirm('Start a new game? This will reset all scores and time.')) {
            this.resetGame();
        }
    }

    playSiren() {
        if (this.audioContext) {
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            oscillator.frequency.setValueAtTime(800, this.audioContext.currentTime);
            oscillator.frequency.setValueAtTime(400, this.audioContext.currentTime + 0.5);
            oscillator.frequency.setValueAtTime(800, this.audioContext.currentTime + 1);
            
            gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime);
            gainNode.gain.setValueAtTime(0, this.audioContext.currentTime + 1.5);
            
            oscillator.start(this.audioContext.currentTime);
            oscillator.stop(this.audioContext.currentTime + 1.5);
        } else {
            // Fallback for browsers without audio context
            console.log('BUZZER! 🚨');
            alert('BUZZER! 🚨');
        }
    }

    playButtonSound() {
        if (this.audioContext) {
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            oscillator.frequency.setValueAtTime(1000, this.audioContext.currentTime);
            gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
            gainNode.gain.setValueAtTime(0, this.audioContext.currentTime + 0.1);
            
            oscillator.start(this.audioContext.currentTime);
            oscillator.stop(this.audioContext.currentTime + 0.1);
        }
    }
}

// Initialize the scoreboard when page loads
let scoreboard;

document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing scoreboard...');
    scoreboard = new ScoreboardController();
    console.log('Scoreboard initialized successfully');
});

// Global functions for button clicks
function addScore(team, points) {
    scoreboard.addScore(team, points);
}

function addTeamFoul(team) {
    scoreboard.addTeamFoul(team);
}

function addTimeout(team) {
    scoreboard.addTimeout(team);
}

function toggleIndicator(team) {
    scoreboard.toggleIndicator(team);
}

function togglePossession() {
    scoreboard.togglePossession();
}

function startTimer() {
    scoreboard.startTimer();
}

function holdTimer() {
    scoreboard.holdTimer();
}

function resetTimer() {
    scoreboard.resetTimer();
}

function adjustTime(type, amount) {
    scoreboard.adjustTime(type, amount);
}

function errorCorrection() {
    scoreboard.errorCorrection();
}

function resetGame() {
    scoreboard.resetGame();
}

function newGame() {
    scoreboard.newGame();
}

function playSiren() {
    scoreboard.playSiren();
}

function undoLastAction() {
    scoreboard.undoLastAction();
}

function addPeriod() {
    console.log('Global addPeriod function called');
    if (scoreboard) {
        scoreboard.addPeriod();
    } else {
        console.log('ERROR: Scoreboard not initialized!');
    }
}
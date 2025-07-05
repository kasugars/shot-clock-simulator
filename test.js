console.log('Test JavaScript file loaded');

let gameState = {
    period: 1,
    timeoutsA: 2,
    timeoutsB: 2,
    scoreA: 0,
    scoreB: 0,
    foulsA: 0,
    foulsB: 0
};

function updateDisplay() {
    // Update period
    const periodElement = document.getElementById('period');
    if (periodElement) {
        if (gameState.period <= 4) {
            periodElement.textContent = gameState.period;
        } else if (gameState.period === 5) {
            periodElement.textContent = 'OT';
        }
    }
    
    // Update timeouts
    const timeoutsAElement = document.getElementById('timeoutsA');
    const timeoutsBElement = document.getElementById('timeoutsB');
    if (timeoutsAElement) timeoutsAElement.textContent = gameState.timeoutsA;
    if (timeoutsBElement) timeoutsBElement.textContent = gameState.timeoutsB;
    
    // Update scores
    const scoreAElement = document.getElementById('scoreA');
    const scoreBElement = document.getElementById('scoreB');
    if (scoreAElement) scoreAElement.textContent = gameState.scoreA;
    if (scoreBElement) scoreBElement.textContent = gameState.scoreB;
    
    // Update fouls
    const foulsAElement = document.getElementById('foulsA');
    const foulsBElement = document.getElementById('foulsB');
    if (foulsAElement) foulsAElement.textContent = gameState.foulsA;
    if (foulsBElement) foulsBElement.textContent = gameState.foulsB;
}

function testPeriod() {
    console.log('Period button clicked');
    
    // Cycle through 1,2,3,4,OT, then back to 1
    gameState.period += 1;
    if (gameState.period > 5) {
        gameState.period = 1;
    }
    
    // Reset timeouts based on period
    if (gameState.period === 3) {
        // Period 3: Reset timeouts to 3 for both teams
        gameState.timeoutsA = 3;
        gameState.timeoutsB = 3;
        console.log('Period 3 reached - timeouts reset to 3 each');
    } else if (gameState.period === 5) { // OT
        // Overtime: Set timeouts to 1 for both teams
        gameState.timeoutsA = 1;
        gameState.timeoutsB = 1;
        console.log('Overtime reached - timeouts set to 1 each');
    } else if (gameState.period === 1) {
        // New game: Reset timeouts to 2 for both teams
        gameState.timeoutsA = 2;
        gameState.timeoutsB = 2;
        console.log('New game - timeouts reset to 2 each');
    }
    
    updateDisplay();
    console.log('Period changed to:', gameState.period <= 4 ? gameState.period : 'OT');
}

function addTimeout(team) {
    console.log('Timeout button clicked for team', team);
    
    if (team === 'A') {
        if (gameState.timeoutsA > 0) {
            gameState.timeoutsA -= 1;
            console.log('Team A timeouts reduced to:', gameState.timeoutsA);
        } else {
            console.log('Team A already at 0 timeouts');
        }
    } else if (team === 'B') {
        if (gameState.timeoutsB > 0) {
            gameState.timeoutsB -= 1;
            console.log('Team B timeouts reduced to:', gameState.timeoutsB);
        } else {
            console.log('Team B already at 0 timeouts');
        }
    }
    
    updateDisplay();
}

// Initialize display on load
document.addEventListener('DOMContentLoaded', function() {
    updateDisplay();
});
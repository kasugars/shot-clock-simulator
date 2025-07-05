console.log('Test JavaScript file loaded');

let currentPeriod = 1;

function testPeriod() {
    console.log('Test period function called');
    const periodElement = document.getElementById('period');
    if (periodElement) {
        // Cycle through 1,2,3,4,OT, then back to 1
        currentPeriod += 1;
        if (currentPeriod > 5) {
            currentPeriod = 1;
        }
        
        if (currentPeriod <= 4) {
            periodElement.textContent = currentPeriod;
        } else if (currentPeriod === 5) {
            periodElement.textContent = 'OT';
        }
        
        console.log('Changed period to:', periodElement.textContent);
    } else {
        console.log('Period element not found');
    }
}
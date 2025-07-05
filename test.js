console.log('Test JavaScript file loaded');

function testPeriod() {
    console.log('Test period function called');
    const periodElement = document.getElementById('period');
    if (periodElement) {
        periodElement.textContent = 'OT';
        console.log('Changed period to OT');
    } else {
        console.log('Period element not found');
    }
}
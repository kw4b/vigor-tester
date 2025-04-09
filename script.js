/*eslint-env es6*/ /*eslint-env browser*/

document.addEventListener('DOMContentLoaded', function() {
    const BASE_POINTS = 5;
    const MAX_POINTS = 10;
    const MIN_POINTS = 1;

    const currentPageKey = window.location.pathname; // key for current page
    let currentPagePoints = JSON.parse(sessionStorage.getItem(currentPageKey)) || BASE_POINTS;

    let totalPoints = sessionStorage.getItem('totalPoints');
    if (totalPoints === null) {
        totalPoints = BASE_POINTS;
        sessionStorage.setItem('totalPoints', totalPoints);
    } else {
        totalPoints = parseInt(totalPoints);
    }

    const pointsDisplay = document.getElementById('points-display');
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');

    function updateDisplay() {
        pointsDisplay.textContent = totalPoints < 10 ? '0' + totalPoints : totalPoints;
        updateTitlesHighlight();
    }

    function updateTitlesHighlight() {
        for (let i = 1; i <= MAX_POINTS; i++) {
            const titleDiv = document.querySelector(`.title${i}`);
            if (i <= currentPagePoints) {
                titleDiv.classList.add('highlight');
            } else {
                titleDiv.classList.remove('highlight');
            }
        }
    }

    function updateSessionStorage() {
        sessionStorage.setItem(currentPageKey, JSON.stringify(currentPagePoints));
        sessionStorage.setItem('totalPoints', totalPoints);
    }

    incrementButton.addEventListener('click', function() {
        if (totalPoints > 0 && currentPagePoints < MAX_POINTS) {
            currentPagePoints++;
            totalPoints--;
            updateDisplay();
            updateSessionStorage();
        }
    });

    decrementButton.addEventListener('click', function() {
        if (currentPagePoints > MIN_POINTS) {
            currentPagePoints--;
            totalPoints++;
            updateDisplay();
            updateSessionStorage();
        }
    });

    updateDisplay();
});





document.addEventListener('DOMContentLoaded', function() {
    const attributes = ['strength', 'perception', 'endurance', 'charisma', 'intelligence', 'agility', 'luck'];
    const BASE_POINTS = 5;

    attributes.forEach(attribute => {
        const attributeScore = JSON.parse(sessionStorage.getItem(`/path/to/${attribute}.html`)) || BASE_POINTS;
        document.getElementById(`${attribute}-score`).textContent = attributeScore;
    });

    const totalPoints = parseInt(sessionStorage.getItem('totalPoints')) || BASE_POINTS;
    document.getElementById('total-points-remaining').textContent = totalPoints < 10 ? '0' + totalPoints : totalPoints;
});



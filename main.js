function generateRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 101);

    document.getElementById('randomNumberDisplay').innerText = `Random number: ${randomNumber}`;
}

function showMouseCoordinates(event) {
    document.getElementById('coordinates').innerText = `Mouse cords: ${event.clientX} , ${event.clientY}`;
}

function showMouseButton(event) {
    let buttonClicked = '';
    if (event.type === 'click') {
        if (event.button === 0) {
            buttonClicked = 'left click';
        }
    } else if (event.type === 'contextmenu') {
        event.preventDefault();
        buttonClicked = 'Right click';
    }

    document.getElementById('mouseButton').innerText = `Mouse button:${buttonClicked} `;
}

window.addEventListener('contextmenu', (event) => {
    event.preventDefault()
})

function toggleTextVisibility() {
    var hiddenText = document.getElementById('hiddenText');

    if (hiddenText.style.display === 'none') {
        hiddenText.style.display = 'block';
    } else {
        hiddenText.style.display = 'none';
    }
}

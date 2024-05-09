let pressedKeys = [];
let leftClicks = 0;
let rightClicks = 0;
let mouseMovements = 0;
let mouseX = 0;
let mouseY = 0;

document.addEventListener('keydown', function(event) {
    if (!pressedKeys.includes(event.key)) {
        pressedKeys.push(event.key);
        updateOutput();
    }
});

document.addEventListener('keyup', function(event) {
    const index = pressedKeys.indexOf(event.key);
    if (index !== -1) {
        pressedKeys.splice(index, 1);
        updateOutput();
    }
});

document.addEventListener('click', function(event) {
    if (event.button === 0) {
        leftClicks++;
    }
    updateOutput();
});

document.addEventListener('contextmenu', function(event) {
    event.preventDefault(); 
    rightClicks++;
    updateOutput();
});

document.addEventListener('mousemove', function(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
    mouseMovements++;
    updateOutput();
});

function updateOutput() {
    document.getElementById('pressedKeys').innerText = pressedKeys.join(', ');
    document.getElementById('leftClicks').innerText = leftClicks;
    document.getElementById('rightClicks').innerText = rightClicks;
    document.getElementById('mouseMovements').innerText = mouseMovements;
    document.getElementById('mousePosition').innerText = `X: ${mouseX}, Y: ${mouseY}`;
}

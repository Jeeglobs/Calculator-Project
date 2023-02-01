console.log('linked');

// display and buttons
const display = document.querySelector('#output');
const buttons = document.querySelectorAll('.button');


const fullDisplay = [];

for (let button of buttons) {
    button.addEventListener('click', function (event) {
        let input = event.target.innerText;
        // console.log(input);
        fullDisplay.push(input);
        display.innerText = fullDisplay.join("");
    })
}
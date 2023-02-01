console.log('linked');

// CONSTANTS BELOW
// display and buttons
const display = document.querySelector('#output');
const buttons = document.querySelectorAll('.other');

// operators
// const plus = document.querySelector('#add');
// const minus = document.querySelector('#subtract');
// const times = document.querySelector('#multiply');
// const divideBy = document.querySelector('#divide');

// clear-button and equals-button
const calculate = document.querySelector('#equal');
const clearDisplay = document.querySelector('#clear');


const fullDisplay = [];

for (let button of buttons) {
    button.addEventListener('click', function (event) {
        let input = event.target.innerText;
        // console.log(input);
        fullDisplay.push(input);
        display.innerText = fullDisplay.join("");
    })
}

calculate.addEventListener('click', function(event) {
    // make clicking 'equals' evaluate expression in the display
    let answer = eval(display.innerText);
    console.log(answer);
    display.innerText = answer;
})

clearDisplay.addEventListener('click', function(event) {
    display.innerText = "";
})
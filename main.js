console.log('linked');

const display = document.querySelector('#output');
// console.log(display);

const buttons = document.querySelectorAll('.button');
// console.log(buttons);

for (let button of buttons) {
    button.addEventListener('click', function (event) {
        console.log(event.target.innerText)
        // let buttonValue = event.target.innerText
    })
}
console.log('linked');

let display = document.querySelector('#output');
// console.log(display);

let buttons = document.querySelectorAll('.button');
buttons.addEventListener('click', function(event) {
    console.log(event.target.innerText)
    // i thought this would put innertext in console log when clicked, but did not work
})

let numbers = document.querySelectorAll('.number');
// console.log(numbers);
numbers.addEventListener('click', function() {
    alert("number clicked");
    // Uncaught TypeError: numbers.addEventListener is not a function
});
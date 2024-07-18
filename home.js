// This is the JavaScript home.html code
// GUIDELINES:
//  1. Give every variable/const smallest scope
//  2. Grab HTML elements by tag and store in const
//  3. Put all other code inside functions

const colorField = document.getElementById("color-field")
const clickButton = document.getElementById("click button")

function buttonPress() {
    body.style.backgroundColor = colorField.value;
}
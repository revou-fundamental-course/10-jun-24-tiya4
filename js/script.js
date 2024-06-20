function convertTemp() {
    var inputTemp = parseFloat(document.getElementById('inputTemp').value);
    var resultFahrenheit = inputTemp * 9/5 + 32;

    var resultCalculate = document.getElementById('resultFahrenheit');
    resultCalculate.value = `
        Fahrenheit: ${inputTemp.toFixed(2)}°C * 9/5 + 32 = ${resultFahrenheit.toFixed(2)}°F
    `;
}


function reverse() {
    var inputTemp = parseFloat(document.getElementById('inputTemp').value);
    var inputFahrenheit = parseFloat(document.getElementById('inputFahrenheit').value);
    var resultCelsius = (inputFahrenheit - 32) * 5/9; // Fixed the formula for Celsius conversion

    var resultCalculate = document.getElementById('resultCalculate');
    resultCalculate.value = `
        Fahrenheit: ${inputTemp.toFixed(2)}°C * 9/5 + 32 = ${inputFahrenheit.toFixed(2)}°F
        Celsius: (${inputFahrenheit.toFixed(2)}°F - 32) * 5/9 = ${resultCelsius.toFixed(2)}°C
    `;
}

function reset() {
    document.getElementById('inputTemp').value = '';
    document.getElementById('inputFahrenheit').value = '';
    document.getElementById('resultFahrenheit').value = ''; // Changed to 'resultFahrenheit'
    document.getElementById('resultCalculate').value = '';
}

var button = document.getElementById('myButton');

button.addEventListener('click', function() {
    convertTemp();
    reverse();
    reset();
});

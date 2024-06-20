function convertTemp() {
    var inputTemp = parseFloat(document.getElementById('inputTemp').value);
    var inputFahrenheit = parseFloat(document.getElementById('inputFahrenheit').);
    var resultFahrenheit = inputTemp * 9/5 + 32;
    resultCalculate.innerHTML = `
    Fahrenheit: ${inputTemp.toFixed(2)}°C * 9/5 + 32 = ${resultFahrenheit.toFixed(2)}°F
`;
}
    


function reverse() {
    var inputTemp = parseFloat(document.getElementById('inputTemp').value);
    var inputFahrenheit = parseFloat(document.getElementById('inputFahrenheit').value);
    var resultCalculate = document.getElementById('resultCalculate');
    resultCalculate.innerHTML = `
        Fahrenheit: ${inputTemp.toFixed(2)}°C * 9/5 + 32 = ${resultFahrenheit.toFixed(2)}°F
    `;

    var resultCalculate = document.getElementById('resultCalculate');
    resultCalculate.innerHTML = `
        Celsius: (${inputFahrenheit.toFixed(2)}°F - 32) * 5/9 = ${resultCelsius.toFixed(2)}°C
    `;
}

function reset() {
    document.getElementById('inputTemp').value = '';
    document.getElementById('inputFahrenheit').value = '';
    document.getElementById('resultCalculate').innerHTML = '';
}

button.addEventListener('click', () => {
    convertTemp()
})

button.addEventListener('click', () => {
    reverse()
})

button.addEventListener('click', () => {
    reset()
})
const express = require('express');
const app = express();

// Serve static files including JavaScript
app.use(express.static('public', {
    setHeaders: (res, path) => {
        if (path.endsWith('.js')) {
            res.setHeader('Content-Type', 'text/javascript');
        }
    }
}));

app.listen(5500, () => {
    console.log('Server is running on http://127.0.0.1:5500/script.js');
});

function convertTemp() {
    var inputTemp = parseFloat(document.getElementById('inputTemp').value);
    var resultFahrenheit = (inputTemp * 9/5) + 32;

    var resultCalculate = document.getElementById('resultCalculate');
    resultCalculate.innerHTML = `
        Fahrenheit: ${inputTemp.toFixed(2)}°C * 9/5 + 32 = ${resultFahrenheit.toFixed(2)}°F
    `;
}

function reverse() {
    var inputFahrenheit = parseFloat(document.getElementById('inputFahrenheit').value);
    var resultCelsius = (inputFahrenheit - 32) * 5/9;

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
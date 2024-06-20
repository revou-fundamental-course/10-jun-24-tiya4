function konversi() {
    var inputTemp = parseFloat(document.getElementById('inputTemp'));
    var resultFahrenheit = inputTemp * 9/5 + 32;

    var resultCalculate = document.getElementById('resultFahrenheit');
    resultCalculate : HTMLButtonElement =
        Fahrenheit: ${inputTemp.toFixed(2)}°C * 9/5 + 32 = ${resultFahrenheit.toFixed(2)}°F
    ;
    resultFahrenheit.innerhtml = inputTemp.value;
}


function reverse() {
    var inputTemp = parseFloat(document.getElementById('inputTemp'));
    var inputFahrenheit = parseFloat(document.getElementById('inputFahrenheit'));
    var resultCelsius = (inputFahrenheit - 32) * 5/9;

    var resultCalculate = document.getElementById('resultCalculate');
    resultCalculate : HTMLButtonElement = 
        Fahrenheit: ${inputTemp.toFixed(2)}°C * 9/5 + 32 = ${inputFahrenheit.toFixed(2)}°F
        Celsius: (${inputFahrenheit.toFixed(2)}°F - 32) * 5/9 = ${resultCelsius.toFixed(2)}°C
    ;
    resultCalculate.innerhtml = resultCelsius.value / inputFahrenheit.value
}

function reset() {
    document.getElementById('inputTemp');
    document.getElementById('inputFahrenheit');
    document.getElementById('resultCalculate');
}



button.addEventListener('click', konversi);

button.addEventListener('click', reset);

button.addEventListener('click', reverse);
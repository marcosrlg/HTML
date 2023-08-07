document.getElementById("convertButton").addEventListener("click", function() {
    var inputTemp = parseFloat(document.getElementById("inputTemp").value);
    var selectConversion = document.getElementById("selectConversion").value;
    var result = document.getElementById("result");

    if (isNaN(inputTemp)) {
        result.innerHTML = "Ingrese una temperatura válida.";
        return;
    }

    var convertedTemp;

    if (selectConversion === "celsiusToFahrenheit") {
        convertedTemp = (inputTemp * 9/5) + 32;
        result.innerHTML = inputTemp + " °C equivale a " + convertedTemp.toFixed(2) + " °F";
    } else if (selectConversion === "fahrenheitToCelsius") {
        convertedTemp = (inputTemp - 32) * 5/9;
        result.innerHTML = inputTemp + " °F equivale a " + convertedTemp.toFixed(2) + " °C";
    }
});
document.addEventListener("DOMContentLoaded", function () {
    var convertirDolaresButton = document.getElementById("convertirDolaresButton");
    var convertirCordobasButton = document.getElementById("convertirCordobasButton");
    
    convertirDolaresButton.addEventListener("click", convertCordobasToDollars);
    convertirCordobasButton.addEventListener("click", convertDollarsToCordobas);
});

function convertCordobasToDollars() {
    var monto = parseFloat(document.getElementById("montoCordobas").value);
    var tasaCambio = parseFloat(document.getElementById("tasaCambio").value);
    var conversionDolares = monto / tasaCambio;
    document.getElementById("resultadoDolares").innerHTML = conversionDolares.toFixed(2) + " USD";
}

function convertDollarsToCordobas() {
    var monto = parseFloat(document.getElementById("montoDolares").value);
    var tasaCambio = parseFloat(document.getElementById("tasaCambio").value);
    var conversionCordobas = monto * tasaCambio;
    document.getElementById("resultadoCordobas").innerHTML = conversionCordobas.toFixed(2) + " C$";
}
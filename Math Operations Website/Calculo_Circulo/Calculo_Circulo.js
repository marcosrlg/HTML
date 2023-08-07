function calcular() {
    var valorConocido = parseFloat(document.getElementById("valorConocido").value);
    var resultado = document.getElementById("resultado");

    var radio, diametro, circunferencia, area;

    if (document.getElementById("radio").checked) {
        radio = valorConocido;
        diametro = 2 * radio;
        circunferencia = 2 * Math.PI * radio;
        area = Math.PI * radio * radio;
    } else if (document.getElementById("diametro").checked) {
        diametro = valorConocido;
        radio = diametro / 2;
        circunferencia = Math.PI * diametro;
        area = Math.PI * Math.pow(radio, 2);
    } else if (document.getElementById("circunferencia").checked) {
        circunferencia = valorConocido;
        radio = circunferencia / (2 * Math.PI);
        diametro = 2 * radio;
        area = Math.PI * Math.pow(radio, 2);
    } else if (document.getElementById("area").checked) {
        area = valorConocido;
        radio = Math.sqrt(area / Math.PI);
        diametro = 2 * radio;
        circunferencia = 2 * Math.PI * radio;
    }

    resultado.innerHTML = `
        Radio: ${radio.toFixed(2)} <br>
        Diámetro: ${diametro.toFixed(2)} <br>
        Circunferencia: ${circunferencia.toFixed(2)} <br>
        Área: ${area.toFixed(2)}
    `;
}
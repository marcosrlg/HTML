function calcularSoluciones() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    const discriminante = b * b - 4 * a * c;

    if (discriminante < 0) {
        document.getElementById('resultado').innerText = 'La función no tiene solución real.';
    } else if (discriminante === 0) {
        const x1 = -b / (2 * a);
        document.getElementById('resultado').innerText = `La solución única es x = ${x1}`;
    } else {
        const x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        document.getElementById('resultado').innerText = `Las soluciones son x1 = ${x1} y x2 = ${x2}`;
    }
}
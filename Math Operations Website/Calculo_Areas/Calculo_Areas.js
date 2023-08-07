document.addEventListener("DOMContentLoaded", function () {
  const calcularBtn = document.getElementById("calcularBtn");
  calcularBtn.addEventListener("click", calcularArea);
});

function calcularArea() {
  const shape = document.getElementById("shape").value;
  const base = parseFloat(document.getElementById("base").value);
  const altura = parseFloat(document.getElementById("altura").value);
  let area = 0;

  if (shape === "cuadrado") {
    area = base * base;
  } else if (shape === "rectangulo") {
    area = base * altura;
  } else if (shape === "paralelogramo") {
    area = base * altura;
  } else if (shape === "triangulo") {
    area = (base * altura) / 2;
  }

  document.getElementById("resultado").innerText = `El área del ${shape} es: ${area}`;
}

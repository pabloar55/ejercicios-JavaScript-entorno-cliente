import { calcularCambio } from "./divisas.js";

const form = document.getElementById("idForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const resultado = calcularCambio(form.de.value, form.a.value, form.importe.value);
    let resultadoDiv = document.getElementById("resultado");
    let p = document.createElement("p");
    const milisUTC = Date.now();
    p.textContent = new Date(milisUTC).toLocaleString() + "   " + resultado;
    resultadoDiv.appendChild(p);
});
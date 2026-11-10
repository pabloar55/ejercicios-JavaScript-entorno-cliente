import { Tren } from "./Tren.js";
import { ESTACIONES, calcularDistancia } from "./distancias.js";

const CLAVE = "trenes";

const EVENTOS = [
    { texto: "🐑 ¡Retraso por ovejas en la vía!", retraso: 10 },
    { texto: "🔧 ¡Avería en el motor!", retraso: 15 },
    { texto: "✅ Viaje sin incidentes", retraso: 0 }
];

// ---------- Datos ----------
const texto = localStorage.getItem(CLAVE);
let trenes = texto ? JSON.parse(texto) : [];

function guardarTrenes() {
    localStorage.setItem(CLAVE, JSON.stringify(trenes));
}

function fechaHoy() {
    return new Date().toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
}

// ---------- Elementos del DOM ----------
const formTren = document.getElementById("formTren");
const errorTren = document.getElementById("errorTren");
const formViaje = document.getElementById("formViaje");
const selOrigen = document.getElementById("origen");
const selDestino = document.getElementById("destino");
const selTren = document.getElementById("trenViaje");
const resultadoViaje = document.getElementById("resultadoViaje");
const listado = document.getElementById("listado");
const inputBusqueda = document.getElementById("busqueda");
const botonBuscar = document.getElementById("botonBuscar");
const botonBorrar = document.getElementById("botonBorrar");

// ---------- Pintar ----------
function crearParrafo(etiqueta, valor) {
    const p = document.createElement("p");
    const strong = document.createElement("strong");
    strong.textContent = etiqueta + ": ";
    p.appendChild(strong);
    p.appendChild(document.createTextNode(valor));
    return p;
}

function pintarListado(lista) {
    listado.innerHTML = "";

    if (lista.length === 0) {
        const p = document.createElement("p");
        p.textContent = "No hay trenes para mostrar.";
        listado.appendChild(p);
        return;
    }

    lista.forEach(tren => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");

        const h3 = document.createElement("h3");
        h3.textContent = tren.nombre;
        tarjeta.appendChild(h3);

        tarjeta.appendChild(crearParrafo("Tipo", tren.tipo));
        tarjeta.appendChild(crearParrafo("Velocidad", tren.velocidad + " km/h"));
        tarjeta.appendChild(crearParrafo("Fecha de alta", tren.fechaAlta));

        listado.appendChild(tarjeta);
    });
}

function rellenarEstaciones(select) {
    ESTACIONES.forEach(estacion => {
        const option = document.createElement("option");
        option.value = estacion;
        option.textContent = estacion;
        select.appendChild(option);
    });
}

function rellenarSelectTrenes() {
    selTren.innerHTML = "";
    trenes.forEach((tren, indice) => {
        const option = document.createElement("option");
        option.value = indice;
        option.textContent = tren.nombre;
        selTren.appendChild(option);
    });
}

function actualizarTodo() {
    inputBusqueda.value = "";
    pintarListado(trenes);
    rellenarSelectTrenes();
}

// ---------- 1. Añadir tren ----------
formTren.addEventListener("submit", (e) => {
    e.preventDefault();
    errorTren.textContent = "";

    const nombre = formTren.nombre.value.trim();
    const tipo = formTren.tipo.value;
    const velocidad = Number(formTren.velocidad.value);

    if (nombre === "") {
        errorTren.textContent = "El nombre es obligatorio.";
        return;
    }
    if (isNaN(velocidad) || velocidad < 10 || velocidad > 300) {
        errorTren.textContent = "La velocidad debe estar entre 10 y 300 km/h.";
        return;
    }

    const tren = new Tren(nombre, tipo, velocidad, fechaHoy());
    trenes.push(tren);
    guardarTrenes();

    formTren.reset();
    actualizarTodo();
});

// ---------- 2. Simular viaje ----------
formViaje.addEventListener("submit", (e) => {
    e.preventDefault();
    resultadoViaje.innerHTML = "";

    const origen = selOrigen.value;
    const destino = selDestino.value;
    const tren = trenes[selTren.value];

    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta-viaje");
    resultadoViaje.appendChild(tarjeta);

    if (!tren) {
        tarjeta.classList.add("tarjeta-error");
        tarjeta.textContent = "⚠️ Primero tienes que registrar algún tren.";
        return;
    }
    if (origen === destino) {
        tarjeta.classList.add("tarjeta-error");
        tarjeta.textContent = "⚠️ La estación de origen y destino deben ser distintas.";
        return;
    }

    const distancia = calcularDistancia(origen, destino);
    const tiempo = Math.round(distancia / tren.velocidad * 60);
    const evento = EVENTOS[Math.floor(Math.random() * EVENTOS.length)];

    const h3 = document.createElement("h3");
    h3.textContent = `🚉 Viaje de ${origen} a ${destino}`;
    tarjeta.appendChild(h3);

    tarjeta.appendChild(crearParrafo("🚂 Tren", `${tren.nombre} (${tren.tipo}, ${tren.velocidad} km/h)`));
    tarjeta.appendChild(crearParrafo("📏 Distancia", distancia + " km"));
    tarjeta.appendChild(crearParrafo("⏱️ Tiempo estimado", tiempo + " minutos"));

    const pEvento = document.createElement("p");
    if (evento.retraso > 0) {
        pEvento.textContent = `${evento.texto} (+${evento.retraso} min)`;
        pEvento.classList.add("evento-retraso");
    } else {
        pEvento.textContent = evento.texto;
        pEvento.classList.add("evento-ok");
    }
    tarjeta.appendChild(pEvento);

    tarjeta.appendChild(crearParrafo("🕒 Tiempo total", (tiempo + evento.retraso) + " minutos"));
});

// ---------- 3. Buscar tren ----------
botonBuscar.addEventListener("click", () => {
    const filtro = inputBusqueda.value.trim().toLowerCase();
    const filtrados = trenes.filter(tren =>
        tren.nombre.toLowerCase().includes(filtro) ||
        tren.tipo.toLowerCase().includes(filtro)
    );
    pintarListado(filtrados);
});

// ---------- 4. Borrar todos ----------
botonBorrar.addEventListener("click", () => {
    if (!confirm("¿Seguro que quieres borrar todos los trenes?")) return;
    localStorage.removeItem(CLAVE);
    trenes = [];
    resultadoViaje.innerHTML = "";
    actualizarTodo();
});

// ---------- Inicio ----------
rellenarEstaciones(selOrigen);
rellenarEstaciones(selDestino);
selDestino.selectedIndex = 1;
actualizarTodo();

import { getCookie } from "./cookies.js";

const texto = getCookie("Libro");
const libroArray = texto ? JSON.parse(texto) : [];
let main = document.getElementById("main");

libroArray.forEach(element => {
    let div = document.createElement("div");
    let p = document.createElement("p");
    p.textContent = "Título: " + element.titulo;
    div.appendChild(p);
    p = document.createElement("p");
    p.textContent = "Autor: " + element.autor;
    div.appendChild(p);
    p = document.createElement("p");
    p.textContent = "Paginas: " + element.paginas;
    div.appendChild(p);
    p = document.createElement("p");
    p.textContent = "Prestado: " + element.prestado;
    div.appendChild(p);
    main.appendChild(div);
});

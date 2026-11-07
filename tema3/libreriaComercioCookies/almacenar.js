import { Libro } from "./Libro.js";
import { getCookie, setCookie } from "./cookies.js";

const form = document.getElementById("idForm");
form.addEventListener("submit", (e)=> {

    e.preventDefault();
    let l = new Libro(form.titulo.value, form.autor.value, form.prestado.checked, form.paginas.value);

    // Mostrar en pantalla
    let main = document.getElementById("main");
    const p = document.createElement("p");
    p.textContent = l.aString();
    main.appendChild(p);
    
    //Guardar en una cookie un array de libros
    const texto = getCookie("Libro");
    let libros = texto ? JSON.parse(texto) : [];
    libros.push(l);
    setCookie("Libro", JSON.stringify(libros));

    location.href = "consultar.html"; 
})

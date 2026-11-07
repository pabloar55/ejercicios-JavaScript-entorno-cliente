import { Libro } from "./Libro.js";

const form = document.getElementById("idForm");
form.addEventListener("submit", (e)=> {

    e.preventDefault();
    let l = new Libro(form.titulo.value, form.autor.value, form.prestado.checked, form.paginas.value);

    // Mostrar en pantalla
    let main = document.getElementById("main");
    const p = document.createElement("p");
    p.textContent = l.aString();
    main.appendChild(p);
    
    //Guardar en la sesión un array de libros
    const texto = sessionStorage.getItem("Libro");
    let libros = texto ? JSON.parse(texto) : [];
    libros.push(l);
    sessionStorage.setItem("Libro", JSON.stringify(libros));

    location.href = "consultar.html"; 
})
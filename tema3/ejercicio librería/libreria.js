const input = document.getElementById("idForm");
const claveNumeroAleatorio = Math.ceil(Math.random() * 1000);
input.addEventListener("submit", gestionarCrear);

/**
 *
 * @param {SubmitEvent} event
 */
function gestionarCrear(event) {
  event.preventDefault();
  const titulo = document.getElementById("idTitulo").value;
  const nombre = document.getElementById("idNombre").value;
  const paginas = document.getElementById("idPaginas").value;
  const prestado = document.getElementById("idPrestado").checked;
  const libro = {
    titulo: titulo,
    nombre: nombre,
    paginas: paginas,
    prestado: prestado,
  };
  sessionStorage.setItem(`libro_${claveNumeroAleatorio}`, JSON.stringify(libro));
}

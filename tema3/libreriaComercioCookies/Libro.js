export class Libro{

    constructor(titulo, autor, prestado, paginas){
        this.autor = autor;
        this.titulo = titulo;
        this.prestado = prestado;
        this.paginas = paginas;
    }
    aString(){
        return `{Titulo: ${this.titulo} \nAutor: ${this.autor} \nPrestado: ${this.prestado} \nPaginas: ${this.paginas}}`;
    }
}
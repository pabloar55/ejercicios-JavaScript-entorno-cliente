// Guarda una cookie. El valor se codifica porque el JSON lleva caracteres
// (; , espacios, comillas...) que no están permitidos en una cookie.
export function setCookie(nombre, valor, dias = 7) {
    const maxAge = dias * 24 * 60 * 60; // en segundos
    document.cookie = `${nombre}=${encodeURIComponent(valor)}; max-age=${maxAge}; path=/`;
}

// Devuelve el valor de una cookie o null si no existe.
// document.cookie devuelve todas juntas: "a=1; b=2; Libro=..."
export function getCookie(nombre) {
    const cookies = document.cookie.split("; ");
    for (const c of cookies) {
        const partes = c.split("=");   // ["Libro", "%5B%7B..."]
        const clave = partes[0];
        const valor = partes[1];
        if (clave === nombre) {
            return decodeURIComponent(valor);
        }
    }
    return null;
}

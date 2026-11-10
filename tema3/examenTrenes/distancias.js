export const ESTACIONES = ["Sodor Central", "Knapford", "Vicarstown", "Tidmouth Sheds"];

// Distancias directas predefinidas (en km)
const DISTANCIAS_DIRECTAS = [
    ["Sodor Central", "Knapford", 25],
    ["Sodor Central", "Vicarstown", 15],
    ["Knapford", "Vicarstown", 10],
    ["Vicarstown", "Tidmouth Sheds", 12]
];

// Construye la matriz de distancias. Si dos estaciones no están conectadas
// directamente, se calcula la suma pasando por estaciones intermedias
// (algoritmo de Floyd-Warshall: se queda con el camino más corto).
function construirMatriz() {
    const n = ESTACIONES.length;
    const matriz = [];

    for (let i = 0; i < n; i++) {
        matriz.push([]);
        for (let j = 0; j < n; j++) {
            matriz[i].push(i === j ? 0 : Infinity);
        }
    }

    // Las distancias son iguales en los dos sentidos
    DISTANCIAS_DIRECTAS.forEach(([a, b, km]) => {
        const i = ESTACIONES.indexOf(a);
        const j = ESTACIONES.indexOf(b);
        matriz[i][j] = km;
        matriz[j][i] = km;
    });

    // Rellenar los huecos usando estaciones intermedias
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (matriz[i][k] + matriz[k][j] < matriz[i][j]) {
                    matriz[i][j] = matriz[i][k] + matriz[k][j];
                }
            }
        }
    }

    return matriz;
}

const MATRIZ = construirMatriz();

export function calcularDistancia(origen, destino) {
    const i = ESTACIONES.indexOf(origen);
    const j = ESTACIONES.indexOf(destino);
    return MATRIZ[i][j];
}

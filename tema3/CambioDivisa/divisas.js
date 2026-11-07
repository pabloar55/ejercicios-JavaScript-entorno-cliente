const valores = { dolar: 1, euro: 0.90, libra: 0.75 };

export function calcularCambio(de, a, importe) {
    return Math.round(importe * (valores[a] / valores[de]) * 100 )/100; // para redondear a dos decimales se multiplica por 100 y se vuelve a dividir por 100
}
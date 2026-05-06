const numeroDeEstados = 27;

const siglasEstadosBrasil = [
  "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO",
  "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI",
  "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"
];

const gasolina = [
  7, 3, 9, 2, 8, 5, 6, 4, 1,
  10, 7, 3, 8, 2, 6, 9, 5, 4,
  7, 1, 10, 3, 8, 6, 2, 9, 5
];

const alcool = [
  4, 8, 1, 7, 5, 9, 2, 6, 3,
  10, 4, 8, 1, 7, 5, 9, 2, 6,
  3, 10, 4, 8, 1, 7, 5, 9, 2
];

for(let i = 0; i < numeroDeEstados; i++) {
    if(alcool[i] <= (0.7 * gasolina[i])) {
        console.log("No estado", siglasEstadosBrasil[i], "O alcool é mais vantajoso");
    } else {
        console.log("*");
    }
}
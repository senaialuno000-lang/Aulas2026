/*=========================FUNÇÃO============================*/

// Só Executa:
function teste() {
    console.log("Teste realizado com sucesso");
}
teste();

/*=========================================================*/

// Com Parâmetro
function teste2(parametro) {
    console.log("O parametro é", parametro);
}
teste2("parametro");

/*=========================================================*/

// Com Retorno
function media(n1, n2) {
    var resultado = (n1 + n2)/2;
    return resultado;
}
console.log(media(5,8));
let mediaFinal = media(7,7);
console.log("A media final é", mediaFinal);

/*=========================================================*/

// Função Anônima
// Não possui nome, e seu retorno é guardado em uma variável;

let mensagem = function () {
    console.log("mensagem");
}
mensagem();

/*=========================================================*/

// Arrow Function
const multiplicar = (x, y) => {
    return (x * y);
}
console.log("Multiplicação:", multiplicar(6,7));

/*=========================================================*/

//Mais menor ainda
const dobro = numero => numero * 2;
console.log("Dobro",dobro(4));
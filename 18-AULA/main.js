/*======================== Array ========================*/

var servmatch = ["Guilherme", "Rodolfo", "Matheus"];
var profissoes = ["Pro-Player", "Vagabundo", "Programador"];

/*======================== Objeto ========================*/

// {chave : Valor};
var cantor = {
    nome: "Menos é Mais",
    generoMusical: "Pagode",
    estaVivo: true,
    idade: 10
};
console.log(cantor);
console.log(cantor.nome);

/*=========================================================*/

// Acessando Propriedades:
var intervalo = {
    horaInicio: "15:00",
    horaFim: "15:20",
    local: "Pátio",
    duracao: "20 min"
};
console.log(intervalo);
console.log("O intervalo inicia às:", intervalo["horaInicio"]);

/*=========================================================*/

// Alterando um Objeto:
var garrafa = {};
console.log(garrafa);

// Adiciona Novas Propriedades:
garrafa.cor = "Azul";
garrafa.tamanho = "600 ml";
garrafa.preco = 8.5;
garrafa["marca"] = "Coca-Cola";

console.log(garrafa);

// Altera Valores de Propriedades já Existentes
garrafa.cor = "Rosa";
garrafa["marca"] = "UAI";

console.log(garrafa);

/*=========================================================*/

var animal = {
    // Propriedades:
    nome: "Tom",
    especie: "Garça",
    raca: "Adidas",

    // Métodos:
    falar: function(){
        console.log("AAAAAAAAAHHHHHHHHHH");
    },
    andar: () => {
        console.log("*Andando...*");
    },
    dormir: () => {
        console.log("zzzzzzzzzzzzz");
    }
}
// mostrando o valor através da propriedade;
console.log(animal.nome);
// mostra o texto da função;
console.log(animal.falar);
// excuta a função;
animal.falar();
// LAÇOS DE REPETIÇÃO

// For = Para
/*
for(var i = 0; i < 10; i++) {
    console.log(i);

}
*/

/*
// While = Enquanto
var c = 1;
// coloca a condição pra entrar no loop;
while(c < 10) {
    console.log(c);
    // Se não tiver algo pra tirar do loop, ele roda infinito;
    c++;
}
*/
/*
var array = ["Rodolfo", 10, true, 5.3];
console.log(array);
*/
// for especifico de array;
// i = guarda o valor do indice;
// in = usa o valor do indice para mostrar o elemento;
// of = já sabe o valor do elemento;
let frutas = ["Banana", "Maçã", "Pera", "Melancia", "Morango", "Uva"];

for(let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

for(var i in frutas) {
    console.log(frutas[i]);
}

for(var i of frutas) {
    console.log(i);
}
// Adiciona um elemento no final do array;
frutas.push("laranja");

// Adiciona um elemento no inicio do array;
frutas.unshift("limão");

//Remove elemento
// pop - remove o último elemento;
let frutaTirada = frutas.pop();
console.log("A fruta removida foi", frutaTirada);

//shift - remove o primeiro elemento;
var PriemeiraFruta = frutas.shift();
console.log("A primeira fruta removida", PriemeiraFruta);

// Descobrir o index de um elemento
var index = frutas.indexOf("Melancia");

// Descobrir se há um valor especifico no array
console.log("Tem Pitu?", frutas.includes("Pitu"));
console.log("Tem Maçã?", frutas.includes("Maçã"));

// Ordena os elementos
frutas.sort();
// Inverte a ordem dos elementos
frutas.reverse();

// Convertendo o array para string
console.log("convertido", frutas.toString());
// Junta um array, ou converte colocando um separador
console.log("convertido", frutas.join(" - "));

// Slice - copia parte do array
// de onde começa, quantos elementos estarão na cópia;
var copiaParte = frutas.slice(0,2);
console.log(copiaParte);

// Splice - remove
var remove = frutas.splice(1,1);

frutas.splice(1,0, "Pitaya", "Jabiticaba", "Melão");
frutas.splice(2,1,"Arroz");

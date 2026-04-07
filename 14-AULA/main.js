var verdadeiro = true;
var nViagens = 3;

while (verdadeiro == true) {
    var x = parseInt(prompt("Digite o valor da caixa x"));
    var y = parseInt(prompt("Digite o valor da caixa y"));
    var z = parseInt(prompt("Digite o valor da caixa z"));
    if(x > y || x > z || y > z) {
        alert("O valor das caixas não está em ordem crescente");
    } else {
        if(x < y) {
            nViagens -= 1;
        } else {
            nViagens += 0;
        }

        if((x+y) < z) {
            nViagens -= 1;
        } else {
            nViagens += 0;
        }
        verdadeiro = false;
    }
}

alert("Saida:", nViagens);


// var x = 13;
// var y = 6;
// var z = 12;
// var nViagens = 3;

// if(x < y) {
//     nViagens -= 1;
// } else {
//     nViagens += 0;
// }

// if((x+y) < z) {
//    nViagens -= 1;
// } else {
//     nViagens += 0;
// }

// console.log(nViagens);
/*========================== CALLBACK ==========================*/

function processar(callback) {
    console.log("Iniciando processo de informações...");
    callback();
}
function finalizar() {
    console.log("Acabei");
}
processar(finalizar);

/*=============================================================*/

// CallBack anônimo
function executarTarefa(callback) {
    console.log("Iniciando a execução da tarefa");
    setTimeout(callback, 3000);
}

executarTarefa(() => {
    console.log("Acabou a tarefa.");
});

/*=============================================================*/

// Callback com condições simples
function verificarNota(nota, callback) {
    if(nota >= 7) {
        callback();
    }
}
function aprovado() {
    console.log("Aprovado");
}
verificarNota(8, aprovado);

/*=============================================================*/

function loginCorreto () {
    console.log("logado");
}

function loginErrado () {
    console.log("Errado");
}

function validaSenha(senha, sucesso, error) {
    if(senha == "1234") {
        sucesso();
    } else {
        error();
    }
}

validaSenha("7", loginCorreto, loginErrado);
validaSenha("1234", loginCorreto, loginErrado);
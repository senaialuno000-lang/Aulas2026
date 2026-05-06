
let Lanches = [
{ nome: "X-Burguer", preco: 15.00, categoria: "Lanche" },
{ nome: "Batata Frita", preco: 10.00, categoria: "Acompanhamento" },
{ nome: "Refrigerante", preco: 8.00, categoria: "Bebida" },
{ nome: "Milk-shake", preco: 12.00, categoria: "Bebida" },
{ nome: "Cachorro Quente", preco: 9.00, categoria: "Lanche" },
{ nome: "Suco Natural", preco: 6.00, categoria: "Bebida" },
{ nome: "Cebola Frita", preco: 6.00, categoria: "Acompanhamento" },
{ nome: "Sorvete", preco: 7.00, categoria: "Sobremesa" }
];

let Cadastros = [];

let opcao = 0
let nomeProduto = ""
let quantidade = 0
let quantCadastro = 0

cardapio()

while(opcao != 4){
    menu(swit)
}

function menu(callback){
    console.log("Escolha uma opção abaixo:\n\n1. Cadastrar Pedido.\n2. Vizualizar Pedidos\n3. Vizualizar Cardápio\n4. Sair")
    opcao = prompt("Qual opção você escolhe?")

    opcao = parseInt(opcao)

    callback(opcao)
}

function cardapio(){
    console.log("Lista de Produtos:\n")

    for(let i=0; i<Lanches.length; i++){
        console.log("\n"+(i+1)+". Produto: "+Lanches[i]["nome"]+"   R$"+ Lanches[i].preco+".00\n")
    }
    console.log("\n\n")
}

function Pedidos(){
    console.log("Lista de Pedidos:\n")

    for(let i=0; i<Cadastros.length; i++){
        console.log("\n"+(i + 1)+". Produto: "+Cadastros[i]["nomeProduto"]+" | Quantidade: "+ Cadastros[i]["quantidadeProduto"]+" | Preço: "+ Cadastros[i]["valorTotal"]+" | Preço Unitário: "+ Cadastros[i]["precoUnitario"]+"\n")
    }
    console.log("\n\n")
}

function swit(opcao){
    switch(opcao){
        case 1:
            cadastrarPedidos()
            break;
        case 2:
            Pedidos()
            break;
        case 3:
            cardapio()
            break;
        case 4:
            console.log("Fim do sistema.")
            break;
        default:
            console.log("Opção inválida")
            break;
    }
}

function cadastrarPedidos(){
    let nome = prompt("Diga o nome do produto.")
    let tranca = 0

    for(let i=0; i<Lanches.length; i++){
        if(Lanches[i]["nome"] === nome){
            quantidade = prompt("Diga a quantidade de produtos pedidos.")
            quantidade = parseInt(quantidade)

            Cadastros[quantCadastro] = {nomeProduto : nome, quantidadeProduto : quantidade, precoUnitario : Lanches[i]["preco"] ,valorTotal : (Lanches[i]["preco"] * quantidade)}
            
            console.log("\nCadastro registrado.\n"+(quantCadastro + 1)+". Produto: "+Cadastros[quantCadastro]["nomeProduto"]+" | Quantidade: "+ Cadastros[quantCadastro]["quantidadeProduto"]+" | Preço: "+ Cadastros[quantCadastro]["valorTotal"]+" | Preço Unitário: "+ Cadastros[quantCadastro]["precoUnitario"]+"\n")

            quantCadastro++
            tranca = 1
        }else if((tranca === 0) && (i === (Lanches.length - 1))){
            console.log("\nLanche não encontrado.\n")
        }
    }
}
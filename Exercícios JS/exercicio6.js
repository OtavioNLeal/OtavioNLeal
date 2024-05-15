let clientes = []; 

let adicionarMais = true;

while (adicionarMais) {
    let nomeCliente = prompt("Insira o nome do cliente:");
    clientes.push(nomeCliente);

    let resposta = prompt("Deseja adicionar mais nomes? (s/n)");
    if (resposta.toLowerCase() !== 's') {
        adicionarMais = false;
    }
}

console.log("Clientes armazenados:");
for (let cliente of clientes) {
    console.log(cliente);
}


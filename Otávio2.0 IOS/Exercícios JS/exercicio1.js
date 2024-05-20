//Exercicio 1
let números = [1, 2, 3, 4, 5];
let soma = 0;

for (let i = 0; i < números.length; i++) {
    soma += números[i];
}

console.log("A soma de todos os elementos do array é:", soma);

let num = 2;
while (num <= 10) {
    if (num % 2 === 0) {
        console.log(num);
    }
    num++;
}

//Exercicio 2
let números1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let númerosPares = [];

for (let i = 0; i < números.length; i++) {
    if (números[i] % 2 === 0) {
        númerosPares.push(números[i]);
    }
}

console.log("Novo array com números pares:", númerosPares);

let idade;
do {
    idade = parseInt(prompt("Por favor, insira sua idade (maior que 0):"));
} while (idade <= 0 || isNaN(idade));

console.log("Idade válida inserida:", idade);

//Exercicio 3
let pessoa = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo"
};

let informaçõesPessoa = `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`;

console.log(informaçõesPessoa);

//Exercicio 4
let numTermos = parseInt(prompt("Digite o número de termos da sequência de Fibonacci:"));

if (numTermos <= 0 || isNaN(numTermos)) {
    console.log("Por favor, insira um número válido de termos.");
} else {
    let fibonacciSeq = [0, 1];

    for (let i = 2; i < numTermos; i++) {
        let nextTerm = fibonacciSeq[i - 1] + fibonacciSeq[i - 2];
        fibonacciSeq.push(nextTerm);
    }

    console.log(`Sequência de Fibonacci com ${numTermos} termos:`);
    console.log(fibonacciSeq.join(', '));
}

//Exercicio 5
let pessoa1 = {
    nome: "Maria",
    idade: 30,
    cidade:'Rio de Janeiro',
};

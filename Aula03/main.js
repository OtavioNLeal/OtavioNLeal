// 1. Declaração e exibição da soma de duas variáveis inteiras
let varInt1 = 5;
let varInt2 = 7;
console.log("Soma das variáveis inteiras:", varInt1 + varInt2);

// 2. Declaração e exibição do conteúdo de uma variável string
let minhaString = "Olá, mundo!";
console.log("Conteúdo da variável string:", minhaString);

// 3. Declaração e exibição de uma variável booleana
let meuBooleano = true;
console.log("Valor da variável booleana:", meuBooleano);

// 4. Declaração e exibição de uma variável numérica
let meuNumero = 3.1415;
console.log("Valor da variável numérica:", meuNumero);

// Pular para a parte 5: Solicitar informações ao usuário

// 6. Substituição do nome do meio por sobrenome
let meuNome = "Otávio Nascimento Leal Goes";
let nomeModificado = meuNome.replace("Nascimento", "Leal Goes");
console.log("Nome modificado:", nomeModificado);

// 5. Perguntar ao usuário seu nome, idade, bairro e exibir tudo em maiúsculas
let nomeUsuario = prompt("Qual é o seu nome?");
let idadeUsuario = prompt("Qual é a sua idade?");
let bairroUsuario = prompt("Qual é o seu bairro?");
let nomeMaiusculo = nomeUsuario.toUpperCase("Otávio Nascimento");
console.log("Nome do usuário em maiúsculas:", nomeMaiusculo);
console.log("Idade do usuário:", idadeUsuario);
console.log("Bairro do usuário:", bairroUsuario);

// 6. Verificar se o usuário pode dirigir
let idadeDirigir = parseInt(prompt("Quantos anos você tem?"));
if (idadeDirigir >= 18) {
    console.log("Você pode dirigir.");
} else {
    console.log("Você ainda não pode dirigir.");
}

// 7. Verificar se o número é positivo, negativo ou zero
let numero = parseInt(prompt("Digite um número inteiro:"));
if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}
let desconto = 0.2
let valorProd = Number(prompt("Qual o valor do produto: "))
let valorFinal = valorProd (valorProd + desconto)

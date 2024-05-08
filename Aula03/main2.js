let idade = Number(prompt('Digite sua idade'))
if (idade < 18) {
    alert('Você é menor de idade.');
} else if (idade >= 18 && idade < 60) {
    alert("Você é adulto.")
} else {
    alert("Você é idoso.");}
   if (idade >= 18 && idade < 60){  
    alert("Você pode dirigir.")}
    else 
    {alert("Você ainda não pode dirigir.")
}
let numero = Number(prompt("Digite um número inteiro:"));
if (numero > 0) {
    alert("O número é positivo.")
} else if (numero < 0) {
    alert("O número é negativo.")
} else {
    alert("O número é zero.")
}
let altura = (prompt("Digite sua altura em metros:"))
let peso = (prompt("Digite seu peso em quilogramas:"))

let imc = peso / (altura * 2)
if (imc >= 18.5 && imc <= 24.9) {
    alert("Seu IMC está dentro do intervalo saudável.")
} else {
    alert("Seu IMC não está dentro do intervalo saudável.")
}
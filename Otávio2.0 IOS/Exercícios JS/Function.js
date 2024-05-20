function calcularIMC() {
    let peso = Number(prompt("Por favor, insira seu peso em kg:"));
    let altura = Number(prompt("Agora, insira sua altura em metros:"));
    
    let imc = peso / (altura * altura);
    
    if (imc < 18.5) {
        alert("Seu IMC é: " + imc.toFixed(2) + "\nVocê está abaixo do peso.");
    } else if (imc >= 18.5 && imc < 25) {
        alert("Seu IMC é: " + imc.toFixed(2) + "\nSeu peso está normal.");
    } else if (imc >= 25 && imc < 30) {
        alert("Seu IMC é: " + imc.toFixed(2) + "\nVocê está com sobrepeso.");
    } else {
        alert("Seu IMC é: " + imc.toFixed(2) + "\nVocê está obeso.");
    }
}

calcularIMC();


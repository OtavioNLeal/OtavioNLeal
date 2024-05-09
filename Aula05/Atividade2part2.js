let numeroSorteado = Math.floor(Math.random() * 11);
let acertou = false;

while (!acertou) {
    let palpite = parseInt(prompt("Digite um número de 0 a 10:"));

    if (palpite >= 0 && palpite <= 10) {
        if (palpite === numeroSorteado) {
            acertou = true;
            alert("Parabéns, você acertou!");
        } else {
            alert("Você errou. Tente novamente.");
        }
    } else {
        alert("Por favor, digite um número válido de 0 a 10.");
    }
}
const calcularIMC = () => {
    let peso = Number(document.querySelector('#peso').value)
    let altura = Number(document.querySelector('#altura').value)
    let imc = peso / (altura * altura);

    let res = document.querySelector('#resultado')
    res.innerHTML = `Seu IMC é: ${imc}`

    if (imc < 18.5) {
        res.innerHTML = 'Seu IMC é:' + imc.toFixed(2) + '\nVocê está abaixo do peso.';
    } else if (imc >= 18.5 && imc < 25) {
        res.innerHTML = 'Seu IMC é: ' + imc.toFixed(2) + "\nSeu peso está normal.";
    
    }  else if (imc >= 25 && imc < 30) {
        res.innerHTML = "Seu IMC é: " + imc.toFixed(2) + "\nVocê está com sobrepeso.";
    } else {
        res.innerHTML = "Seu IMC é: " + imc.toFixed(2) + "\nVocê está obeso.";
    }
}

let calcular = document.querySelector('#botaoEnviar')
calcular.addEventListener('click', calcularIMC)
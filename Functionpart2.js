function converterRealParaEuro() {
    const taxaDeCambio = 5.13;

    let valorReal = Number(prompt("Digite o valor em reais para converter para euro:"));
    let valorEuro = valorReal / taxaDeCambio;

    alert("O valor em euro é: €" + valorEuro.toFixed(2));
}

converterRealParaEuro();

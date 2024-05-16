function calcularMedia(not1, not2, not3) {
    let media 
    media = (not1 + not2 + not3)/3
    return media
}
console.log(`A sua nota é: ${calcularMedia(3, 7, 9).toFixed(1)}`);

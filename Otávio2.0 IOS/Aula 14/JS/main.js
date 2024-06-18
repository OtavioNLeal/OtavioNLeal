let paragrafo = document.querySelector('#paragrafo');

paragrafo.addEventListener('click', () => {
    count++;
    document.getElementById('counter').innerText = count;
    if (count % 50 === 0) {
        document.getElementById('message').innerText = "Você alcançou " + count + " cliques!";
    } else {
        document.getElementById('message').innerText = "";
    }

})


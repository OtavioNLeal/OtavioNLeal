let valor1 = window.document.getElementById('elemento1');
valor1.style.color = 'red'

let valor2 = document.getElementsByClassName('elemento2')
valor2[0].style.color = 'blue'

let valor3 = document.getElementsByTagName('li')[0]
valor3.innerText = 'Troquei o valor'

let valor4 = window.document.querySelector('#p1')
valor4.innerHTML = 'Aula de DOM 3 '

let valor5 = window.document.querySelectorAll('.p2')[0]
valor5.style.color = 'orange'


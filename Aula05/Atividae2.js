let valorComDesconto = '3'

switch(valorComDesconto.toUpperCase()){
    
        case 'DESC1':
            console.log("5% de Desconto"); // 5% de desconto
            break;
        case 'DESC2':
            console.log("10% de Desconto"); // 10% de desconto
            break;
        case 'DESC3':
            console.log("15% de Desconto");// 15% de desconto
            break;
        case 'DESC4':
            console.log("20% de Desconto");// 20% de desconto
            break;
        case 'DESC5':
            console.log("25% de Desconto"); // 25% de desconto
            break;
        default:
            console.log("Código promocional invalido"); // Código promocional inválido
            break;
    }
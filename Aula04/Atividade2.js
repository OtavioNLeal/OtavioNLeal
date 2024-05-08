let animais = ""

switch (animais.toUpperCase()) {
    case 'A1':
      console.log("Vertebrados");
      break;
    case 'A2':
      console.log("Invertebrados");
      break;
    case 'A3':
      console.log("Onívoros");
      break;
    case 'A4':
      console.log("Ovíparos");
      break;
    case 'A5':
      console.log("Herbívoros");
      break;
    default:
      console.log("Valor inválido. Por favor, digite um valor de A1 a A5.");
  }
let estudantes = [
    { nome: 'John', idade: 20 },
    { nome: 'Jane', idade: 25 },
    { nome: 'Mark', idade: 22 }
  ];
  
  estudantes.forEach((estudante) => {(
    console.log(`Nome: ${estudante.nome}, Idade: ${estudante.idade}`));
  })

 let estudantesNomes = estudantes.map(estudante => estudante.nome);
 console.log(estudantesNomes);
let aluno1 = {
    RA:20240101,
    Nome:'Otávio',
    Idade:18,
    Grade:{
        Curso:'Tecnologia',
        CH:200,
        Matriculado:true
    },
}

console.log(aluno1);
console.log(aluno1.Nome);

let {
    RA,
    Nome,
    Idade,
} = aluno1

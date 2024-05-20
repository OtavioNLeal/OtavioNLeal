let alunos = [
    {
       Nome:'Otávio',
       RA:202401,
       Matriculado:true, 
    },
    {
        Nome:'Maria',
        RA:202402,
        Matriculado:false,
    },
    {
        Nome:'Jão',
        RA:202403,
        Matriculado:true,
    },
]

let nomeAlunos = alunos.map((nome)=>{
    return nome.Nome
})

console.log(nomeAlunos);

let raAlunos = alunos.map((ra)=>{
    return ra.RA
})

console.log(raAlunos);


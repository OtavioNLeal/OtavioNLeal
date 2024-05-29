class Celular {
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    desbloquerCelular(){
        return 'Celular desbloqueado'
    }
    efetuarLigação(){
        return 'Ligação Efetuada'
    }
}
class CelularGamer extends Celular {
    constructor(marca, modelo, ano, ram, cooler){
        super(marca, modelo, ano);
        this.ram = ram;
        this.cooler = cooler;
    }
    ligarGameBooster(){
        console.log('Otimizar o jogo');
    }
}
let celGamer1 = new CelularGamer('RedMagic', '9PRO', 2024,
32, false)

celGamer1

//let otavio = new celular('Samsung', 'A10', 2018)
//console.log(otavio.desbloquerCelular());
//console.log(otavio.efetuarLigação());

//let lucas = new celular('Apple', 'Iphone-11', 2019);

//console.log(lucas);

//let kimberly = new celular('Samsung', 'A32', 2022);

//console.log(kimberly);

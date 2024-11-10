class Animal {
    nome: string;
    som: string;
    constructor(nome: string, som: string) {
    this.nome = nome;
    this.som = som;
    }
    emitirSom(): string {
    return `${this.nome} faz ${this.som}`;
    }
   }
   
class Cachorro extends Animal {
raca: string;
constructor(nome: string, som: string, raca: string) {
super(nome, som);
this.raca = raca;
}
latirForte() {
    let latido;

    if (this.raca.toLowerCase() === "vira-lata") {
        latido = 'AU AU, AUOUOUOU!';
    } else if (this.raca.toLowerCase() === "husky") {
        latido = 'AUUUUUU AU AU AUUUUU!';
    } else if (this.raca.toLowerCase() === "pinscher") {
        latido = 'au au rrrr au au rrrrr!';
    } else {
        latido = 'AU AU!'
    }

    return `${this.nome} é um ${this.raca}, e quando late forte faz ${latido}`;
    
}
}
const rex = new Cachorro("Rex", "au au", "Labrador");
console.log(rex.emitirSom());
console.log(`Raça: ${rex.raca}`);
console.log(rex.latirForte());

const caramelo = new Cachorro("Caramelo", "au au", "vira-lata");
console.log(caramelo.latirForte());

const lobao = new Cachorro("Lobão", "au au", "husky");
console.log(lobao.latirForte());

const brutus = new Cachorro("Brutus", "au au", "pinscher");
console.log(brutus.latirForte());
let nome: string = "Alice";
let idade: number = 25;
let ativo: boolean = true;
let hobbies: string[] = ["Leitura", "Esportes", "Música", "Games", "Filmes", "Dança", "Viagem"];
let endereco: { cidade: string; estado: string; distrito: string; } = { cidade: "São Paulo",
estado: "SP", distrito: "Itaquera" };

console.log(`Nome: ${nome}, Idade: ${idade}, Ativo: ${ativo}`);
console.log(`Hobbies: ${hobbies.join(", ")}`);
console.log(`Endereço: ${endereco.cidade} - ${endereco.estado}, ${endereco.distrito}`);
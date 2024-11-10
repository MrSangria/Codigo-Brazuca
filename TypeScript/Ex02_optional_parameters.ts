function saudacao(nome: string, idade?: number, brasileiro: boolean = true, ): string {
    if(brasileiro) {
       return idade ? `Olá, ${nome}! Você tem ${idade} anos.` : `Olá, ${nome}!`;
    } else {
       return idade ? `Hi ${nome}! You are ${idade} years old.` : `Hey ${nome}, where are you from?`;
    }
    
   }
console.log(saudacao("Alice"));
console.log(saudacao("Bob", 30, false));
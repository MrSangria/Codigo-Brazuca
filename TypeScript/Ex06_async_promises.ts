function buscarDados(): Promise<string> {
    return new Promise(resolve => {
    setTimeout(() => resolve("Novos dados carregados"), 3000);
    });
   }
   async function exibirDados() {
    const dados = await buscarDados();
    console.log(dados);
   }
   async function exibirDadosIntercalados() {
       await exibirDados();
       await exibirDados();
       await exibirDados();
   }
   
exibirDados();
exibirDados();
   
exibirDadosIntercalados();
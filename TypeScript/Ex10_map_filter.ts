function filtrarPrecosAltos(precos: number[]): number[] {
    const novosPrecos = precos.map(preco => Math.round(preco*Math.random()))
    const novoFiltro = Math.round(100 * Math.random());
   
    console.log(`Novos preços: ${novosPrecos}; Novo filtro: ${novoFiltro.toFixed(2)}`);
    return novosPrecos.filter(preco => preco > novoFiltro);
   }
   
console.log(filtrarPrecosAltos([50, 150, 200, 30]));
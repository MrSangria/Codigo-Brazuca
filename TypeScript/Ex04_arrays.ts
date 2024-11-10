function calcularMedia(numeros: number[]): number {
    const total = numeros.reduce((acc, numero) => acc + numero, 0);
    return total / numeros.length;
   }
console.log(calcularMedia([10, -8, 0.5550, -5])); 
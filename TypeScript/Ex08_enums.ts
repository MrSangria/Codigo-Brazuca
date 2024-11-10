enum DiasSemana {
    Segunda = "Segunda-feira",
    Terca = "Terça-feira",
    Quarta = "Quarta-feira",
    Quinta = "Quinta-feira",
    Sexta = "Sexta-feira",
    Sabado = "Sábado",
    Domingo = "Domingo",
    Feriado = "Sexta-feira, 15",
}
function ehFimDeSemanaOuFeriado(dia: DiasSemana): boolean {
    return dia === DiasSemana.Sabado || dia === DiasSemana.Domingo || dia === DiasSemana.Feriado;
}

console.log(ehFimDeSemanaOuFeriado(DiasSemana.Domingo)); 
console.log(ehFimDeSemanaOuFeriado(DiasSemana.Quinta)); 
console.log(ehFimDeSemanaOuFeriado(DiasSemana.Feriado));
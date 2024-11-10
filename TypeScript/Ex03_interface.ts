interface Produto {
    nome: string;
    preco: number;
    categoria?: string;
    disponivel: boolean;
    }
function filtrarDisponiveis(produtos: Produto[]): Produto[] {
return produtos.filter(produto => produto.categoria === "Móveis");
}
const produtos: Produto[] = [
{ nome: "Teclado", preco: 100, categoria: "Eletrônicos", disponivel: true },
{ nome: "Mouse", preco: 50, disponivel: false },
{ nome: "Monitor", preco: 300, disponivel: true },
{ nome: "Notebook", preco: 3500, categoria: "Eletrônicos", disponivel: true},
{ nome: "Fogão", preco: 2800, categoria: "Eletrodomésticos", disponivel: false},
{ nome: "Geladeira", preco: 4100, disponivel: true},
{ nome: "Televisão", preco: 3000, categoria: "Eletrodomésticos", disponivel: true},
{ nome: "Sofá", preco: 1900, categoria: "Móveis", disponivel: true},
{ nome: "Cama", preco: 850, categoria: "Móveis", disponivel: false},
{ nome: "Estante", preco: 400, categoria: "Móveis", disponivel: true},
{ nome: "Quadro", preco: 100, categoria: "Decoração", disponivel: true},
];

console.log(filtrarDisponiveis(produtos));
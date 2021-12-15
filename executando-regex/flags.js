// g - global
// i - ignore case

const texto = 'Carlos assinou o abaixo-assinado.';

console.log(texto.match(/C|ab/)); // procura letra 'C' ou 'ab'
console.log(texto.match(/c|ab/i)); // procura 'c' ou ab
console.log(texto.match(/C|ab/gi)); // [ 'C', 'ab' ]

// match - é um metodo regex que procura strings // retorna um array com o resultado da pesquisa // se não encontrar retorna nulls
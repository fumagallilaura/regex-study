const texto = 'Bom\ndia'

console.log(texto.match(/./gi));
//o ponto nao engloba o \n
console.log(texto.match(/..../g));

const texto2 = 'Bom\tdia'

console.log(texto2.match(/.../g));

// dotall - algumas linguagens tem uma flag  /expressão/s, mas JS não tem!
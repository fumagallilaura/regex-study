const texto = `1,2,3,4,5,6,a.b c!d?e\r
f_g`
-
console.log(texto.match(/\d/g)) // números [0-9]
console.log(texto.match(/\D/g)) // não números [^0-9]
//  ^ - conjunto negado
console.log(texto.match(/\w/g)) // caracteres [a-zA-Z0-9_]
console.log(texto.match(/\W/g)) // não caracteres [^a-zA-Z0-9_]
console.log(texto.match(/\s/g)) // espaço [ \t\n\r\f]
// \f - quebra de pagina
// \r - retorno de carro (???)
// https://acervolima.com/javascript-regexp-r-metacharacter/
// https://docs.python.org/2/library/re.html
// https://pt.stackoverflow.com/questions/146048/qual-%C3%A9-a-diferen%C3%A7a-entre-n-e-r-n-caracteres-especiais-para-quebra-de-linh
console.log(texto.match(/\S/g)) // não espaço [^ \t\n\r\f]
// \b \B - borda de palavras

const pedro = 'pedro\nlima'
const edu = 'edu\fmiazaki'
const laura = 'laura\r\nfumagalli'

console.log(`n: ${pedro}
f: ${edu}
r: ${laura}`);

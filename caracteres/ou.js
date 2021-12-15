const texto = 'você precisa responder sim, não ou não sei'

console.log(texto.match(/sim|não|sei/g));
// alternativa
console.log(texto.match(/sim|n.osei/));
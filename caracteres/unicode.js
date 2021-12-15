// no inicio...
// usava um unico byte (8 bits) 2**8 - 256 caracteres - quantidade de caracteres q pode ser mapeada
// mapeia: alguns símbolos, algumas pontuações, A-Z, a-z, 0-9

//Dois bytes(16 bits)
// mapeia 2**16 caracteres, 65500 caracteres
//+simbolos, +pontuação,A-Z, a-z, 0-9

// Hoje em dia existem mais de 100mil caracteres mapeaveis

//unicode
// quantidade de bits variavel - expansivel
// suporta mais de 1M caracteres a ser mapeado
// atualmente tem mais de 100000 caracteres atribuidos à tabela unicode

// https://unicode-table.com/pt/

const texto = 'aʬc௵d'
console.log(texto.match(/\u02AC|\u0BF5/g))
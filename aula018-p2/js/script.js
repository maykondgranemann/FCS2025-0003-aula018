console.log('Mensagem do arquivo externo!');

// variável é uma apelido para um endereço (espaço) da memória
var numero1 = 10;
var numero2 = 20;
var soma = numero1 + numero2;

console.log('n1:', numero1);
console.log('n2:', numero2);
console.log('A soma entre', numero1, 'e', numero2, 'é:', soma); // multiplos valores
console.log('A soma entre ' + numero1 + ' e ' + numero2 + ' é: ' + soma); // concatenação
console.log(`A soma entre ${numero1} e ${numero2} é: ${soma}`); // template string
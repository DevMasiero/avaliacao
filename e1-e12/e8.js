const pessoas = [
    { id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42 },
    { id: 2, nome: 'daniel', sobrenome: 'gonçalves', idade: 21 },
    { id: 3, nome: 'atheus', sobrenome: 'garcia', idade: 28 },
    { id: 4, nome: 'gabriel', sobrenome: 'pinheiro', idade: 21 }
];

const soma = pessoas.reduce((idade, pessoa) => idade + pessoa.idade, 0);

console.log(`A soma das idades é: ${soma}`);

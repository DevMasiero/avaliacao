const pessoas = [
    { id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42 },
    { id: 2, nome: 'daniel', sobrenome: 'gonçalves', idade: 21 },
    { id: 3, nome: 'matheus', sobrenome: 'garcia', idade: 28 },
    { id: 4, nome: 'gabriel', sobrenome: 'pinheiro', idade: 21 }
];

function ordenar(pessoaA, pessoaB) {
    if (pessoaB.idade !== pessoaA.idade) {
        return pessoaB.idade - pessoaA.idade;
    }
    return pessoaA.id - pessoaB.id;
}

pessoas.sort(ordenar);

console.log(pessoas);
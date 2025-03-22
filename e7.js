const pessoas = [
    { id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42 },
    { id: 2, nome: 'daniel', sobrenome: 'gonçalves', idade: 21 },
    { id: 3, nome: 'matheus', sobrenome: 'garcia', idade: 28 },
    { id: 4, nome: 'gabriel', sobrenome: 'pinheiro', idade: 21 }
];

for (let i = 0; i < pessoas.length; i++) {

    let nome = pessoas[i].nome;
    let sobrenome = pessoas[i].sobrenome;

    nome = nome[0].toUpperCase() + nome.slice(1);

    sobrenome = sobrenome[0].toUpperCase() + sobrenome.slice(1);

    console.log(`Olá, ${nome} ${sobrenome}!`);
}
let pessoas = [
    { id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42 },
    { id: 2, nome: 'daniel', sobrenome: 'gonçalves', idade: 21 },
    { id: 3, nome: 'matheus', sobrenome: 'garcia', idade: 28 },
    { id: 4, nome: 'gabriel', sobrenome: 'pinheiro', idade: 21 }
]

let menor30 = pessoas.filter(pessoa => pessoa.idade < 30)

if (menor30.length > 0) {
    menor30.forEach(pessoa => {
        console.log(pessoa.nome)
    })
    
 } else {
     console.log('Não há ninguém com menos de 30 anos.')
 } 
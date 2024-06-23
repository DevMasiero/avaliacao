const pessoas = [
    {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42}, 
    {id: 2, nome: 'daniel',sobrenome: 'gonçalves', idade: 21}, 
    {id: 3, nome: 'atheus', sobrenome:'garcia', idade: 28}, 
    {id: 4, nome: 'gabriel', sobrenome: 'pinheiro', idade: 21}
  ]
  
  pessoas.sort((a, b) => {
    if (a.idade === b.idade) {
      return b.id - a.id
    } else {
      return b.idade - a.idade
    }
  });
  
  console.log(pessoas)
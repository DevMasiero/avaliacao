const pessoas = [
    {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42}, 
    {id: 2, nome: 'daniel',sobrenome: 'gonçalves', idade: 21}, 
    {id: 3, nome: 'atheus', sobrenome:'garcia', idade: 28}, 
    {id: 4, nome: 'gabriel', sobrenome: 'pinheiro', idade: 21}
  ]
  
  let Achar_obj = pessoas.filter(pessoa => pessoa.idade < 25)
  
  if (Achar_obj) {
    console.log(Achar_obj)
  } else {
    console.log("Não há pessoas com menos de 25 anos.")
  }
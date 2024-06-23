
//Função para encontrar entre os dois argumentos a baixo o que possui mais palavras.
function Maior_comp(arg_1, arg_2) {
    
    if (arg_1.length >= arg_2.length) {
      return arg_1

    } else {
      return arg_2
    }
  }

  //Digite a baixo no primeiro e no segundo espaço uma palavra.
  let resultado = Maior_comp("banana", "Arruaneira");


  console.log(resultado)
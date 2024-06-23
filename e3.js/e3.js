function imprimirStrings(...args) {
  
  if (args.length === 0) {
    console.log('Não foi possivel identificar nada para imprimir')
    return
  }

  
  let resultado = args.join(' ')
  
  console.log(resultado)
}


imprimirStrings('A', 'Smart NX', 'desenvolve', 'soluções', 'inteligentes', 'e', 'inovadoras', 'com', 'o', 'propósito', 'de', 'transformar')
//exemplo de rejeição quando nada é escrito.
//imprimirStrings()
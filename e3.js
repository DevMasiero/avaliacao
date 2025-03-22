function imprimir(...args) {

    if (args.length === 0) {
        console.log('Não foi possivel identificar nada para imprimir')
        return
    }

    const resultado = args.join(' ')

    console.log(resultado)
}

imprimir('A', 'Smart NX', 'desenvolve', 'soluções', 'inteligentes', 'e', 'inovadoras', 'com', 'o', 'propósito', 'de', 'transformar')

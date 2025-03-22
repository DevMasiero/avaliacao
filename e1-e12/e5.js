const frase = 'T35t3 d3 35t4g1o'
const gabarito = {'3': 'e', '5': 's', '1': 'i', '4': 'a'}

const Subst = frase.replace(/[1354]/g, alt => gabarito[alt])

console.log(Subst)
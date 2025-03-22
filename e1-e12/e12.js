const objeto = {
    nome: "Dev",
    sobrenome: "smart",
    idade: "26",
    cargo: "analista de sistemas",
    documento: "123.345.678-90"
};

function delDoc(objeto) {
    if (objeto.documento !== undefined) {
        delete objeto.documento;
    }

    return objeto;
}

const objetoatt = delDoc(objeto);

console.log(objetoatt);
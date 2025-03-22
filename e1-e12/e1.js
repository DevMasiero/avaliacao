function lerComp(str1, str2) {
    if (str1.length > str2.length) {
        return str1;
    } if (str1.length < str2.length) {
        return str2;
    }
    return "As strings têm o mesmo tamanho.";
}

const string1 = "Smart";
const string2 = "Nx";
const resultado = lerComp(string1, string2);
console.log("A string de maior comprimento é:", resultado);
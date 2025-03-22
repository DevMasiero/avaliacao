const arg1 = "andre";
const arg2 = "luis";

function upperCase(arg) {
  return arg.toUpperCase();
}

function Aplicar(up, arg1, arg2) {
  console.log(`Resultado 1: ${up(arg1)}`);
  console.log(`Resultado 2: ${up(arg2)}`);
}

Aplicar(upperCase, arg1, arg2);
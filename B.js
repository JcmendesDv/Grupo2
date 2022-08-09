console.log("Testando o git");

//let nome = prompt("Informe seu nome"

function calculadora(numero1,numero2,callback) {
    return `O Resultdo da operação é: ${callback(numero1,numero2)}`
};

somar = (numero1,numero2) => numero1 + numero2

console.log(calculadora(8,8,somar))
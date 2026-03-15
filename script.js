//exercício 1: Soma de números
function somaNumeros() {
    let soma = 0;
    let continuar = true;

    while (continuar) {
        let numero = parseFloat(prompt("Digite um número (Ou zero para encerrar): "));

        //modelo antigo:soma = soma + numero;
        //modelo java:soma += numero;

        if (isNaN(numero)) {
            alert("Por favor, digite um número válido!");

        } else {
            soma += numero;
        }

        continuar = confirm("Deseja adicionar mais um número?");
    
    }

    alert("A soma dos números é " + soma);

}

//somaNumeros();

//exercício 2: Contagem regressiva

function contagem() {

    console.log("Contagem regressiva para o lançamento!")
    for (let i = 10; i >= 0; i--) {

        console.log(i);
    
    }
    {
        console.log("Lançamento realizado!")
    }
}

contagem();




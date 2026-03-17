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

//contagem();

//exercício 3: Balanço Financeiro Anual de uma Empresa

function balancoFinanceiro() {

    function calculo_mensal() {

        let valor_total = 0;
        let despesa_total = 0;
        let mes = 1;
        let saldo_total = 0;

        while (mes <= 12) {
            let faturamento = parseFloat(prompt("Digite qual foi o faturamento do mês " + mes));

            if (isNaN(faturamento)) {
                alert("Por favor, digite um número válido!");

            } else {
                valor_total += faturamento;
            }

            let gasto = parseFloat(prompt("Digite qual foi o valor das despesa do mês " + mes));

            if (isNaN(gasto)) {
                alert("Por favor, digite um número válido!");

            } else {
                despesa_total += gasto;
            }

            mes++;
        }
        alert("Seu faturamento anual foi de : R$" + valor_total);
        alert("Seu gasto anual foi de: R$" + despesa_total);

        saldo_total = valor_total - despesa_total;

        alert("Seu saldo ao fim do ano é de: R$" + saldo_total);

        if (saldo_total > 0) {
            alert("Você saiu no lucro esse ano!")

        } else {
            alert("Você teve prejuízo esse ano!")
        }
    }

    calculo_mensal();

}

//balancoFinanceiro();

//exercício 4:  Ordenação de Valores Inteiros

function OrdenacaoNumerica() {

    let numeros = [];
    let aux = 0;
    let inverte = true;

    for (let i = 1; i <= 4; i++) {

        let numero = Number(prompt("Digite u número inteiro " + i));

        while (!Number.isInteger(numero)) {
            numero = Number(prompt("Digite um número inteiro válido!"))
        }

        numeros.push(numero);

    }

    //organizando os números em ordem decrescente

    while (inverte) {

        inverte = false;

        for (let i = 0; i < numeros.length - 1; i++) {

            if (numeros[i] < numeros[i + 1]) {

                aux = numeros[i];
                numeros[i] = numeros[i + 1];
                numeros[i + 1] = aux;
                inverte = true;

            }
        }

    }

    alert("Números digitados em ordem decrescente: " + numeros.join(", "));

}

//OrdenacaoNumerica();

//exercício 5: Transformação de Número Par e Ímpar

function verificarNumero() {

    let numero = parseFloat(prompt("Digite um número inteiro:"));

    if (isNaN(numero)) {
        console.log("Digite um número válido!");
    }

    else if (numero % 2 === 0) {
        // número é par → transformar em ímpar
        numero = numero + 1;
        console.log("O número era par. Novo número (ímpar): " + numero);
    }

    else {
        // número é ímpar → transformar em par
        numero = numero + 1;
        console.log("O número era ímpar. Novo número (par): " + numero);
    }

}

//verificarNumero();

//exercício 6: Verificador de Vogal ou Consoante

function VogalouConsoante() {

    let letra = prompt("Digite uma letra: ");

    if (letra === "a" || letra === "A" || letra === "e" || letra === "E" || letra === "i" || letra === "I" || letra === "o" || letra === "O" || letra === "u" || letra === "U") {

        console.log("A letra '" + letra + "' é vogal");

    } else {

        console.log("A letra '" + letra + "' é consoante");
    }

}

//VogalouConsoante();

//exercício 7:  Sistema de Preços de uma Picoléteria

function PrecosPicolateria() {

    const sabores = {

        a: { nome: "Chocolate", preco: 1.50 },
        b: { nome: "Morango", preco: 2.50 },
        c: { nome: "Creme", preco: 2.50 },
        d: { nome: "Manga", preco: 3.20 },
        e: { nome: "Melancia", preco: 3.40 },
        f: { nome: "Vanilla Ice", preco: 3.00 },
        g: { nome: "Céu Azul", preco: 3.60 },
        h: { nome: "Brownie", preco: 4.00 },
        i: { nome: "Hawaiano", preco: 5.00 }

    };

    while (continua = true) {
        let codigo_sabor = prompt("Olá, qual é o código do sabor de picolé que você deseja tomar hoje? (opções de a à i)").toLowerCase();

        if (sabores[codigo_sabor]) {
            alert("Sabor: " + sabores[codigo_sabor].nome + "\nPreço: R$ " + sabores[codigo_sabor].preco);
        } else {
            alert("Digite um código válido!");
        }

        continua = confirm("Deseja tomar mais um picolé?");

    }
}
//PrecosPicolateria();

//exercício 8: Operações com Duas Variáveis

function calcularVariáveis() {

    let num1 = 10;
    let num2 = 8;

    console.log("Valores:");
    console.log("Num1 = " + num1 + " | Num2 = " + num2);


    // a) Diferença entre as duas variáveis
    let diferenca = num1 - num2;

    // b) Dobro da primeira + triplo da segunda
    let soma = (2 * num1) + (3 * num2);

    // c) Multiplicação das duas variáveis
    let multiplicacao = num1 * num2;


    console.log("Diferença entre as variáveis: " + diferenca);
    console.log("Dobro da primeira + triplo da segunda: " + soma);
    console.log("Multiplicação das variáveis: " + multiplicacao);
}

//calcularVariáveis();

//exercício 9: Ordenação entre Dois Números

function ordenarDoisNumeros(){

    let variavel1 = 18;
    let variavel2 = 6;

    if(variavel1 < variavel2){
    
        console.log(variavel2 + "," + variavel1);
    
    }else{

        console.log(variavel1 + "," + variavel2);

    }

}

//ordenarDoisNumeros();

//exercício 10: Folha de Pagamento Simplificada

function Pagamento(){

    let nome = prompt("Digite o seu nome:");
    let bruto = parseFloat(prompt("Digite o seu salário bruto:"));

    let INSS = bruto * 0.08;
    let liquido = bruto - INSS;

    alert("Nome do funcionário: " +nome);
    alert("Salário bruto: " +bruto);
    alert("O valor do desconto do INSS (8%) é: " +INSS);
    alert("Salário líquido: " +liquido);
}

Pagamento();
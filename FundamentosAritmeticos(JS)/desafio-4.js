/* <Desafio 4>

        Faça a leitura de um valor inteiro. Em seguida, calcule o menor número de notas possíveis (cédulas) onde o valor pode ser decomposto. As notas que você deve considerar são de 100, 50, 20, 10, 5, 2 e 1. Na sequência mostre o valor lido e a relação de notas necessárias.
        
        Entrada
        Você receberá um valor inteiro N (0 < N < 1000000).
        
        Saída
        Exiba o valor lido e a quantidade mínima de notas de cada tipo necessárias, seguindo o exemplo de saída abaixo. Após cada linha deve ser imprimido o fim de linha. 

        saida:
        576
        5 nota(s) de R$ 100,00
        1 nota(s) de R$ 50,00
        1 nota(s) de R$ 20,00
        0 nota(s) de R$ 10,00
        1 nota(s) de R$ 5,00
        0 nota(s) de R$ 2,00
        1 nota(s) de R$ 1,00 */
        
        var n100, n50, n20, n10, n5, n2 = 0;
        var valor, numero = 0;
        var n1 = 1;

        numero = gets();   //ou prompt();

        valor = numero; //var recebe entrada do num do usuario  = 576    
        
        //decomposicao do numero de entrada:

        n100 = numero / 100; // 576 /100 = 5.76 = conversao para Inteiro = 5 notas de 100 *console.log
        numero = (numero % 100); // resto = 76

        n50 = numero / 50; // 76 / 50 = 1.52 = 1 nota de 50
        numero = numero % 50;// resto = 26

        n20 = numero / 20;// 26 / 20 = 1.30 = 1 nota de 20
        numero = numero % 20; // resto = 6

        n10 = numero / 10; // 6 /10 = 0.60 = 0 notas de 10
        numero = numero % 10; // resto = 6

        n5 = numero / 5; // 6 / 5 = 1.2 = 1 nota de 5
        numero = numero % 5; // resto = 1

        n2 = numero / 2; // 1 / 2 = 0.5 = 0 notas de 2
        numero = numero % 2; // resto = 1

        n1 = numero; // 1 nota de 1
    
    //saida de dados = metodo Math.trunc = retorna uma parte inteira de um num, sem casas decimais

        console.log(valor); //ou alert();
        console.log(Math.trunc(n100) + " nota(s) de R$ 100,00");
        console.log(Math.trunc(n50) + " nota(s) de R$ 50,00");
        console.log(Math.trunc(n20) + " nota(s) de R$ 20,00");
        console.log(Math.trunc(n10) + " nota(s) de R$ 10,00");
        console.log(Math.trunc(n5) + " nota(s) de R$ 5,00");
        console.log(Math.trunc(n2) + " nota(s) de R$ 2,00");
        console.log(Math.trunc(n1) + " nota(s) de R$ 1,00");

//Pelo for:

        var notas = [100, 50, 20, 10, 5, 2, 1]; //vetor das cedulas
        var tipoNota, quantidadeNotas;

        var valor = gets(); //entrada numero usuario -> EX: 576 - prompt();

        console.log(valor); // = 576 - alert();

//for = economiza linhas de codigo, "anda" por todo o vetor de cedulas = inicio 100 ate 1, por laco, retorna a execucao dos comandos e saida de cada qtt de cedulas 

        for (tipoNota of notas) { 

            quantidadeNotas = parseInt(valor / tipoNota); //576 / 100 (1 elemento vetor) = 5.76 = conversao Inteiro = 5

            valor = valor % tipoNota; // resto da divisao (576/100) = 0.76  
    
            console.log(quantidadeNotas + " nota(s) de R$ " + tipoNota + ",00"); //5 nota(s) de R$ 100,00 - alert();
    
        }
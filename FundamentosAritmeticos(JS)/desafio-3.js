/* <Desafio 3>

        Você deve fazer a leitura de 5 valores inteiros. Em seguida mostre quantos valores informados são pares, quantos valores informados são ímpares, quantos valores informados são positivos e quantos valores informados são negativos.
        
        Entrada
        Você receberá 5 valores inteiros.
        
        Saída
        Exiba a mensagem conforme o exemplo de saída abaixo, sendo uma mensagem por linha e não esquecendo o final de linha após cada uma. */

        numero = Array(5);
        
        numero[0] = gets(); //ou prompt
        numero[1] = gets();
        numero[2] = gets();
        numero[3] = gets();
        numero[4] = gets();

        let par = numero.filter(value => value % 2 == 0);
        let impar = numero.filter(value => value % 2 != 0 );
        
        let positivo = numero.filter(value => value > 0);
        let negativo = numero.filter(value => value < 0);
        
        
        console.log (par.length + " " + " valor(es) par(es)"); //ou alert
        console.log (impar.length + " " + " valor(es) impar(es)");
        console.log (positivo.length + " " + " valor(es) positivo(s)");
        console.log (negativo.length + " " + " valor(es) negativo(s)");  
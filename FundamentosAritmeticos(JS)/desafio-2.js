/* <Desafio 2>

    Crie um programa que leia um número e mostre os números pares até esse número, inclusive ele mesmo.

    Entrada
    Você receberá 1 valor inteiro N, onde N > 0.

    Saída
    Exiba todos os números pares até o valor de entrada, sendo um em cada linha. */
    
//Pelo for:

var numero = gets(); //ou prompt 
        
for (var par = 2; par <= numero; par += 2) {
        console.log (par); //ou alert                               
}

//Pelo while

var numero = gets();
var par = 2;

while (par <= numero) {

console.log(par);
par += 2;
} 
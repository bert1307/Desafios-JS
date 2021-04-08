/* <Desafio 1>
    Crie um programa que leia 6 valores. Você poderá receber valores negativos e/ou positivos como entrada, devendo desconsiderar os valores nulos. Em seguida, apresente a quantidade de valores positivos digitados.

    Entrada
        Você receberá seis valores, negativos e/ou positivos.

    Saída
        Exiba uma mensagem dizendo quantos valores positivos foram lidos assim como é exibido abaixo no exemplo de saída. Não esqueça da mensagem "valores positivos" ao final. */

//Por Array:

numero = Array(6);

numero[0] = gets(); //ou prompt();
numero[1] = gets();
numero[2] = gets();
numero[3] = gets();
numero[4] = gets();
numero[5] = gets();

positivo = numero.filter(value => value > 0); // metodo encontra somente os valores acima de 0 no array

console.log (positivo.length + "valores positivos"); //ou alert()

//Pelo for:

var numero = 0;
var positivo = 0;
for (var i=1; i <= 6; i++){
    numero = parseFloat(gets("Entre com um numero: ")) //ou prompt();
    if (numero > 0) {
        positivo ++;
    }
}

console.log(positivo + " " + "valores positivos"); // ou alert();



        
        

        

        
       
        
        
   





 





      

        
       

        

              

       

       

       
        
        
       
      


    
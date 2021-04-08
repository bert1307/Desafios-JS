/* <Desafio 5>

        Você deve calcular o consumo médio de um automóvel onde será informada a distância total percorrida (em Km) e o total de combustível consumido (em litros).
        
        Entrada
        Você receberá dois valores: um valor inteiro X com a distância total percorrida (em Km), e um valor real Y que representa o total de combustível consumido, com um dígito após o ponto decimal.
        
        Saída
        Exiba o valor que representa o consumo médio do automóvel (3 casas após a vírgula), incluindo no final a mensagem "km/l".

        Exemplo de Entrada	Exemplo de Saída
        500                  14.286 km/l
        35.0 */
        
        distancia = parseInt(gets("distancia em Km= ")); //inteiro
        combustivel = parseFloat(gets("total de cmmbustivel em l = "));//real

        consumoMedio = parseFloat(distancia/combustivel).toFixed(3); //3 casas decimais

        console.log(consumoMedio + " km/l");
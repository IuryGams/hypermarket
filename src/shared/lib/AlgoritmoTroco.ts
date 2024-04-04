import { real } from "../utils/Real";
import splitNumber from "../utils/splitNumber";

// Algoritmo que retorna o menor número de cedulas e moedas possiveis para o troco X.
export default function AlgoritmoNotas(troco: number) {
    
    // Utilizo a destruturação para salvar os retornos da função splitNumber que retorna um número inteiro e decimal.
    let [numInt, numDecimal] = splitNumber(troco); 

    // Interando sobre cada valor do real e retornando uma nova lista. 
    return real.reduce((arrayInitial: string[], coin: number) => {

        // Verificando se o número inteiro for maior que o valor da interação e maior ou igual a 1.
        if (numInt >= coin && numInt >= 1) { 
            
            // Dividindo o número inteiro pelo valor da interação, transformando-o em um número inteiro com o metodo Math.Trunc() e salvando o quociente na constante.
            const qtyCash = Math.trunc(numInt / coin); 
            
            // Atribuindo o restante da divisão a o número Inteiro.
            numInt %= coin; 
            
            // Adicionando a instrução a lista. 
            arrayInitial.push(`${qtyCash} ${qtyCash > 1 ? "notas" : "nota"} de ${coin} ${coin > 1 ? "reais." : "real."}`) 
        };

        // Verificando se o número Decimal for maior que o valor da interação e menor do que 1.
        if (numDecimal >= coin) { 
            
            // Dividindo o número decimal pelo valor da interação, transformando-o em um número inteiro com o metodo Math.Trunc() e salvando o quociente na constante.
            const qtyCoin = Math.trunc(numDecimal / coin);
            
            // Atribuindo o restante da divisão a o número Decimal.
           numDecimal %= coin

            // Adicionando a instrução a lista.
            const coinToInt = Math.round(coin * 100);
            arrayInitial.push(`${qtyCoin} ${qtyCoin > 1 ? "moedas" : "moeda"} de ${coinToInt} ${coinToInt > 1 ? "centavos." : "centavo."}`); 
        };


        return arrayInitial
    }, []);

    // Não foi utilizado o método Map. Pois, seria necessário utilizar o método filter em seguida para retornar apenas os valores que necessito. Além de piorar a performace por se tratar de 2 loops.
    // Utilizando o método Reduce podemos simular o método MAP e FILTER retornando apenas o valor que necessito com apenas 1 loop.
}
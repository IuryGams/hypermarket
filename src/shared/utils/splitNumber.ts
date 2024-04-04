// Função que retorna o número interio e decimal.
export default function splitNumber(num: number): number[] {
    // transformando o número do parâmetro para um número inteiro.
    const int = Math.trunc(num);
    // Retornado o número inteiro e o número flutuante com duas casas decimais.
    return [int, parseFloat((num - int).toFixed(2))];
}
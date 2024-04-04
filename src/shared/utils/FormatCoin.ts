
// Uma função para retonar um número X em valor de dinheiro.
export default function FormatCoin (valor: number, currency: "BRL" | "US") {

    // Recebemos um valor e convertemos este valor monetário.
    return valor.toLocaleString("pt-br", {
        style: "currency",
        currency
    })
}
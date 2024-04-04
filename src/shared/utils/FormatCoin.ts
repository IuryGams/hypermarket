

export default function FormatCoin (valor: number, currency: "BRL" | "US") {
    return valor.toLocaleString("pt-br", {
        style: "currency",
        currency
    })
}
import { ProductProps } from "@/types";


// Retorna o valor do produto com impostos no produto.
export default function CalculateTaxation (value: number) {
    const ICMS = value / (1 - 20 / 100); // Calculando o Imposto ICMS sobre o valor do produto.
    const ISS_PIS_CONFINS = (3 / 100) + (9.25 / 100) // Calculando os impostos ISS, PIS e CONFINS sobre o valor do produto.
    const price = parseFloat((ICMS * ISS_PIS_CONFINS).toFixed(2)) // Multiplicando os impostos.
    return value + price
}
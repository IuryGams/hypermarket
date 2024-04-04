import { ProductProps } from "@/types";
import CalculateTotalPrice from "./calculateTotalPrice";


export default function CalculateDescont(products: ProductProps[], porcentagem: number) {

    const fullPrice = CalculateTotalPrice(products); // Retorna o valor total da compra
    const porcent = parseFloat( (fullPrice * porcentagem / 100).toFixed(2) ); // Calcula a porcentagem
    const descont = fullPrice - porcent // Retorna o valor do desconto aplicado.
    return {fullPrice, porcent, descont}
}
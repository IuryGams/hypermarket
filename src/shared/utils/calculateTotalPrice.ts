import { ProductProps } from "@/types";

// Método para calcular todos os produtos selecionados pelo cliente.
export default function CalculateTotalPrice(selectedList: ProductProps[] ): number {

    // Interando sobre cada Item da Lista de produtos. Para cada interação, será somado o valor inicial ao resultado da multiplicação Preço X Quantidade. 
    const price = selectedList.reduce( (accumulator, {price, quantity} ) => {
        return accumulator + (price * quantity);
    }, 0).toFixed(2);

    // Retornado o resultado total da soma de todos os itens da lista.
    return Number(price);
}
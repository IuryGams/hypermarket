import { ProductProps } from "@/types"; // Tipagem do produto
import MarketProductList from "../lib/MarketProductList"; // Lista de produtos do supermercado
import CalculateTaxation from "../utils/calculateImpost";

// Método para cadastrar o registro de um produto.
export default function registryProduct({name, price, quantity}: ProductProps) {

    // Verificando se o produto já foi cadastrado.
    const foundProduct = MarketProductList.some( product => product.name === name);

    // Caso seja cadastrado. Será retornado um erro.
    if(foundProduct) throw new Error("Produto já cadastrado."); 

    // O produto será adicionado ao "banco de dados".
    MarketProductList.push({
        name: name.toLowerCase().trim(),
        price: CalculateTaxation(price),
        quantity: quantity
    })

    // Retornando a lista de produtos cadastrados.
    return MarketProductList;
} 


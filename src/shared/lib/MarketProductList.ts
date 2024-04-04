import { ProductProps } from "@/types";
import CalculateTaxation from "../utils/calculateImpost";


// Lista de produtos do SuperMercado
const MarketProductList: ProductProps[] = [
    { name: "maçã", price: CalculateTaxation(2.99),  quantity: 10},
    { name: "Laranja", price: CalculateTaxation(4.99),  quantity: 15},
    { name: "Melância", price: CalculateTaxation(6.99),  quantity: 20},
    { name: "Limão", price: CalculateTaxation(8.99),  quantity: 25},
    { name: "banana", price: CalculateTaxation(10.99),  quantity: 30},
    { name: "Morango", price: CalculateTaxation(12.99),  quantity: 35},
    { name: "Manga", price: CalculateTaxation(12.99),  quantity: 35},
    { name: "Kiwi", price: CalculateTaxation(12.99),  quantity: 35},
    { name: "Alface", price: CalculateTaxation(12.99),  quantity: 35},
    { name: "Cenoura", price: CalculateTaxation(12.99),  quantity: 35},
]

export default MarketProductList;
import { ProductProps } from "@/types";
import CalculateTaxation from "../utils/calculateImpost";


// Lista de produtos do SuperMercado
const MarketProductList: ProductProps[] = [
    { name: "maçã", price: 2.99,  quantity: 10},
    { name: "Laranja", price: 4.99,  quantity: 15},
    { name: "Melância", price: 6.99,  quantity: 20},
    { name: "Limão", price: 8.99,  quantity: 25},
    { name: "banana", price: 10.99,  quantity: 30},
    { name: "Morango", price: 12.99,  quantity: 35},
    { name: "Manga", price: 12.99,  quantity: 35},
    { name: "Kiwi", price: 12.99,  quantity: 35},
    { name: "Alface", price: 12.99,  quantity: 35},
    { name: "Cenoura", price: 12.99,  quantity: 35},
]

export default MarketProductList;
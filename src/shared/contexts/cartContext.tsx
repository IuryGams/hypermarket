"use client";
import { ProductProps } from "@/types";
import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";
import AlgoritmoNotas from "../lib/AlgoritmoTroco";
import CalculateTotalPrice from "../utils/calculateTotalPrice";
import CalculateTaxation from "../utils/calculateImpost";

export type ProductContext = {
    products: ProductProps[];
    setProducts: Dispatch<SetStateAction<ProductProps[]>>;
}

export const defaultState: ProductContext  = {
    products: [],
    setProducts: () => {}
}

const CartContext = createContext(defaultState);
CartContext.displayName = "MyCart";

export default function CartProvider({children}: {
    children: React.ReactNode;
}) {

    const [products, setProducts] = useState<ProductProps[]>([]);
    
    return (
        <CartContext.Provider value={{products, setProducts}}>
            {children}
        </CartContext.Provider>
    )
}

export function useCartContext() {
    const { products, setProducts } = useContext(CartContext);

    const [cash, setCash] = useState<number>(0);
    const fullPrice = CalculateTotalPrice(products);
    const tax = CalculateTaxation(fullPrice)

    function addProductToCart(newProduct: ProductProps) {
        const repetedProduct = products.find( product => product.name === newProduct.name);

        let newProducts = [...products];

        if(!repetedProduct) {
            newProducts.push({...newProduct, quantity: 1});
        } else {
            repetedProduct.quantity += 1;
        }

        return setProducts(newProducts)
    }

    function removeProductToCart(clickedItemIndex: any) {
        const filteredCart = products.filter( product => products.indexOf(product) !== clickedItemIndex);
        setProducts(filteredCart)
    }

    function handlePlusQuantity(product: ProductProps | undefined) {
        console.log(product);
        let updatedCart = [...products];
        if(product) {

            const foundIndex = products.findIndex( item => item.name === product.name);
            
            if(foundIndex > -1) {
                updatedCart[foundIndex].quantity += 1;
            }

            setProducts(updatedCart);
        } 
    }

    function handleLessQuantity(product: ProductProps | undefined) {
        let updatedCart = [...products];
        if(product) {
            const foundIndex = products.findIndex( item => item.name === product.name);

            if(foundIndex > -1) {
                updatedCart[foundIndex].quantity -= 1;
            }

            setProducts(updatedCart);
        }
    }

    function clearCart() {
        setProducts([])
    }

    function Cashier(){
        const Notas: string[] = AlgoritmoNotas(cash - (fullPrice + tax));
        if(Notas.length > 0){
            return Notas;
        }
        return [];
    }

    return {
        products,
        addProductToCart,
        removeProductToCart,
        handlePlusQuantity,
        handleLessQuantity,
        clearCart,
        cash,
        setCash,
        Cashier,
        fullPrice,
        tax
    }
}


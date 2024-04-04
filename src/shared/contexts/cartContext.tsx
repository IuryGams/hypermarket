"use client";
import { ProductProps } from "@/types";
import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";
import AlgoritmoNotas from "../lib/AlgoritmoTroco";
import CalculateTotalPrice from "../utils/calculateTotalPrice";

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

    const [cash, setCash] = useState<string>();
    const fullPrice = CalculateTotalPrice(products);

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
        const Notas: string[] = AlgoritmoNotas(Number(cash) - fullPrice);
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
        fullPrice
    }
}


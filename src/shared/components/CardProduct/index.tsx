"use client";
import { ProductProps } from "@/types";
import FormatCoin from "@/shared/utils/FormatCoin";
import { useCartContext } from "@/shared/contexts/cartContext";
import { BoxFigure, CardContainer } from "./styled";


export default function CardProduct(product: ProductProps) {
    const { addProductToCart } = useCartContext();

    return (
        <CardContainer>
            <BoxFigure>
                <figcaption>Foto Produto</figcaption>
            </BoxFigure>
            <h2>{product.name}</h2>
            <h3>{FormatCoin(product.price, "BRL")}</h3>
            <button onClick={() => addProductToCart({...product, quantity: 1})}>
                Adicionar ao carrinho
            </button>
        </CardContainer>  
    )
}
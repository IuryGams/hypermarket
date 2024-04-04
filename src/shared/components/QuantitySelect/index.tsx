"use client";
import { FaAngleLeft, FaAngleRight  } from "react-icons/fa";
import {  useCartContext } from "@/shared/contexts/cartContext";
import { ButtonStyled, Container, StyledInput } from "./styled";

export default function QuantitySelect({name} :{
    name: string;
}) {

    const { products, handlePlusQuantity, handleLessQuantity } = useCartContext();

    const foundProduct = products.find(product => product.name === name);

    return(
        <Container>
            <ButtonStyled onClick={() => handleLessQuantity(foundProduct)} >
                <FaAngleLeft/>
            </ButtonStyled>
            <div>
                <StyledInput type="text" value={foundProduct?.quantity} readOnly />
            </div>
            <ButtonStyled onClick={() => handlePlusQuantity(foundProduct)} >
                <FaAngleRight/>
            </ButtonStyled>
        </Container>
    )
}
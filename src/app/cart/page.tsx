"use client";
import WrapperPage from "@/shared/components/WrapperPages";
import { IoMdBasket } from "react-icons/io";
import ProductCart from "@/shared/components/ProductCart";
import Summary from "@/shared/components/Summary";
import { useCartContext } from "@/shared/contexts/cartContext";
import { BoxClient, BoxInput, BoxNotes, BoxProducts, Container, ContentProducts, IconBox, PaymentBox } from "./_styledPage";

export default function CartPage() {

    const { products, setCash, cash, Cashier, fullPrice } = useCartContext();
    const Notas = Cashier();

    return (
        <WrapperPage>
            <Container>
                <ContentProducts>
                    <IconBox>
                            <IoMdBasket size={28} style={{ fill: "var(--primary-color)" }} />
                            <h2>Resumo da compra</h2>
                    </IconBox>
                    <BoxProducts>
                        {products.length === 0 ? 
                        <h2 style={{textAlign: "center", color: "var(--subtext-color)"}}>Nenhum produto adicionado</h2> : 
                        products.map(product => <ProductCart key={product.name} {...product} />)}
                    </BoxProducts>
                </ContentProducts>
                <Summary  />
            </Container>
            <BoxClient>
                <h2>Insira abaixo o valor do pagamento.</h2>
                <PaymentBox>
                    <BoxInput>
                        <input type="number" value={cash || 0} onChange={(e) => setCash(Number(e.target.value))} /> R$
                    </BoxInput>
                </PaymentBox>
                {cash < fullPrice && <span style={{color: "var(--primary-color)"}}>O valor deve ser maior do que o valor total da compra !</span>}
                {fullPrice !== 0 && <BoxNotes>
                    <h4 style={{marginBottom: "16px"}}>O operador deve lhe dar de troco...</h4>
                    {Notas.length > 0 ? Notas.map( (nota, index) => <li key={index}>{nota}</li>) : ""}
                </BoxNotes>}
            </BoxClient>
        </WrapperPage>
    )
}
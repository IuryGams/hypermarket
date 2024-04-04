import { ProductProps } from "@/types";
import QuantitySelect from "../QuantitySelect";
import FormatCoin from "@/shared/utils/FormatCoin";
import { BoxFigure, BoxPrice, BoxQuantity, Container, Content, Details } from "./styled";

export default function ProductCart({name, price, quantity}: ProductProps) {
    return(
        <Container>
            <BoxFigure>
                <figcaption>Foto Produto</figcaption>
            </BoxFigure>
            <Content>
                <h2>{name}</h2>
            </Content>
            <Details >
                <BoxQuantity  >
                    <span>Quantidade</span>
                    <QuantitySelect name={name}  />
                </BoxQuantity>
                <div>
                    <BoxPrice >
                        <span>Preço do produto:</span>
                        <b>{FormatCoin(price, "BRL")}</b>
                    </BoxPrice>
                </div>
            </Details>
        </Container>
    )
}
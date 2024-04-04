import FormatCoin from "@/shared/utils/FormatCoin";
import HorizontalDash from "../HorizontalDash";
import { SiGooglesheets } from "react-icons/si";
import { useCartContext } from "@/shared/contexts/cartContext";
import { AsideContainer, BoxIcon, FlexBoxBetween, FullPrice } from "./styled";
import { FaArrowAltCircleRight } from "react-icons/fa";
import CalculateTaxation from "@/shared/utils/calculateImpost";

export default function Summary() {

    const { fullPrice } = useCartContext();
    const tax = CalculateTaxation(fullPrice)

    return (
        <AsideContainer>
            
                <BoxIcon >
                    <SiGooglesheets size={20} style={{ fill: "var(--primary-color)" }} />
                    <h2>Resumo da compra</h2>
                </BoxIcon>

                <FlexBoxBetween>
                    <span>Sub-Total</span>
                    <b>{FormatCoin(fullPrice, "BRL")}</b>
                </FlexBoxBetween>
                <FlexBoxBetween>
                    <span>Frete</span>
                    <b>Gratuito</b>
                </FlexBoxBetween>
                <FlexBoxBetween>
                    <span>Impostos</span>
                    <b>{FormatCoin(tax, "BRL")}</b>
                </FlexBoxBetween>
                <FlexBoxBetween style={{ cursor: "pointer" }}>
                    <b style={{ color: "var(--green-text)" }}>Adicionar cupom</b>
                    <FaArrowAltCircleRight style={{ color: "var(--green-text)" }} />
                </FlexBoxBetween>

                <HorizontalDash />
                <FlexBoxBetween style={{paddingBlock: "0.25em"}}>
                    <span style={{fontWeight: "bold", fontSize: "20px"}}>Total</span>
                    <b style={{fontSize: "24px"}}>{FormatCoin(fullPrice + tax, "BRL")}</b>
                </FlexBoxBetween>
        </AsideContainer>
    )
}
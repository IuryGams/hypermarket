import FormatCoin from "@/shared/utils/FormatCoin";
import HorizontalDash from "../HorizontalDash";
import { SiGooglesheets } from "react-icons/si";
import { useCartContext } from "@/shared/contexts/cartContext";
import { AsideContainer, BoxIcon, FullPrice } from "./styled";

export default function Summary() {

    const {fullPrice} = useCartContext();

    return (
        <AsideContainer>
            <div>
                <BoxIcon >
                    <SiGooglesheets size={20} style={{ fill: "var(--primary-color)" }} />
                    <h2>Resumo</h2>
                </BoxIcon>
                <FullPrice >
                    <span>Valor dos produtos:</span>
                    <b>{FormatCoin(fullPrice, "BRL")}</b>
                </FullPrice>
                <HorizontalDash />
            </div>
        </AsideContainer>
    )
}
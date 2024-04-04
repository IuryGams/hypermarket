import { CSSProperties } from "styled-components";
import { ContainerMain } from "./styled";

export default function WrapperPage({children, styles}: {
    children: React.ReactNode;
    styles?: CSSProperties;
}) {
    return (
        <ContainerMain style={styles}>
            {children}
        </ContainerMain>
    )
}
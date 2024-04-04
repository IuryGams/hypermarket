import { ContainerMain } from "./styled";

export default function WrapperPage({children}: {
    children: React.ReactNode;
}) {
    return (
        <ContainerMain>
            {children}
        </ContainerMain>
    )
}
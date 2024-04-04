import WrapperPage from "@/shared/components/WrapperPages";
import { Spin } from "@/styles/loadingEffect";


export default function Loading(){
    return(
        <WrapperPage styles={{transform: "scale(1.25)"}}>
            <Spin />
        </WrapperPage>
    )
}
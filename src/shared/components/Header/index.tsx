import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { ContainerHeader, TopBar } from "./styled";

export default function Header() {
    return(
        <ContainerHeader>
            <TopBar>
                <h1>
                    <Link href="/">MarketPlace</Link>
                </h1>
                <div>
                    <button>
                        <Link href="/cart" >
                            <FaShoppingCart size={25}  />
                        </Link>
                    </button>
                </div>
            </TopBar>
        </ContainerHeader> 
    )
}
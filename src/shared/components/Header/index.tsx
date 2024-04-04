"use client";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { ContainerHeader, EffectCart, TopBar } from "./styled";
import { useCartContext } from "@/shared/contexts/cartContext";

export default function Header() {

    const {products} = useCartContext()
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
                        <EffectCart>{products.length}</EffectCart>
                    </button>
                </div>
            </TopBar>
        </ContainerHeader> 
    )
}
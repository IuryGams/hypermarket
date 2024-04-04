import CartProvider from "../contexts/cartContext";


export default function Providers({children}: {
    children: React.ReactNode;
}) {
    return(
        <>
            <CartProvider>
                {children}
            </CartProvider>
        </>
    )
}
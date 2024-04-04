import CardProduct from "@/shared/components/CardProduct";
import MarketProductList from "@/shared/lib/MarketProductList";
import WrapperPage from "@/shared/components/WrapperPages";
import { GridCollection } from "./_styledPage";

export default function Home() {
  const Products = MarketProductList;

  return (
    <WrapperPage>
      <GridCollection>
        {Products.map(product => <CardProduct key={product.name} {...product}  />)}
      </GridCollection>
    </WrapperPage>
  );
}

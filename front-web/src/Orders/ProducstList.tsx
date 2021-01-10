import { type } from "os";
import { checkIsSelected } from "./helpers";
import ProductCard from "./ProductCard";
import { Product } from "./Types";

type Props = {
    products: Product[];
    selectedproducts: Product[];
    onSelectProduct: (product: Product) => void;
}
function ProductsList({products, selectedproducts, onSelectProduct }: Props){
    return (
        <div className="orders-list-container">
            <div className="orders-list-items">
                {products.map(product =>(
                    <ProductCard 
                    key={product.id} 
                    product={product}
                    onSelectProduct={onSelectProduct}
                    isSelectted={checkIsSelected(selectedproducts, product)} />
                ))}
            </div>
        </div>
    )
}

export default ProductsList;
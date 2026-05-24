import { IMAGE_BASEURL } from "../services/BortakvallAPI";
import type { ProductDetails } from "../types/ProductApi.types";


type ProductCardProps = {
    product: ProductDetails;
};

export const ProductCard = ({ product }: ProductCardProps) => {

    return (
        <>
            <span>
                {product && (
                    <li key={product.id}>
                        <img src={`${IMAGE_BASEURL}${product.images.large}`} alt={product.name} />
                        <h2>{product.name}</h2>

                        {product.tags.map((tag) => (
                            <span key={tag.id}>{tag.name}</span>
                        ))}

                        <span>{product.price} kr</span>
                    </li>
                )}               
            </span>
        </>
    )
};
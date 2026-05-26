import { IMAGE_BASEURL } from "../services/BortakvallAPI";
import type { ProductDetails } from "../types/ProductApi.types";


type ProductCardProps = {
    product: ProductDetails;
};

export const ProductCard = ({ product }: ProductCardProps) => {

    return (
        <>
            <ul>
                {product && (
                    <li className="product-card-li" key={product.id}>
                        <img 
                            className="product-card-img" 
                            src={`${IMAGE_BASEURL}${product.images.large}`} alt={product.name} 
                        />
                        <div className="product-card-name-and-price">
                            <h2 className="product-card-name">{product.name}</h2>
                            <span className="product-card-price">{product.price} kr</span>
                        </div>
                        
                        {product.tags.map((tag) => (
                            <span 
                                className="product-card-tags" 
                                key={tag.id}>{tag.name} 
                            </span>
                        ))}
                       
                        <p product-card-description>{product.description}</p>
                    </li>
                )}               
            </ul>
        </>
    )
};
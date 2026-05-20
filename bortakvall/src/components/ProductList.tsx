import { useEffect, useState } from "react";
import type { ProductDetails, Product } from "../types/ProductApi.types";
import { getProduct, getProducts } from "../services/BortakvallAPI";
import { ProductCard } from "./ProductCard";


export const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<ProductDetails>();

    useEffect(() => {
        const loadProducts = async () => {
            const data = await getProducts();
            setProducts(data);
        }
       
        loadProducts();
    },[]);

    
    const openProductCard = async (id: number) => {
        const data = await getProduct(id);
        setSelectedProduct(data);
    }
    

    return (
        <>
            {selectedProduct && (
                <ProductCard product={selectedProduct} />
            )}
            
            <ul>
                {products?.map(product => (
                    <li key={product.id}>
                        <h2>{product.name}</h2>
                        <span>{product.price} kr</span>
                        <button onClick={() => openProductCard(product.id)}>Läs mer</button>                        
                    </li>
                ))}               
            </ul>
            
        </>
    )
};
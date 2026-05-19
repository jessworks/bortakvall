import { useEffect, useState } from "react";
import type { Product } from "../types/ProductApi.types";
import { getProducts } from "../services/BortakvallAPI";


export const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const loadProducts = async () => {
            const data = await getProducts();
            setProducts(data);
        }
       
        loadProducts();
    },[]);

    return (
        <>
            <ul>
                {products?.map(product => (
                    <li key={product.id}>
                        <h2>{product.name}</h2>
                        <span>{product.price} kr</span>
                    </li>
                ))}               
            </ul>
        </>
    )
};
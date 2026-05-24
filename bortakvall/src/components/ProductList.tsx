import { useEffect, useState, useContext } from "react";
import { type ProductDetails, type Product } from "../types/ProductApi.types";
import { getProduct, getProducts, IMAGE_BASEURL } from "../services/BortakvallAPI";
import { ProductCard } from "./ProductCard";
import { CartContext } from "../context/cartContext";


export const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<ProductDetails>();
    const { addToCart } = useContext(CartContext)!; // inte idealt, men för proof of concept i denna stund
    

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
                        <img src={`${IMAGE_BASEURL}${product.images.thumbnail}`} alt={product.name} />
                        <h2>{product.name}</h2>
                        <span>{product.price} kr</span>
                        <button onClick={() => openProductCard(product.id)}>Läs mer</button>
                        <button onClick={() => addToCart(product.id)}>lägg i varukorg</button>                       
                    </li>
                ))}               
            </ul>
        </>
    )
};
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
                    <li className="product-list-li" key={product.id}>
                        <img 
                            className="product-list-img" 
                            src={`${IMAGE_BASEURL}${product.images.thumbnail}`} alt={product.name} 
                        />
                        <div className="product-list-text">
                            <h2 className="product-list-name">{product.name}</h2>
                            <span className="product-list-price">{product.price} kr</span>
                            <div product-list-btns>
                                <button 
                                    className="product-list-open-card" 
                                    onClick={() => openProductCard(product.id)}
                                >
                                    Läs mer
                                </button>
                                <button 
                                    className="product-list-add" 
                                    onClick={() => addToCart(product.id)}
                                    >  
                                        Lägg i varukorg
                                </button>     
                            </div>      
                        </div>
                                
                    </li>
                ))}               
            </ul>
        </>
    )
};
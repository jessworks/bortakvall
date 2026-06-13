import { useEffect, useState, useContext } from "react";
import { type ProductDetails, type Product } from "../types/ProductApi.types";
import { getProduct, getProducts, IMAGE_BASEURL } from "../services/BortakvallAPI";
import { ProductCard } from "./ProductCard";
import { CartContext } from "../context/cartContext";


export const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<ProductDetails>();
    const { addToCart } = useContext(CartContext)!; 
    

    useEffect(() => {
        const loadProducts = async () => {
            const data = await getProducts();       //try/catch
            setProducts(data);
        }
       
        loadProducts();
    },[]);

    
    const openProductCard = async (id: number) => {
        localStorage.setItem("selectedProductId", id.toString());

        const data = await getProduct(id);      // try/catch
        setSelectedProduct(data);
    };

    useEffect(() => {
        const loadSelectedProduct = async () => {
            const savedId = localStorage.getItem("selectedProductId");

            if (savedId) {
                const data = await getProduct(Number(savedId));     //try/catch
                setSelectedProduct(data);
            }
        };

        loadSelectedProduct();
    }, []);

    const closeProductCard = () => {
        setSelectedProduct(undefined);
        localStorage.removeItem("selectedProductId");
    };


    return (
        <>
            {selectedProduct ? (
                <>
                    <ProductCard product={selectedProduct} />
                    <button onClick={() => closeProductCard()}>
                        Läs mindre
                    </button>
                </>
                
            ):(
            <ul className="product-list">
                {products?.map(product => (
                    <li className="product-list-li" key={product.id}>
                        <img 
                            className="product-list-img" 
                            src={`${IMAGE_BASEURL}${product.images.thumbnail}`} alt={product.name} 
                        />
                        <div className="product-list-text">
                            <h2 className="product-list-name">{product.name}</h2>
                            <span className="product-list-price">{product.price} kr</span>
                            <div className="product-list-btns">
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
            )}
        </>
    )
};
//  sum total
//  ProductList -> id for products 'lägg i varukorgen'/carry the number of products (ls?)

import { useState, useEffect, useContext } from "react";
import { type Product } from "../types/ProductApi.types";
import { getProducts } from "../services/BortakvallAPI";
import { CartContext } from "../context/cartContext";


export const ShoppingCart = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const { cartItems, addToCart, removeFromCart } = useContext(CartContext)!;

     useEffect(() => {
            const loadProducts = async () => {
                const data = await getProducts();
                setProducts(data);
            }
           
            loadProducts();
        },[]);


    return (
        <>
            <button>stäng</button>

            <ul>
                {products?.map((product) => {
                    if (cartItems[product.id] > 0) {
                        return (
                            <li key={product.id}>
                                <h2>{product.name}</h2>
                                <span>{product.price} kr</span>
                                <span>{cartItems[product.id]} st</span>

                                <button onClick={() => addToCart(product.id)}>+</button>
                                <button onClick={() => removeFromCart(product.id)}>-</button>
                                <button>delete</button>                  
                            </li>
                        )
                    }
                    
                })}               
            </ul>
            
            <button>till kassa</button>
        </>
    )
};

import { useState, useEffect, useContext } from "react";
import { type Product } from "../types/ProductApi.types";
import { getProducts, IMAGE_BASEURL } from "../services/BortakvallAPI";
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
    
    const sumTotalCart = products.reduce((sum, product) => {
        return sum + product.price  * (cartItems[product.id] || 0)
    },0);


    return (
        <div className="shopping-cart">
            <ul>
                {products?.map((product) => {
                    if (cartItems[product.id] > 0) {
                        return (
                            <li className="shopping-cart-li" key={product.id}>
                                <img 
                                    className="shopping-cart-img" 
                                    src={`${IMAGE_BASEURL}${product.images.thumbnail}`} alt={product.name} 
                                />
                                <div className="shopping-cart-description">
                                    <h2 className="shopping-cart-name">{product.name}</h2>
                                    <span className="shopping-cart-price">{product.price} kr</span>
                                                          
                                    <div className="shopping-cart-add-remove">
                                        <button 
                                            className="shopping-cart-remove shopping-cart-btn" 
                                            onClick={() => removeFromCart(product.id)}
                                        >
                                            -
                                        </button>
                                        <span className="shopping-cart-qty">{cartItems[product.id]} st </span>
                                        <button 
                                            className="shopping-cart-add shopping-cart-btn" 
                                            onClick={() => addToCart(product.id)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>                                
                            </li>
                        )
                    }
                    
                })}               
            </ul>
            
            <span className="sum-total-cart">Totalt: {sumTotalCart} kr</span>
        </div>
    )
};

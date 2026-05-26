import { useState, useEffect, useContext } from "react";
import { type Product } from "../types/ProductApi.types";
import { getProducts, IMAGE_BASEURL } from "../services/BortakvallAPI";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";


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
        <>
            <button>stäng</button>

            <ul>
                {products?.map((product) => {
                    if (cartItems[product.id] > 0) {
                        return (
                            <li className="shopping-cart-li" key={product.id}>
                                <img 
                                    className="shopping-cart-img" 
                                    src={`${IMAGE_BASEURL}${product.images.thumbnail}`} alt={product.name} 
                                />
                                <h2 className="shopping-cart-name">{product.name}</h2>
                                <span className="shopping-cart-price">{product.price} kr</span>
                                
                                <div className="shopping-cart-add-and-remove">
                                    <button 
                                    className="shopping-cart-remove" 
                                    onClick={() => removeFromCart(product.id)}
                                    >
                                        -
                                    </button>
                                    <span className="shopping-cart-qty">{cartItems[product.id]} st</span>
                                    <button 
                                        className="shopping-cart-add" 
                                        onClick={() => addToCart(product.id)}
                                    >
                                        +
                                    </button>
                                </div>
                                                                      
                            </li>
                        )
                    }
                    
                })}               
            </ul>
            
            <span>{sumTotalCart} kr</span>
            <Link className="link-as-btn" to='/OrderForm'>Till kassan</Link>
        </>
    )
};

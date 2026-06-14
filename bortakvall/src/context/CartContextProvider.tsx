import { type ReactNode } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { CartContext } from "./cartContext";


type Props = {
    children: ReactNode;
};


const getDefaultCart = (): Record<number, number> => {
   return{};
};


export const CartContextProvider = ({children}: Props) => {
    const [cartItems, setCartItems] = useLocalStorage<Record<number, number>>("cart", getDefaultCart());

    const addToCart = (itemId: number) => {
        setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }))
    };

    const removeFromCart = (itemId: number) => {
        setCartItems((prev) => ({ ...prev, [itemId]: Math.max((prev[itemId]) - 1, 0)}))
    };

    const clearCart = () => {
        setCartItems({});
    };


    const contextValue = {
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
    };

    console.log(cartItems);

    
    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
};
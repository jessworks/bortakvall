import { createContext, type ReactNode } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";


type CartContextType = {
    cartItems: Record<number, number>;
    addToCart: (itemId: number) => void;
    removeFromCart: (itemId: number) => void;
};

type Props = {
    children: ReactNode;
};


export const CartContext = createContext<CartContextType | null>(null);

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


    const contextValue = {
        cartItems,
        addToCart,
        removeFromCart,
        
    };

    console.log(cartItems);

    
    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
};
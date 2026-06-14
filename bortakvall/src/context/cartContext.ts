import { createContext } from "react";


type CartContextType = {
    cartItems: Record<number, number>;
    addToCart: (itemId: number) => void;
    removeFromCart: (itemId: number) => void;
    clearCart: () => void;
};


export const CartContext = createContext<CartContextType | null>(null);

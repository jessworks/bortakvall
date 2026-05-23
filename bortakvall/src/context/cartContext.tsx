import { createContext, useState, type ReactNode } from "react";


type CartContextType = {
    cartItems: Record<number, number>;
    addToCart: (itemId: number) => void
};

type Props = {
    children: ReactNode;
};


export const CartContext = createContext<CartContextType | null>(null);

const getDefaultCart = (): Record<number, number> => {
   return{};
};


export const CartContextProvider = ({children}: Props) => {
    const [cartItems, setCartItems] = useState<Record<number, number>>(getDefaultCart());

    const addToCart = (itemId: number) => {
        setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }))
    }


    const contextValue = {
        cartItems,
        addToCart,
    };

    console.log(cartItems);

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
};
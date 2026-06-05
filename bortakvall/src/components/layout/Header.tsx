import { Cart } from "../Cart"
import cartIcon from "../../assets/cartIcon.svg";
import xIcon from "../../assets/xIcon.svg";
import { useState } from "react";


export const Header = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => {
        setIsCartOpen(prev => !prev)
    }

    /*const closeCart = () => {
        setIsCartOpen(false)
    }*/

    return (
        <>
            <header>
                <h1>Bortakväll</h1>
                <div className="cart-wrapper">
                    <button 
                        className="cart-icon" 
                        onClick={toggleCart} 
                        aria-label={isCartOpen ? "Close shopping cart" : "Open shopping cart"}
                    >
                        <img src=
                        {isCartOpen ? xIcon : cartIcon} />
                    </button>

                    {isCartOpen && <Cart />}
                    
                </div>
            </header>
        </>
    )
}
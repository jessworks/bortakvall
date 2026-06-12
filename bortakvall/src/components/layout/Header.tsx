import { Cart } from "../Cart"
import cartIcon from "../../assets/cartIcon.svg";
import xIcon from "../../assets/xIcon.svg";
import { useState } from "react";


export const Header = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => {
        setIsCartOpen(prev => !prev)
    }

    
    return (
        <>
            <header>
                <h1>Bortakväll</h1>
                
                <div className="cart-wrapper">
                    <button 
                        className="toggle-cart" 
                        onClick={toggleCart} 
                        aria-label={isCartOpen ? "Close shopping cart" : "Open shopping cart"}
                    >
                        <img className="toggle-cart-icon" 
                            src=
                            {isCartOpen ? xIcon : cartIcon}
                            alt="Icon for opening and closing shopping cart." 
                        />
                    </button>
                    {isCartOpen && <Cart onClose={() => setIsCartOpen(false)} />}
                </div>
            </header>
        </>
    )
}
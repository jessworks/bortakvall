import { Link } from "react-router-dom"
import { ShoppingCart } from "./ShoppingCart"


type CartProps = {
    onClose: () => void;
}

export const Cart = ({ onClose }: CartProps) => {
    return (
        <div className="shopping-cart-dropdown">
            <ShoppingCart />
            <Link 
                className="link-as-btn checkout-link" 
                onClick={onClose}
                to='/OrderForm'
            >
                Till kassan
            </Link>
        </div>
    )
}
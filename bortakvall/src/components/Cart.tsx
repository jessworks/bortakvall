import { Link } from "react-router-dom"
import { ShoppingCart } from "./ShoppingCart"

export const Cart = () => {
    return (
        <div className="shopping-cart-dropdown">
            <ShoppingCart />
            <Link className="link-as-btn" to='/OrderForm'>Till kassan</Link>
        </div>
    )
}
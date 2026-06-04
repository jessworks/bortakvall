import { Link } from "react-router-dom"
import { ShoppingCart } from "./ShoppingCart"

export const Cart = () => {
    return (
        <>
            <button>stäng</button>
            <ShoppingCart />
            <Link className="link-as-btn" to='/OrderForm'>Till kassan</Link>
        </>
    )
}
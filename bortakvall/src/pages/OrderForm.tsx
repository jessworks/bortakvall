import { Link } from "react-router-dom"
import { CustomerDetails } from "../components/CustomerDetails"
import { ShoppingCart } from "../components/ShoppingCart";


export const OrderForm = () => {

    return (
        <>
            <ShoppingCart />
            <CustomerDetails />
            <Link className="link-as-btn" to='/'>Fortsätt handla</Link>
        </>
    )
};
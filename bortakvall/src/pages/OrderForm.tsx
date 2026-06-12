import { Link } from "react-router-dom"
import { CustomerDetails } from "../components/CustomerDetails"
import { ShoppingCart } from "../components/ShoppingCart";


export const OrderForm = () => {

    return (
        <div className="order-form-wrapper">
            <ShoppingCart />
            <CustomerDetails />
            <Link className="link-as-btn home-link" to='/'>Fortsätt handla</Link>
        </div>
    )
};
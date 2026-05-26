import { Link } from "react-router-dom"
import { CustomerDetails } from "../components/CustomerDetails"
import { ShoppingCart } from "../components/ShoppingCart";


export const OrderForm = () => {

    return (
        <>
            <h2>OrderForm</h2>
            <span> printCart </span>
            <ShoppingCart />
            <CustomerDetails />
            <Link to='/'>Home (fortsätt handla)</Link>
        </>
    )
};
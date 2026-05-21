import { Link } from "react-router-dom"
import { CustomerDetails } from "../components/CustomerDetails"


export const OrderForm = () => {

    return (
        <>
            <h2>OrderForm</h2>
            <span> printCart </span>
            <CustomerDetails />
            <span> orderButton </span>
            <Link to='/'>Home</Link>
        </>
    )
};
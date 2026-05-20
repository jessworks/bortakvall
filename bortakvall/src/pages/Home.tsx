import { Link } from "react-router-dom";
import { ProductList } from "../components/ProductList";


export const Home = () => {

    return (
        <>
            <h2>home</h2>
            <Link to='/OrderForm'>OrderForm</Link>
            <ProductList />
        </>
    )
};
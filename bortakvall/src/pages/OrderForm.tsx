import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CustomerContext } from "../context/customerContext";
import { CartContext } from "../context/cartContext";
import { type Product } from "../types/ProductApi.types";
import { getProducts } from "../services/BortakvallAPI";
import { postOrder } from "../services/BortakvallAPI";
import { CustomerDetails } from "../components/CustomerDetails"
import { ShoppingCart } from "../components/ShoppingCart";


export const OrderForm = () => {
    const customerContext = useContext(CustomerContext);
    const cartContext = useContext(CartContext);
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const load = async () => {
            const data = await getProducts();
            setProducts(data);
        };

        load();
    }, []);

    if (!customerContext) {
        throw new Error("CustomerContext must be used within CustomerContextProvider");
    };

    if (!cartContext) {
        throw new Error("CartContext missing");
    };

    const { customerData } = customerContext;
    const { cartItems } = cartContext;

    const handleSubmitOrder = async () => {
        console.log("submitting order");

        const orderItems = products
            .filter((p) => cartItems[p.id] > 0)
            .map((p) => ({
                product_id: p.id,
                qty: cartItems[p.id],
                item_price: p.price,
                item_total: p.price * cartItems[p.id],
            }));

        const orderTotal = orderItems.reduce(
            (sum, item) => sum + item.item_total, 0
        );

        const order = {
            customer_first_name: customerData.firstName,   
            customer_last_name: customerData.lastName,     
            customer_address: customerData.streetAddress,      
            customer_postcode: customerData.postalCode,   
            customer_city: customerData.city,         
            customer_email: customerData.email,   
            customer_phone: customerData.phoneNumber,

            order_items: orderItems,
            order_total: orderTotal,
        };

        console.log("cartItems", cartItems);
        console.log("products", products);
        console.log("orderItems", orderItems);
        console.log("orderTotal", orderTotal);
        console.log(order);
        

        if (orderItems.length === 0) {
            console.error("cart is empty");
            //communicate empty cart to user
        };

        const result = await postOrder(113, order);
        console.log("Order created:", result);
        //empty cart and form --> prop for submit/success/empty cart and form
    };


    return (
        <div className="order-form-wrapper">
            <ShoppingCart />

            <CustomerDetails
                onSubmitOrder={handleSubmitOrder} 
            />

            <Link 
                className="link-as-btn home-link" 
                to='/'
            >
                Fortsätt handla
            </Link>
        </div>
    )
};
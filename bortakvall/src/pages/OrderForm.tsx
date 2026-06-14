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
    const [orderSuccessMessage, setOrderSuccessMessage] = useState<string | null>(null);
    const [orderErrorMessage, setOrderErrorMessage] = useState<string | null>(null);
    

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

    const { clearCart, cartItems } = cartContext;
    const { customerData, resetCustomerData } = customerContext;
     //const { customerData } = customerContext;
    //const { cartItems } = cartContext;

    const handleSubmitOrder = async () => {
        setOrderSuccessMessage(null);
        setOrderErrorMessage(null);

        const orderItems = products
            .filter((p) => cartItems[p.id] > 0)
            .map((p) => ({
                product_id: p.id,
                qty: cartItems[p.id],
                item_price: p.price,
                item_total: p.price * cartItems[p.id],
        }));

        if (orderItems.length === 0) {
            setOrderErrorMessage("Din varukorg är tom. Lägg till varor i korgen innan du beställer.");

            return
        };

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

        const successMessage = (orderId: number) => {
            return `Tack för din beställning! Order ${orderId} är mottagen.`;
        };

        try {
            const result = await postOrder(113, order);
            console.log("Order created:", result);


            setOrderSuccessMessage(successMessage(result.id));
            clearCart();
            resetCustomerData();
           
            //empty cart and form --> prop for submit/success/empty cart and form
        } catch {
            setOrderErrorMessage("Något gick fel vid beställningen.");
        }   
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

             {orderSuccessMessage && (
                <p className="order-success-message">{orderSuccessMessage}</p>
            )}

            {orderErrorMessage && (
                <p className="order-error-message">{orderErrorMessage}</p>
            )}           

        </div>
    )
};
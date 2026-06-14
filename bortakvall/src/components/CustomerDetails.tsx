import { useContext } from "react";
import { CustomerContext } from "../context/customerContext";


interface CustomerDetailsProps {
    onSubmitOrder: () => void;
};


export const CustomerDetails = ({
    onSubmitOrder,
    }: CustomerDetailsProps) => {

    const customerContext = useContext(CustomerContext);

    if (!customerContext) {
        throw new Error (
            "CustomerContext must be used within CustomerContextProvider"
        );
    };

    const {
        customerData,
        setCustomerData
    } = customerContext;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setCustomerData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    return (
        <>
            <div className="form-container">
                <form
                    onSubmit={(event) => {
                        event.preventDefault();
                        onSubmitOrder();
                    }}
                >               
                    <label htmlFor="firstName">Förnamn</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={customerData.firstName}
                        maxLength={255}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="lastName">Efternamn</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={customerData.lastName}
                        maxLength={255}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="streetAddress">Gatuadress</label>
                    <input
                        type="text"
                        id="streetAddress"
                        name="streetAddress"
                        value={customerData.streetAddress}
                        maxLength={255}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="postalCode">Postkod</label>
                    <input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        value={customerData.postalCode}
                        maxLength={6}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="city">Ort</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={customerData.city}
                        maxLength={255}
                        onChange={handleChange}
                        required
                    /> 

                    <label htmlFor="phoneNumber">Telefonnummer</label>
                    <input
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={customerData.phoneNumber}
                        maxLength={255}
                        onChange={handleChange}
                    />               

                    <label htmlFor="email">E-post</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={customerData.email}
                        maxLength={255}
                        onChange={handleChange}
                        required
                    />

                    <button
                        type="submit" 
                    >
                        Beställ
                    </button>
                </form>
            </div>
        </>
    )
}
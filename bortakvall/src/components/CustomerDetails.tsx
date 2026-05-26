import { useState } from "react"
import type { CustomerData } from "../types/CustomerDetails.types";


export const CustomerDetails = () => {
    const [formData, setFormData] = useState<CustomerData> ({
        firstName: "",
        lastName: "",
        streetAddress: "",
        postalCode: "",
        city: "",
        phoneNumber: "",
        email: "",
    });

    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    return (
        <>
            <form>               
                <label htmlFor="firstName">Förnamn</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="lastName">Efternamn</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="streetAddress">Gatuadress</label>
                <input
                    type="text"
                    id="streetAddress"
                    name="streetAddress"
                    value={formData.streetAddress}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="postalCode">Postkod</label>
                <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="city">Ort</label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                /> 

                <label htmlFor="phoneNumber">Telefonnummer</label>
                <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                />               

                <label htmlFor="email">E-post</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <button
                    type="submit"
                >
                    Beställ
                </button>
            </form>
        </>
    )
}
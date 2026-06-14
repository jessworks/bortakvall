import { useState, type ReactNode } from "react";
import { CustomerContext } from "./customerContext";
import type { CustomerData } from "../types/CustomerDetails.types";


/*
interface CustomerContextType {
    customerData: CustomerData;
    setCustomerData: React.Dispatch<React.SetStateAction<CustomerData>>;
    resetCustomerData: () => void;
};
*/
interface Props {
    children: ReactNode;
}


//export const CustomerContext = createContext<CustomerContextType | null>(null);


export const CustomerContextProvider = ({children}: Props) => {
    const [customerData, setCustomerData] = useState<CustomerData>({
        firstName: "",
        lastName: "",
        streetAddress: "",
        postalCode: "",
        city: "",
        phoneNumber: "",
        email: "",
    });

    const resetCustomerData = () => {
        setCustomerData({
            firstName: "",
            lastName: "",
            streetAddress: "",
            postalCode: "",
            city: "",
            phoneNumber: "",
            email: "",
        });
    };

    
    return (
        <CustomerContext.Provider
            value={{
                customerData,
                setCustomerData,
                resetCustomerData,
            }}
        >
            {children}
        </CustomerContext.Provider>
    );
};

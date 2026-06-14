import { createContext } from "react";
import { type CustomerData } from "../types/CustomerDetails.types";


interface CustomerContextType {
    customerData: CustomerData;
    setCustomerData: React.Dispatch<React.SetStateAction<CustomerData>>;
    resetCustomerData: () => void;
};


export const CustomerContext = createContext<CustomerContextType | null>(null);
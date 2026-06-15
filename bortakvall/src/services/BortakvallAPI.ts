import axios from "axios";
import { type Product, type ProductDetails } from "../types/ProductApi.types";
import type { OrderCustomerDetails, OrderResponse } from "../types/Order.types";


const API_BASEURL = import.meta.env.VITE_API_BASE_URL;
export const IMAGE_BASEURL = import.meta.env.VITE_IMAGE_BASE_URL


const apiInstance = axios.create({
    baseURL: API_BASEURL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});


type ApiResponse<T> = {
    data: T;
};


export async function getProducts () {
    try {
        const response = await apiInstance.get<ApiResponse<Product[]>>("/products")
    
        return response.data.data;
    } catch (error: unknown) {      //  känns fel att skriva 'unknown' 
        console.error("Failed to getProducts:", error);

        throw error;
    }
};

export async function getProduct(productId: number) {
    try {
        const response = await apiInstance.get<ApiResponse<ProductDetails>>(`/products/${productId}`)

        return response.data.data;
    } catch (error: unknown) {
        console.error("Failed to getProduct:", error);

        throw error;
    }
};

export async function postOrder(
    userId: number,
    order: OrderCustomerDetails,
    ): Promise<OrderResponse> {
    try {
        const response = await apiInstance.post<ApiResponse<OrderResponse>>(`/users/${userId}/orders`, order);

        return response.data.data;
    } catch (error: unknown) {
        console.error("Failed to postOrder:", error);

        throw error;
    }
};


/*
response   HTTP wrapper  
response.data   API response  
response.data.data    actual products
*/
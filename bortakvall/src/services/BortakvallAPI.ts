import axios from "axios";
import { type Product, type ProductDetails } from "../types/ProductApi.types";
import type { OrderCustomerDetails } from "../types/Order.types";


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
    const response = await apiInstance.get<ApiResponse<Product[]>>("/products")
    
    console.log(response.data);

    return response.data.data;
};

export async function getProduct(productId: number) {
    const response = await apiInstance.get<ApiResponse<ProductDetails>>(`/products/${productId}`)
    
    console.log(response.data);

    return response.data.data;
};

export async function postOrder(
    userId: number,
    order: OrderCustomerDetails,
    ) {
    const response = await apiInstance.post(`/users/${userId}/orders`, order);

    return response.data;
};


/*
response   HTTP wrapper  
response.data   API response  
response.data.data    actual products
*/
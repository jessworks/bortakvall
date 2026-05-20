import axios from "axios";


const API_BASEURL = import.meta.env.VITE_API_BASE_URL;
//const ORDER_BASEURL = import.meta.env.VITE_ORDER_BASE_URL;


const apiInstance = axios.create({
    baseURL: API_BASEURL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

/*
const orderInstance = axios.create({
    baseURL: ORDER_BASEURL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});
*/


export async function getProducts () {
    const response = await apiInstance.get('/products')
    
    console.log(response.data);

    return response.data.data;
};


export async function getProduct(productId: number) {
    const response = await apiInstance.get(`/products/${productId}`)
    
    console.log(response.data);

    return response.data.data;
};


/*
response   HTTP wrapper  
response.data   API response  
response.data.data    actual products
*/
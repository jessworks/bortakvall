export interface Product {
    id: number;
    name: string;
    on_sale: boolean;
    price: number;
    stock_quantity: number;
    stock_status: string;
    images: {
        thumbnail: string;
        large: string;
    };
};

export interface ProductDetails extends Product {
    tags: {
        id: number;
        name: string;
    }[];
};
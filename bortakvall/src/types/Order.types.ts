export interface OrderItem {
    product_id: number;     //måste existera
    qty: number;            //måste vara ett positivt heltal
    item_price: number;     //måste stämma för product_id
    item_total: number;     //måste vara qty * item_price
};


export interface OrderCustomerDetails { // Order?
    customer_first_name: string;    //max 255 tecken
    customer_last_name: string;     //max 255 tecken
    customer_address: string;       //max 255 tecken
    customer_postcode: string;      //max 6 tecken
    customer_city: string;          //max 255 tecken
    customer_email: string;         //max 255 tecken, måste vara en email adress
    customer_phone?: string;        //max 255 tecken, ej obligatorisk

    order_items: OrderItem[];
    order_total: number;            //summan av alla item_total
};

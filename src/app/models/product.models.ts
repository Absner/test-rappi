export interface IProduct {
    id: string;
    name: string;
    quantity: number;
    price: string;
    available: boolean;
    sublevel_id: number;
}

export interface IShoppingCar {
    products: IProduct;
    cant: number;
}

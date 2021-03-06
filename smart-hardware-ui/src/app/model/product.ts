export type Product = {
	id: number;
	name: string;
	description: string;
	defaultImage: string;
	images: string[];
	price: number;
	discount: number;
};

export type Quantity = {
	quantity: number;
};

export type CartDetailedProduct = Product & Quantity;

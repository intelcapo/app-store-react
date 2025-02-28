export const totalPrice = (products) => {
	const prices = products.map((product) => product.price);
	return prices.reduce((productA, productB) => productA + productB, 0);
};

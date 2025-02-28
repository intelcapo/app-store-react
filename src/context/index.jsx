import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
	const [counter, setCounter] = useState(0);
	const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
	const [productActive, setProductActive] = useState(null);
	const [cartProducts, setCartProducts] = useState([]);
	const [isShoppingCartActive, setIsShoppingCartActive] = useState(false);

	const openProductDetail = () => {
		setIsProductDetailOpen(true);
	};

	const closeProductDetail = () => {
		setIsProductDetailOpen(false);
	};

	const addProductsToCart = (product) => {
		const newItems = [...cartProducts, product];
		setCartProducts(newItems);
		updateCartCounter(newItems);
		console.log(newItems);
	};

	const removeProductsToCart = (product) => {
		const newItems = cartProducts.filter((item) => item.id !== product.id);
		setCartProducts(newItems);
		updateCartCounter(newItems);
	};

	const updateCartCounter = (products) => {
		setCounter(products.length);
	};

	const openShoppingCart = () => {
		setIsShoppingCartActive(true);
	};

	const closeShoppingCart = () => {
		setIsShoppingCartActive(false);
	};

	return (
		<ShoppingCartContext.Provider
			value={{
				counter,
				setCounter,
				isProductDetailOpen,
				openProductDetail,
				closeProductDetail,
				productActive,
				setProductActive,
				cartProducts,
				addProductsToCart,
				removeProductsToCart,
				isShoppingCartActive,
				openShoppingCart,
				closeShoppingCart,
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	);
};

import { createContext, useState, useEffect, useContext } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
	const [counter, setCounter] = useState(0);
	const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
	const [productActive, setProductActive] = useState(null);
	const [cartProducts, setCartProducts] = useState([]);
	const [isShoppingCartActive, setIsShoppingCartActive] = useState(false);
	const [orders, setOrders] = useState([]);

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

	const resetCartProducts = () => {
		setCartProducts([]);
	};

	const createOrder = (order) => {
		const newOrders = [...orders, order];
		console.log(newOrders);
		setOrders(newOrders);
	};

	const getOrderById = (orderId) => {
		const order = orders.find((ord) => ord.id == orderId);
		return order;
	};

	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((productsResponse) => {
				return productsResponse.json();
			})
			.then((data) => {
				setProducts(data);
				setProductsFiltered(data);
			});
	}, []);

	const [productsFiltered, setProductsFiltered] = useState([]);

	const [searchByTitle, setSearchByTitle] = useState("");

	const getProductsByTitle = (title) => {
		const productsList = products.filter((prd) =>
			prd.title.toLowerCase().includes(title.toLowerCase())
		);
		return productsList;
	};

	useEffect(() => {
		if (searchByTitle) {
			setProductsFiltered(getProductsByTitle(searchByTitle));
		} else {
			setProductsFiltered(products);
		}
	}, [searchByTitle, products]);

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
				resetCartProducts,
				orders,
				createOrder,
				getOrderById,
				products,
				setProducts,
				productsFiltered,
				setSearchByTitle,
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	);
};

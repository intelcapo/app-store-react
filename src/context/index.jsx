import { createContext, useState, useEffect } from "react";

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
				createCategories(data);
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

	const [categories, setCategories] = useState([]);

	const createCategories = (products) => {
		let categoriesList = [];
		products.forEach((prd) => {
			const category = prd.category.toLowerCase();
			if (!categoriesList.includes(category)) {
				categoriesList.push(category);
			}
		});

		categoriesList.sort((a, b) => {
			if (a < b) {
				return -1;
			}
			if (a > b) {
				return 1;
			}
			return 0;
		});
		setCategories(categoriesList);
	};

	const [currentCategory, setCurrentCategory] = useState("");

	const getFilteredProductsBy = (
		filterType,
		products,
		productTitle,
		productCategory
	) => {
		if (!filterType) {
			return products;
		}

		if (filterType == "BY_CATEGORY") {
			return productCategory.toLowerCase() != "all"
				? getProductsByCategory(productCategory)
				: products;
		}

		if (filterType == "BY_TITLE") {
			return getProductsByTitle(productTitle);
		}

		if (filterType == "BY_CATEGORY_AND_TITLE") {
			return getProductsByCategory(productCategory).filter((prod) =>
				prod.title.toLowerCase().includes(productTitle.toLowerCase())
			);
		}
	};

	useEffect(() => {
		if (searchByTitle && currentCategory)
			setProductsFiltered(
				getFilteredProductsBy(
					"BY_CATEGORY_AND_TITLE",
					products,
					searchByTitle,
					currentCategory
				)
			);
		if (!searchByTitle && currentCategory)
			setProductsFiltered(
				getFilteredProductsBy(
					"BY_CATEGORY",
					products,
					searchByTitle,
					currentCategory
				)
			);
		if (searchByTitle && !currentCategory)
			setProductsFiltered(
				getFilteredProductsBy(
					"BY_TITLE",
					products,
					searchByTitle,
					currentCategory
				)
			);
		if (!searchByTitle && !currentCategory)
			setProductsFiltered(
				getFilteredProductsBy(
					null,
					products,
					searchByTitle,
					currentCategory
				)
			);
	}, [searchByTitle, products, currentCategory]);

	const getProductsByCategory = (categoryName) => {
		let productsList = [];

		if (categoryName.toLowerCase() === "all" || categoryName == "") {
			productsList = products;
		} else {
			productsList = products.filter(
				(prd) => prd.category.toLowerCase() === categoryName
			);
		}

		return productsList;
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
				resetCartProducts,
				orders,
				createOrder,
				getOrderById,
				products,
				setProducts,
				productsFiltered,
				setSearchByTitle,
				categories,
				setCurrentCategory,
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	);
};

import { useContext } from "react";
import "./styles.css";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { ShoppingCartContext } from "../../context";
import OrderCard from "../orderCard";
import { totalPrice } from "../../utils";
import { Link } from "react-router-dom";

const CheckoutSideMenu = () => {
	const context = useContext(ShoppingCartContext);
	const cartProducts = context.cartProducts;

	const handleDeleteProduct = (product) => {
		context.removeProductsToCart(product);
	};

	const createNewOrder = () => {
		const newOrder = {
			id: Date.now(),
			date: new Date().toISOString(),
			products: cartProducts,
			totalProducts: cartProducts.length,
			totalPrice: totalPrice(cartProducts),
		};

		context.createOrder(newOrder);
		context.resetCartProducts();
		context.closeShoppingCart();
	};

	return (
		<aside
			className={`checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white ${
				context.isShoppingCartActive ? "flex" : "hidden"
			}`}
		>
			<div className="flex justify-between items-center p-6 bg-gray-500 text-white">
				<h2 className="ont-medium text-xl">My order</h2>
				<div>
					<XMarkIcon
						className="h-6 w-6 text-white cursor-pointer"
						onClick={() => {
							context.closeShoppingCart();
						}}
					/>
				</div>
			</div>
			<div>
				{cartProducts.length > 0 &&
					cartProducts.map((product) => (
						<>
							<OrderCard
								key={product.id}
								product={product}
								handleDelete={handleDeleteProduct}
							/>
							<hr />
						</>
					))}
			</div>
			<div className="flex justify-between px-6 py-4">
				<span className="text-3xl bold">Total</span>
				<span className="text-3xl bold text-green-400">
					$ {totalPrice(cartProducts)}
				</span>
			</div>
			<div className="flex w-full justify-center items-center cursor-pointer absolute bottom-2">
				<Link to="/my-orders/last">
					<button
						className="w-80 h-12 text-3xl bold bg-green-600 rounded-lg text-white cursor-pointer"
						onClick={() => createNewOrder()}
					>
						Checkout
					</button>
				</Link>
			</div>
		</aside>
	);
};

export default CheckoutSideMenu;

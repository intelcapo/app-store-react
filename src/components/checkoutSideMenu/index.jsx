import { useContext } from "react";
import "./styles.css";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { ShoppingCartContext } from "../../context";
import OrderCard from "../orderCard";
import { totalPrice } from "../../utils";

const CheckoutSideMenu = () => {
	const context = useContext(ShoppingCartContext);
	const cartProducts = context.cartProducts;

	const handleDeleteProduct = (product) => {
		context.removeProductsToCart(product);
	};

	const renderTotal = () => {
		return (
			<div className="flex justify-between px-6 py-4">
				<span className="text-3xl bold">Total</span>
				<span className="text-3xl bold text-green-400">
					$ {totalPrice(cartProducts)}
				</span>
			</div>
		);
	};

	return (
		<aside
			className={`checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white ${
				context.isShoppingCartActive ? "flex" : "hidden"
			}`}
		>
			<div className="flex justify-between items-center p-6">
				<h2 className="ont-medium text-xl">My order</h2>
				<div>
					<XMarkIcon
						className="h-6 w-6 text-black cursor-pointer"
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
			<div>{renderTotal()}</div>
		</aside>
	);
};

export default CheckoutSideMenu;

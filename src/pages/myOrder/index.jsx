import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import { Link, useParams } from "react-router-dom";
import { totalPrice } from "../../utils";
import OrderCard from "../../components/orderCard";
import moment from "moment";

const MyOrderPage = () => {
	const context = useContext(ShoppingCartContext);
	const { id } = useParams();
	let currentOrder = null;

	if (id) {
		currentOrder = context.getOrderById(id);
	} else {
		currentOrder = context.orders.slice(context.orders.length - 1)[0]; //We need to extract the information for the first position
	}
	const products =
		currentOrder?.products?.length > 0 ? currentOrder.products : [];
	return (
		<div>
			<div className="flex justify-between items-center p-6">
				<Link to="/my-orders">
					<ChevronLeftIcon className="w-6 h-6 cursor-pointer" />
				</Link>
				<h2 className="font-bold text-xl">My order</h2>
				<div>
					<p className="flex flex-col">
						<span className="text-right font-bold">
							{currentOrder.id}
						</span>
						<br />
						<span className="text-right">
							{moment(currentOrder.date).format("L")}
						</span>
					</p>
				</div>
			</div>
			<div>
				{products.length > 0 ? (
					products.map((product) => (
						<OrderCard key={product.id} product={product} />
					))
				) : (
					<div>The curren order does not exists</div>
				)}
			</div>
			<div>
				{products.length > 0 && (
					<>
						<hr />
						<p className="flex justify-between px-4">
							<span className="text-lg font-bold">Total</span>
							<span className="text-lg font-bold">
								${totalPrice(products)}
							</span>
						</p>{" "}
					</>
				)}
			</div>
		</div>
	);
};

export default MyOrderPage;

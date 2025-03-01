import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import moment from "moment";
import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";

function MyOrdersPage() {
	const context = useContext(ShoppingCartContext);
	const orders = context.orders;

	return (
		<div>
			<div className="flex justify-center">
				<h2 className="text-2xl text-bold">My Orders</h2>
			</div>
			<div className="container-orders">
				{orders.length > 0 &&
					orders.map((order) => (
						<div
							key={order.id}
							className="flex justify-between items-center w-150 h-20 shadow-md px-8"
						>
							<p>
								<span>{order.id}</span>
							</p>
							<p>
								<span>{moment(order.date).format("L")}</span>
							</p>
							<p className="flex justify-between flex-col">
								<span className="text-bold text-right text-m">
									{order.totalProducts} Unds.
								</span>
								<span className="text-bold text-right text-m text-green-400">
									${order.totalPrice}
								</span>
							</p>
							<Link to={`/my-orders/${order.id}`}>
								<ChevronRightIcon className="w-8 h-8 cursor-pointer" />
							</Link>
						</div>
					))}
			</div>
		</div>
	);
}

export default MyOrdersPage;

import { XMarkIcon } from "@heroicons/react/16/solid";
import "./orderCard.css";

const OrderCard = ({ product, handleDelete }) => {
	return (
		<div className="order-card">
			<figure className="order-card__figure">
				<img
					className="order-card__img rounded-lg object-cover"
					src={product.image}
					alt={product.title}
				/>
			</figure>
			<p className="h-auto">
				<span className="inline-block text-sm text-ellipsis">
					{product.title}
				</span>{" "}
				<br />
			</p>

			<span className="text-sm font-bold">${product.price}</span>
			{handleDelete ? (
				<XMarkIcon
					className="w-6 h-6 cursor-pointer"
					onClick={() => {
						handleDelete(product);
					}}
				/>
			) : (
				<></>
			)}
		</div>
	);
};

export default OrderCard;

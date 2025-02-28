import { useContext } from "react";
import "./styles.css";
import { XMarkIcon } from "@heroicons/react/16/solid";

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
			<p>
				<span className="text-sm">{product.title}</span> <br />
			</p>

			<span className="text-sm font-bold">${product.price}</span>
			<XMarkIcon
				className="w-6 h-6 cursor-pointer"
				onClick={() => {
					handleDelete(product);
				}}
			/>
		</div>
	);
};

export default OrderCard;

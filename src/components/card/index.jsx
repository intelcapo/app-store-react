import { CheckIcon, PlusIcon } from "@heroicons/react/16/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import "./card.css";

const Card = ({ product }) => {
	const { title, category, price, image, id } = product;
	const context = useContext(ShoppingCartContext);

	const renderIcon = (id) => {
		const isInCart =
			context.cartProducts.filter((product) => product.id === id).length >
			0;

		return (
			<div>
				{isInCart ? (
					<div className="absolute top-0 right-0 flex justify-center items-center bg-green-200 w-6 h-6 rounded-full m-2">
						<CheckIcon
							className="w-4 h-4"
							onClick={(e) => {
								e.stopPropagation();
							}}
						/>
					</div>
				) : (
					<div
						className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2"
						onClick={(e) => {
							context.addProductsToCart(product);
							context.openShoppingCart();
							e.stopPropagation();
						}}
					>
						<PlusIcon className="w-4 h-4" />
					</div>
				)}
			</div>
		);
	};

	return (
		<div
			className="card flex flex-col items-center bg-white cursor-pointer rounded-lg shadow-lg"
			onClick={() => {
				context.setProductActive(product);
				context.openProductDetail();
			}}
		>
			<figure className="card__figure relative mb-2  h-4/5">
				<span className="absolute bottom-0 left-0 bg-blue-50 rounded-lg text-black text-xs m-2 px-3 py-0.5">
					{category || ""}
				</span>
				<img
					className="card__img rounded-lg "
					src={image}
					alt={title}
				/>
				{renderIcon(id)}
			</figure>
			<div className="px-5 py-2">
				<p className="flex justify-between">
					<span className="text-sm font-light">{title}</span>
					<span className="text-lg font-medium">${price}</span>
				</p>
			</div>
		</div>
	);
};

export default Card;

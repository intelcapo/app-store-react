import { PlusIcon } from "@heroicons/react/16/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context";

const Card = (data) => {
	const { title, category, price } = data.product;

	const context = useContext(ShoppingCartContext);

	return (
		<div
			className="bg-white cursor-pointer w-56 h-80 h-min rounded-lg shadow-lg"
			onClick={() => {
				context.setProductActive(data.product);
				context.openProductDetail();
			}}
		>
			<figure className="relative mb-2 w-full h-4/5">
				<span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
					{category?.name || ""}
				</span>
				<img
					className="w-full h-full object-cover rounded-lg"
					src="https://images.pexels.com/photos/104842/bmw-vehicle-ride-bike-104842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt={title}
				/>
				<div
					className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2"
					onClick={(e) => {
						context.setCounter(context.counter + 1);
						e.stopPropagation();
					}}
				>
					<PlusIcon className="w-4 h-4" />
				</div>
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

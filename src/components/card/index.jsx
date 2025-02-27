const Card = () => {
	return (
		<div className="bg-white cursor-pointer w-56 h-80 h-min rounded-lg shadow-lg">
			<figure className="relative mb-2 w-full h-4/5">
				<span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
					Toys
				</span>
				<img
					className="w-full h-full object-cover rounded-lg"
					src="https://images.pexels.com/photos/104842/bmw-vehicle-ride-bike-104842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt="product image"
				/>
				<div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2">
					+
				</div>
			</figure>
			<div className="px-5 py-2">
				<p className="flex justify-between">
					<span className="text-sm font-light">BMW Motorbike</span>
					<span className="text-lg font-medium">$3000</span>
				</p>
			</div>
		</div>
	);
};

export default Card;

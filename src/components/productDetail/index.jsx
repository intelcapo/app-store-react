import { useContext } from "react";
import "./productDetail.css";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { ShoppingCartContext } from "../../context";

const ProductDetail = () => {
	const context = useContext(ShoppingCartContext);
	const product = context.productActive;
	console.log(product);

	return (
		<aside
			className={`product-detail flex-col fixed right-0 border border-black rounded-lg bg-white ${
				context.isProductDetailOpen ? "flex" : "hidden"
			}`}
		>
			<div className="flex justify-between items-center p-6">
				<h2 className="ont-medium text-xl">Detail</h2>
				<div>
					<XMarkIcon
						className="h-6 w-6 text-black cursor-pointer"
						onClick={() => {
							context.closeProductDetail();
							context.setProductActive(null);
						}}
					/>
				</div>
			</div>
			{product !== null ? (
				<div className="p-10">
					<figure>
						<img src={product.images[0]} alt={product.title} />
					</figure>
					<p>
						<span className="text-3xl">${product.price}</span>
						<br />
						<span className="text-2xl">{product.title}</span>
						<br />
						<span className="inline-block mt-8">
							{product.description}
						</span>
					</p>
				</div>
			) : (
				<></>
			)}
		</aside>
	);
};

export default ProductDetail;

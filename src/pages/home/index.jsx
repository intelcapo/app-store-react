import Card from "../../components/card";
import ProductDetail from "../../components/productDetail";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import { useParams } from "react-router-dom";

function HomePage() {
	const context = useContext(ShoppingCartContext);
	const { category } = useParams();

	if (category != null) {
		context.setCurrentCategory(category);
	} else {
		context.setCurrentCategory("all");
	}

	const products = context.productsFiltered;

	const renderProducts = () => {
		if (products.length > 0) {
			return (
				<div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
					{products?.map((product) => (
						<Card key={product.id} product={product} />
					))}
				</div>
			);
		} else {
			return (
				<div className="flex justify-center items-center">
					Sorry, we couldn&apos;t find the items that you are looking
					for
				</div>
			);
		}
	};
	return (
		<>
			<div className="flex flex-col items-center justify-center relative w-80 mb-4 gap-4">
				<h1 className="font-medium text-xl">
					Exclusive products for you!
				</h1>
				<input
					type="text"
					placeholder="Search a product"
					name="search"
					id="search"
					className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
					onChange={(e) => {
						context.setSearchByTitle(e.target.value);
					}}
				/>
			</div>
			{renderProducts()}
			<ProductDetail />
		</>
	);
}

export default HomePage;

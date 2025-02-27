import { useState, useEffect } from "react";
import Card from "../../components/card";
import ProductDetail from "../../components/productDetail";

function HomePage() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((productsResponse) => {
				return productsResponse.json();
			})
			.then((data) => {
				setProducts(data);
			});
	}, []);

	return (
		<>
			<h1>Home</h1>
			<div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
				{products?.map((product) => (
					<Card key={product.id} product={product} />
				))}
			</div>
			<ProductDetail />
		</>
	);
}

export default HomePage;

import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import { ShoppingBagIcon } from "@heroicons/react/16/solid";

const NavBar = () => {
	const activeStyle = "underline underline-offset-8";
	const context = useContext(ShoppingCartContext);
	const { categories } = context;

	const renderCategories = (categories) => {
		if (!categories || categories.length === 0)
			return (
				<ul className="flex items-center gap-3">
					<li className="font-semibold text-lg">
						<NavLink to="/">Shopi</NavLink>
					</li>
					<li>
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive ? activeStyle : undefined
							}
						>
							All
						</NavLink>
					</li>
					;
				</ul>
			);

		return (
			<ul className="flex items-center gap-3">
				<li className="font-semibold text-lg">
					<NavLink to="/">Shopi</NavLink>
				</li>
				<li>
					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive ? activeStyle : undefined
						}
					>
						All
					</NavLink>
				</li>
				{categories.map((category, index) => (
					<li key={index}>
						<NavLink
							to={`/${category}`}
							className={({ isActive }) =>
								isActive ? activeStyle : undefined
							}
						>
							{category}
						</NavLink>
					</li>
				))}
			</ul>
		);
	};

	return (
		<nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0 bg-white shadow-lg">
			{renderCategories(categories)}
			<ul className="flex items-center gap-3">
				<li className="text-black/60">willydev@gmail.com</li>
				<li>
					<NavLink
						to="/my-orders"
						className={({ isActive }) =>
							isActive ? activeStyle : undefined
						}
					>
						My orders
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/my-account"
						className={({ isActive }) =>
							isActive ? activeStyle : undefined
						}
					>
						My account
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/sign-in"
						className={({ isActive }) =>
							isActive ? activeStyle : undefined
						}
					>
						Sign in
					</NavLink>
				</li>
				<li
					className="flex items-center"
					onClick={() => {
						context.openShoppingCart();
					}}
				>
					<ShoppingBagIcon className="w-6 h-6 text-black/60" />{" "}
					<div
						className={`flex justify-center items-center text-white w-4 h-4 text-sm ${
							context.cartProducts.length > 0 ? "bg-red-600" : ""
						} rounded-lg p-2"`}
					>
						{context.cartProducts.length}
					</div>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;

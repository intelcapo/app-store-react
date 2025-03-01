import { useRoutes, BrowserRouter } from "react-router-dom";
import { ShoppingCartProvider } from "../../context";
import HomePage from "../home";
import MyAccountPage from "../myAccount";
import MyOrderPage from "../myOrder";
import MyOrdersPage from "../myOrders";
import NotFoundPage from "../notFound";
import SignInPage from "../signIn";
import Layout from "../../components/layout";
import CheckoutSideMenu from "../../components/checkoutSideMenu";
import "./App.css";

const AppRoutes = () => {
	let routes = useRoutes([
		{
			path: "/",
			element: <HomePage />,
		},
		{
			path: "/:category",
			element: <HomePage />,
		},
		{
			path: "/my-account",
			element: <MyAccountPage />,
		},
		{
			path: "/my-orders",
			element: <MyOrdersPage />,
		},
		{
			path: "/my-orders/last",
			element: <MyOrderPage />,
		},
		{
			path: "/my-orders/:id",
			element: <MyOrderPage />,
		},
		{
			path: "/sign-in",
			element: <SignInPage />,
		},
		{
			path: "/*",
			element: <NotFoundPage />,
		},
	]);

	return routes;
};

function App() {
	return (
		<ShoppingCartProvider>
			<BrowserRouter>
				<Layout>
					<AppRoutes />
					<CheckoutSideMenu />
				</Layout>
			</BrowserRouter>
		</ShoppingCartProvider>
	);
}

export default App;

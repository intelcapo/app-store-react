import { useRoutes, BrowserRouter } from "react-router-dom";
import HomePage from "../home";
import MyAccountPage from "../myAccount";
import MyOrdersPage from "../myOrders";
import NotFoundPage from "../notFound";
import SignInPage from "../signIn";
import "./App.css";
import Layout from "../../components/layout";

const AppRoutes = () => {
	let routes = useRoutes([
		{
			path: "/",
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
		<BrowserRouter>
			<Layout>
				<AppRoutes />
			</Layout>
		</BrowserRouter>
	);
}

export default App;

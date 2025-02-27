import NavBar from "../navBar";

const Layout = ({ children }) => {
	return (
		<div>
			<NavBar />
			<div className="flex flex-col mt-20 items-center">{children}</div>
		</div>
	);
};

export default Layout;

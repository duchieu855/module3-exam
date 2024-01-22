import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="flex justify-between items-center  py-4 w-[1200px] mx-auto text-white">
			<Link to="container">
				<h2 className="text-2xl">Library</h2>
			</Link>
			<Link to="/">
				<h2>Issue Book</h2>
			</Link>
			<Link to="/">
				<h2>Member</h2>
			</Link>
			<Link to="/">
				<h2>Books</h2>
			</Link>
			<Link to="/">
				<h2>Import Book</h2>
			</Link>
			<Link to="/">
				<h2>Reports</h2>
			</Link>
		</header>
	);
};

export default Header;

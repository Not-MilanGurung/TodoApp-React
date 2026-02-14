import { Link } from "react-router";

function Header() {
	return (
		<header className="flex items-center bg-gray-800 px-[10%] space-x-10 text-white shadow-4xl">
			<div className="w-1/4 text-3xl">Todo List</div>
			<nav className="flex w-3/4 text-xl h-16">
				<Link className="flex items-center px-5 hover:text-green-300 hover:bg-linear-to-b from-85% to-green-200 cursor-pointer" to="/">Home</Link>
				<Link className="flex items-center px-5 hover:text-green-300 hover:bg-linear-to-b from-85% to-green-200 cursor-pointer" to="/add">Add</Link>
			</nav>
		</header>
	)
}

export default Header;
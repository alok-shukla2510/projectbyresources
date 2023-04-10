import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const NavigationBar = () => {
	const clickHandler = () => {
		fetch("http://localhost:4000/get-users")
			.then((response) => response.json())
			.then((data) => console.log(data));
	};

	return (
		<nav className='flex justify-between items-center h-16'>
			<Link to='/'>
				<img
					src={logo}
					alt='logo'
					className='h-10 w-10 cursor-pointer'
				/>
			</Link>

			<ul className='flex gap-3 items-center capitalize '>
				<li>
					<button
						onClick={clickHandler}
						className='px-6 py-2 rounded-md border-2 border-blue-500 hover:bg-blue-500 hover:text-slate-100'
					>
						Registered users
					</button>
				</li>
			</ul>
		</nav>
	);
};

export default NavigationBar;

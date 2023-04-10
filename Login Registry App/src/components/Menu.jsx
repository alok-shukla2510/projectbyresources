import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { utilitySliceActions } from "../Redux/Slice/UtilitySlice";

const Menu = () => {
	const dispatch = useDispatch();
	const handleReg = () => {
		dispatch(utilitySliceActions.openRegModal());
		dispatch(utilitySliceActions.closeMenuModal());
	};

	const handleLogin = () => {
		dispatch(utilitySliceActions.closeMenuModal());
		dispatch(utilitySliceActions.openLoginModal());
	};

	return (
		<>
			<article className='w-64 space-y-4 bg-white'>
				<h1 className='p-2 text-center text-xl bg-slate-100 rounded-md'>
					Menu
				</h1>
				<ul className='bg-slate-100 rounded-md overflow-hidden'>
					<li className='py-2 px-4 border-b border-slate-300 last:border-none hover:bg-slate-200 cursor-pointer'>
						<Link to={"/"}>Home</Link>
					</li>
					<li
						onClick={handleReg}
						className='py-2 px-4 border-b border-slate-300 last:border-none hover:bg-slate-200 cursor-pointer'
					>
						Registration
					</li>
					<li
						onClick={handleLogin}
						className='py-2 px-4 border-b border-slate-300 last:border-none hover:bg-slate-200 cursor-pointer'
					>
						Login
					</li>
					<li className='py-2 px-4 border-b border-slate-300 last:border-none hover:bg-slate-200 cursor-pointer'>
						<Link to={"/about-us"}>About us</Link>
					</li>
				</ul>
			</article>
		</>
	);
};

export default Menu;

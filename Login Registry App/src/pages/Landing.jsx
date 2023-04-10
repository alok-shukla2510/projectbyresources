import { useSelector } from "react-redux";
import Menu from "../components/Menu";
import Login from "../components/Modal/Login";
import Registration from "../components/Modal/Registration";

const Landing = () => {
	const { isRegModalOpen, isMenuOpen, isLoginModalOpen } = useSelector(
		(state) => state.utils
	);

	return (
		<>
			<main className='h-[calc(100vh-104px)] grid place-items-center overflow-auto py-8'>
				{isMenuOpen && <Menu />}
				{isRegModalOpen && <Registration />}
				{isLoginModalOpen && <Login />}
			</main>
			<footer className='bg-slate-100 flex justify-center items-center h-10'>
				<p>react practical</p>
			</footer>
		</>
	);
};

export default Landing;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";
import UserList from "./pages/UserList";
import NavigationBar from "./components/Global/NavigationBar";

const App = () => {
	return (
		<BrowserRouter>
			<header className='bg-slate-100 px-10 drop-shadow-lg'>
				<NavigationBar />
			</header>

			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='/about-us' element={<About />} />
				<Route path='/registered-users' element={<UserList />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;

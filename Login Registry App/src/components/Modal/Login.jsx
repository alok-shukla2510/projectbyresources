import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { utilitySliceActions } from "../../Redux/Slice/UtilitySlice";

const Registration = () => {
	const [userLoginCredentials, setUserLoginCredentails] = useState({
		email: "",
		password: "",
	});
	const [error, setError] = useState({});
	const dispatch = useDispatch();

	//handle change in value of input field
	const handleChange = (e) => {
		const { name, value } = e.target;
		setUserLoginCredentails({ ...userLoginCredentials, [name]: value });
	};

	//handles validation of form before posting the data
	const validation = () => {
		let tempError = {};
		const isEmailVaild = userLoginCredentials.email.match(
			/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
		);

		if (!isEmailVaild) {
			tempError.email = "please enter a valid email";
		}

		if (!userLoginCredentials.password) {
			tempError.password = "password is required";
		}

		setError(tempError);
		return Object.keys(tempError).length === 0;
	};

	//once details are filled without validation error this function will execute
	const handleSubmit = (e) => {
		e.preventDefault();
		if (validation()) {
			console.log("registered boi");
		}
	};

	const handleClose = () => {
		dispatch(utilitySliceActions.closeLoginModal());
		dispatch(utilitySliceActions.openMenuModal());
	};

	console.log(error);
	console.log("userSignupDetailsuserSignupDetails", userLoginCredentials);

	return (
		<>
			<article className='drop-shadow-md w-96 flex flex-col bg-slate-100 p-6 box-content gap-2'>
				<section className='flex flex-col gap-2'>
					<section className='flex flex-col'>
						<label htmlFor='email' className='label'>
							email
						</label>
						<div className='flex flex-col'>
							<input
								id='email'
								name='email'
								type='email'
								value={userLoginCredentials.email}
								onChange={(e) => {
									handleChange(e);
								}}
								className={`py-2 px-1 rounded-md hover:bg-slate-200 focus:bg-slate-200 focus:outline-blue-400 ${
									error.email &&
									"border border-red-600 outline-none"
								}`}
								placeholder='john'
							/>
							{error.email && (
								<span className='text-red-600 text-xs'>
									{error.email}
								</span>
							)}
						</div>
					</section>

					<section className='flex flex-col'>
						<label htmlFor='password' className='label'>
							password
						</label>
						<div className='flex flex-col'>
							<input
								type='password'
								id='password'
								name='password'
								value={userLoginCredentials.password}
								onChange={(e) => {
									handleChange(e);
								}}
								className={`py-2 px-1 rounded-md hover:bg-slate-200 focus:bg-slate-200 focus:outline-blue-400 ${
									error.password &&
									"border border-red-600 outline-none"
								}`}
								placeholder='john'
							/>
							{error.password && (
								<span className='text-red-600 text-xs'>
									{error.password}
								</span>
							)}
						</div>
					</section>

					<section className='flex justify-between items-center'>
						<button
							onClick={handleClose}
							className='px-5 py-1 rounded-md border-2 border-blue-500 hover:bg-blue-500 hover:text-slate-100'
						>
							close
						</button>
						<button
							onClick={handleSubmit}
							className='bg-blue-500 text-slate-100 py-1 px-5 rounded-md border-2 border-blue-500 hover:bg-slate-100 hover:text-slate-800 transition-colors'
						>
							submit
						</button>
					</section>
				</section>
			</article>
		</>
	);
};

export default Registration;

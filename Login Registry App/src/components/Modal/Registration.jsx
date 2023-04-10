import { useState } from "react";
import { useDispatch } from "react-redux";
import { utilitySliceActions } from "../../Redux/Slice/UtilitySlice";

const Registration = () => {
	const [userSignupDetails, setUserSignupDetails] = useState({
		firstName: "",
		lastName: "",
		fullName: "",
		dateOfBirth: "",
		city: "",
		state: "",
		country: "",
		pincode: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [error, setError] = useState({});
	const dispatch = useDispatch();

	//handle change in value of input field
	const handleChange = (e) => {
		const { name, value } = e.target;
		setUserSignupDetails({ ...userSignupDetails, [name]: value });
	};

	//handles validation of form before posting the data
	const validation = () => {
		let tempError = {};
		const isEmailVaild = userSignupDetails.email.match(
			/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
		);

		if (!userSignupDetails.firstName) {
			tempError.firstName = "first name is required";
		}

		if (!userSignupDetails.lastName) {
			tempError.lastName = "last name is required";
		}

		if (!userSignupDetails.dateOfBirth) {
			tempError.dateOfBirth = "DOB is required";
		} else if (userSignupDetails.dateOfBirth) {
			let optimizedBirthday = userSignupDetails.dateOfBirth.replace(
				/-/g,
				"/"
			);
			let myBirthday = new Date(optimizedBirthday);
			let currentDate = new Date().toJSON().slice(0, 10) + " 01:00:00";
			let myAge = ~~((Date.now(currentDate) - myBirthday) / 31557600000);

			if (myAge < 18) {
				tempError.dateOfBirth = "age should be greater than 18.";
			}
		}

		if (!userSignupDetails.country) {
			tempError.country = "please select a country";
		}

		if (!userSignupDetails.state) {
			tempError.state = "please select a state";
		}

		if (!userSignupDetails.city) {
			tempError.city = "please select a city";
		}

		if (!userSignupDetails.pincode) {
			tempError.pincode = "please enter pincode";
		} else if (userSignupDetails.pincode.length !== 6) {
			tempError.pincode = "pincode should be equal to 6 digits";
		}

		if (!isEmailVaild) {
			tempError.email = "please enter a valid email";
		}

		if (!userSignupDetails.password) {
			tempError.password = "password is required";
		}

		if (!userSignupDetails.confirmPassword) {
			tempError.confirmPassword = "confirm password is required";
		} else if (
			userSignupDetails.password !== userSignupDetails.confirmPassword
		) {
			tempError.confirmPassword = "passwords doesn't match";
		}

		setError(tempError);
		return Object.keys(tempError).length === 0;
	};

	//once details are filled without validation error this function will execute
	const handleSubmit = (e) => {
		e.preventDefault();
		if (validation()) {
			fetch("http://localhost:4000/create-user", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(userSignupDetails),
			});
		}
	};

	const handleClose = () => {
		dispatch(utilitySliceActions.closeRegModal());
		dispatch(utilitySliceActions.openMenuModal());
	};

	console.log("userSignupDetailsuserSignupDetails", userSignupDetails);

	return (
		<>
			<article className='drop-shadow-md w-96 flex flex-col bg-slate-100 p-6 box-content gap-2'>
				<section className='flex flex-col'>
					<label htmlFor='firstName' className='label'>
						First name
					</label>
					<div className='flex flex-col'>
						<input
							type='text'
							id='firstName'
							name='firstName'
							value={userSignupDetails.firstName}
							onChange={(e) => {
								handleChange(e);
							}}
							className={`py-2 px-1 rounded-md hover:bg-slate-200 focus:bg-slate-200 focus:outline-blue-400 ${
								error.firstName &&
								"border border-red-600 outline-none"
							}`}
							placeholder='john'
						/>
						{error.firstName && (
							<span className='text-red-600 text-xs'>
								{error.firstName}
							</span>
						)}
					</div>
				</section>

				<section className='flex flex-col'>
					<label htmlFor='lastName' className='label'>
						Last name
					</label>
					<div className='flex flex-col'>
						<input
							type='text'
							id='lastName'
							name='lastName'
							value={userSignupDetails.lastName}
							onChange={(e) => {
								handleChange(e);
							}}
							className={`py-2 px-1 rounded-md hover:bg-slate-200 focus:bg-slate-200 focus:outline-blue-400 ${
								error.lastName &&
								"border border-red-600 outline-none"
							}`}
							placeholder='john'
						/>
						{error.lastName && (
							<span className='text-red-600 text-xs'>
								{error.lastName}
							</span>
						)}
					</div>
				</section>

				<section className='flex flex-col'>
					<label htmlFor='fullName' className='label'>
						Full name
					</label>
					<div className='flex flex-col'>
						<input
							type='text'
							id='fullName'
							name='fullName'
							value={
								userSignupDetails.firstName +
								" " +
								userSignupDetails.lastName
							}
							onChange={() => {}}
							className={`py-2 px-1 rounded-md hover:bg-slate-200 focus:bg-slate-200 focus:outline-blue-400 ${
								error.fullName &&
								"border border-red-600 outline-none"
							}`}
							placeholder='john'
						/>
						{error.fullName && (
							<span className='text-red-600 text-xs'>
								{error.fullName}
							</span>
						)}
					</div>
				</section>

				<section className='flex flex-col'>
					<label htmlFor='dateOfBirth' className='label'>
						Date of Birth
					</label>
					<div className='flex flex-col'>
						<input
							type='date'
							id='dateOfBirth'
							name='dateOfBirth'
							value={userSignupDetails.dateOfBirth}
							onChange={(e) => {
								handleChange(e);
							}}
							className={`py-2 px-1 rounded-md hover:bg-slate-200 focus:bg-slate-200 focus:outline-blue-400 ${
								error.dateOfBirth &&
								"border border-red-600 outline-none"
							}`}
							placeholder='john'
						/>
						{error.dateOfBirth && (
							<span className='text-red-600 text-xs'>
								{error.dateOfBirth}
							</span>
						)}
					</div>
				</section>

				<section className='flex flex-col'>
					<label htmlFor='country' className='label'>
						Country
					</label>
					<div className='flex flex-col'>
						<select
							value={userSignupDetails.country}
							name='country'
							id='country'
							className={`py-2 px-1 rounded-md hover:bg-slate-200 focus:bg-slate-200 focus:outline-blue-400 ${
								error.country &&
								"border border-red-600 outline-none"
							}`}
							onChange={handleChange}
						>
							<option selected value={null}>
								Select Country
							</option>
							<option value='India'>India</option>
							<option value='Australia'>Australia</option>
						</select>
						{error.country && (
							<span className='text-red-600 text-xs'>
								{error.country}
							</span>
						)}
					</div>
				</section>

				<section className='flex flex-col'>
					<label htmlFor='state' className='label'>
						State
					</label>
					<div className='flex flex-col'>
						<select
							name='state'
							id='state'
							className={`py-2 px-1 rounded-md hover:bg-slate-200 focus:bg-slate-200 focus:outline-blue-400 ${
								error.state &&
								"border border-red-600 outline-none"
							}`}
							onChange={handleChange}
						>
							<option selected value={null}>
								Select State
							</option>
							<option value='Gujarat'>Gujarat</option>
							<option value='Tamil Nadu'>Tamil Nadu</option>
							<option value='Maharashtra'>Maharashtra</option>
						</select>
						{error.state && (
							<span className='text-red-600 text-xs'>
								{error.state}
							</span>
						)}
					</div>
				</section>

				<section className='flex flex-col'>
					<label htmlFor='city' className='label'>
						city
					</label>
					<div className='flex flex-col'>
						<select
							name='city'
							id='city'
							onChange={handleChange}
							className={`py-2 px-1 rounded-md hover:bg-slate-200 focus:bg-slate-200 focus:outline-blue-400 ${
								error.city &&
								"border border-red-600 outline-none"
							}`}
						>
							<option selected value={null}>
								Select City
							</option>
							<option value='Surat'>Surat</option>
							<option value='Mumbai'>Mumbai</option>
							<option value='Rajkot'>Rajkot</option>
						</select>
						{error.city && (
							<span className='text-red-600 text-xs'>
								{error.city}
							</span>
						)}
					</div>
				</section>

				<section className='flex flex-col'>
					<label htmlFor='pincode' className='label'>
						Pincode
					</label>
					<div className='flex flex-col'>
						<input
							type='number'
							id='pincode'
							name='pincode'
							value={userSignupDetails.pincode}
							onChange={(e) => {
								handleChange(e);
							}}
							className={`py-2 px-1 rounded-md hover:bg-slate-200 focus:bg-slate-200 focus:outline-blue-400 ${
								error.pincode &&
								"border border-red-600 outline-none"
							}`}
							placeholder='380097'
						/>
						{error.pincode && (
							<span className='text-red-600 text-xs'>
								{error.pincode}
							</span>
						)}
					</div>
				</section>

				<section className='flex flex-col'>
					<label htmlFor='email' className='label'>
						email
					</label>
					<div className='flex flex-col'>
						<input
							id='email'
							name='email'
							type='email'
							value={userSignupDetails.email}
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
							value={userSignupDetails.password}
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

				<section className='flex flex-col'>
					<label htmlFor='confirmPassword' className='label'>
						confirm password
					</label>
					<div className='flex flex-col'>
						<input
							type='password'
							id='confirmPassword'
							name='confirmPassword'
							value={userSignupDetails.confirmPassword}
							onChange={(e) => {
								handleChange(e);
							}}
							className={`py-2 px-1 rounded-md hover:bg-slate-200 focus:bg-slate-200 focus:outline-blue-400 ${
								error.confirmPassword &&
								"border border-red-600 outline-none"
							}`}
							placeholder='john'
						/>
						{error.confirmPassword && (
							<span className='text-red-600 text-xs'>
								{error.confirmPassword}
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
			</article>
		</>
	);
};

export default Registration;

import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import { ToastContainer, toast } from "react-toastify";

const Card = () => {
	const [count, setCount] = useState(1);
	const [usd, setUsd] = useState(15.3);

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
	});

	// form value handle
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form Data:", formData);
	};

	// increment decrement
	const handleIncrement = (e) => {
		e.preventDefault();
		if (count < 3) {
			setCount(count + 1);
			setUsd(usd + 15.3);
		} else {
			toast.warn("Scholarship limit reached for current scholarship session", {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: false,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		}
	};

	const handleDecrement = (e) => {
		e.preventDefault();

		if (count > 1) {
			setCount(count - 1);
			setUsd(usd - 15.3);
		}
	};

	return (
		<div className='w-[350px] text-left bg-white p-4 rounded-lg mt-8 md:mt-0'>
			<h2 className='text-black text-[20px] font-semibold'>
				Join the{" "}
				<span className='text-green-400 font-bold'>#alteryouthrevolution</span>
			</h2>

			{/* form */}
			<form
				className='mt-5 flex flex-col gap-5'
				onSubmit={handleSubmit}
			>
				<div>
					<input
						type='text'
						name='name'
						value={formData.name}
						onChange={handleChange}
						className='inpt'
						placeholder='Your name'
						required
					/>
				</div>
				<div>
					<input
						type='email'
						name='email'
						value={formData.email}
						onChange={handleChange}
						className='inpt'
						placeholder='Your email'
						required
					/>
				</div>
				<div className='flex flex-col'>
					<PhoneInput
						defaultCountry='BD'
						name='phone'
						value={formData.phone}
						onChange={(e) =>
							setFormData({
								...formData,
								phone: e,
							})
						}
						withCountryCallingCode
						international
						placeholder='Your number'
						required
						className='inpt'
					/>
				</div>

				<div className='flex justify-between items-center mt-4'>
					<div className='flex items-center'>
						<button
							onClick={(e) => handleDecrement(e)}
							className={`w-10 h-10 rounded-lg ${
								count > 1 ? "bg-green-500" : "bg-gray-300"
							} text-white`}
						>
							-
						</button>
						<span className='mx-2'>{count}</span>
						<button
							onClick={(e) => handleIncrement(e)}
							className={` w-10 h-10 rounded-lg ${
								count < 3 ? "bg-green-500" : "bg-gray-300"
							} text-white`}
						>
							+
						</button>
					</div>
					<div>
						<span className='font-bold text-xl'>USD {usd.toFixed(2)}/</span>
						<span className=' text-sm'>month</span>
					</div>
				</div>
				<button
					className='btn btn-primary'
					type='submit'
				>
					Submit
				</button>
			</form>
			<ToastContainer
				position='top-center'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick={false}
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='light'
			/>
		</div>
	);
};

export default Card;

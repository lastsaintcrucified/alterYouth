import React from "react";
import { FiFacebook, FiInstagram } from "react-icons/fi";

const Footer = () => {
	return (
		<footer className='bg-slate-50'>
			<div className='mx-10 mb-2 pt-10 flex flex-col md:flex-row  md:items-end justify-between'>
				<ul>
					<li className='tag text-[14px] font-bold my-2'>
						Learn About Alteryouth
					</li>
					<li className='text-[14px] mt-2 '>Home</li>
					<li className='text-[14px] mt-2 '>About Us</li>
					<li className='text-[14px] mt-2 '>How it works</li>
					<li className='text-[14px] mt-2 '>Scholarship policy</li>
					<li className='text-[14px] mt-2 '>Get the app</li>
				</ul>
				<span className='text-[14px] mt-2 hidden md:block'>
					Towards a literate Bangladesh
				</span>
			</div>
			<div className='md:hidden mx-10 py-2 flex flex-col items-start justify-start  border-t-2 border-gray-200'>
				<span className='text-[14px] mt-2'>Towards a literate Bangladesh</span>
				<div className='flex items-start justify-start  my-2 '>
					<FiFacebook
						width={40}
						height={40}
					/>
					<FiInstagram
						width={40}
						height={40}
						className='mx-2'
					/>
				</div>
			</div>
			<div className='mx-10 py-5 flex flex-col md:flex-row items-start justify-between border-t-2 border-gray-200'>
				<ul>
					<li className='text-[14px] mt-2 '>© 2025 AlterYouth Limited</li>
					<li className='text-[14px] mt-2 '>
						Terms of Service ⋅ Privacy Policy
					</li>
				</ul>
				<div className='hidden md:flex md:items-center md:justify-around px-5 '>
					<FiFacebook
						width={40}
						height={40}
						className='mx-5'
					/>
					<FiInstagram
						width={40}
						height={40}
					/>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

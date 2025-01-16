import React from "react";
import AppstoreImg from "../../public/icons/appstore_small.svg";
import PlaystoreImg from "../../public/icons/playstore_small.svg";

const Scholarship = () => {
	return (
		<div className='w-full flex flex-col items-center justify-center pt-8 bg-gray-50'>
			<div className='w-[300px] md:w-[550px] text-center'>
				<h1 className='text-4xl md:leading-[60px] font-bold  text-black'>
					The Uber for Scholarships
				</h1>
				<h2 className='text-[18px] leading-2 text-black'>
					A platform connecting the world with financially struggling students
					in Government Primary Schools of Bangladesh
				</h2>
			</div>
			<div className='mt-4 flex items-center justify-center gap-5'>
				<AppstoreImg
					width={100}
					height={50}
				/>
				<PlaystoreImg
					width={100}
					height={50}
				/>
			</div>
		</div>
	);
};

export default Scholarship;

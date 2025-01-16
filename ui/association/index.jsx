import Image from "next/image";
import React from "react";
import GoogleIcon from "../../public/icons/Google";

const Association = () => {
	return (
		<div className='mt-20 p-10 w-full flex flex-col md:flex-row items-center justify-between'>
			<div className='pb-5 md:pb-0 w-1/3 flex flex-col md:flex-row items-center justify-center border-b border-l-0 md:border-b-0 md:border-gray md:border-r md:border-gray-300 '>
				<Image
					src='/images/undp.jpg'
					alt='Image 1'
					width={120}
					height={150}
				/>
				<div className='flex flex-col text-center md:text-justify'>
					<h2 className='tag w-25 '>"Asia Pacific </h2>
					<h2 className='tag w-25 '>SDG Enterprise Award"</h2>
				</div>
			</div>
			<div className='pt-5 md:pt-0 w-1/3 flex flex-col items-center justify-between  '>
				<h2 className='tag text-xl'>In association with</h2>
				<Image
					src='/images/expo.png'
					alt='Image 2'
					width={100}
					height={100}
					className='py-10'
				/>
			</div>
			<div className='md:py-8 w-1/3 flex flex-col items-center justify-between border-t border-l-0 md:border-t-0  md:border-l md:border-gray-300'>
				<GoogleIcon className='w-40 h-20' />
				<h2 className='tag text-lg text-center'>
					Winner of Google Business Group Stories
				</h2>
			</div>
		</div>
	);
};

export default Association;

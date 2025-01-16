import Image from "next/image";
import React from "react";

const Testimonial = ({ name, countryImgSrc, students }) => {
	return (
		<div className='card mt-5'>
			<div className='flex items-start justify-between'>
				<div className='flex flex-col items-start justify-center gap-2'>
					<div className='flex items-center gap-1 justify-start'>
						<span className='text-sm font-bold tracking-tighter text-center'>
							@{name}
						</span>
						<Image
							src={countryImgSrc}
							alt='Flag'
							width={16}
							height={8}
						/>
					</div>
					<span className='text-green-500 py-1 px-3 text-xs rounded-full bg-gray-200 text-center'>
						2 scholarships
					</span>
				</div>
				<p className='text-gray-400 text-xs'>joined today</p>
			</div>
			{students.map(({ imgSrc, name, school }) => (
				<div
					key={imgSrc}
					className='flex mt-5 gap-2 items-center'
				>
					<Image
						src={imgSrc}
						alt='boy image'
						width={40}
						height={40}
						className='h-10 w-10 rounded-full'
					/>
					<div className='flex flex-col ml-2'>
						<div className='text-sm font-semibold leading-5 tracking-tight'>
							{name}
						</div>
						<div className='text-sm tracking-tight leading-5 text-gray-400'>
							{school}
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Testimonial;

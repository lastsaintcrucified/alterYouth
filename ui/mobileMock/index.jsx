import Image from "next/image";
import React from "react";

const MobileMock = () => {
	const images = [
		{
			src: "/images/app_scholarship.jpg",
			title: "Transfer directly",
			subtitle:
				"Your scholarship is transferred directly to your student's family on their mobile bank account.",
		},
		{
			src: "/images/app_school.png",
			title: "Get school reports",
			subtitle:
				"View attendance data and report cards from your student's school, until completion of Class 5.",
		},
		{
			src: "/images/app_graduation.png",
			title: "Ensure a literate citizen",
			subtitle:
				"Your scholarship continues until completion of class 5, when your student achieves literacy.",
		},
	];

	return (
		<div className='pt-12 pb-10 flex flex-wrap gap-4 items-center justify-around text-center bg-gray-50'>
			{images.map((image, index) => (
				<div
					key={index}
					className='w-[350px] flex flex-col items-center gap-2'
				>
					<Image
						src={image.src}
						alt={image.title}
						width={170}
						height={340}
					/>
					<h3 className='mt-4 font-semibold text-lg'>{image.title}</h3>
					<p className=''>{image.subtitle}</p>
				</div>
			))}
		</div>
	);
};

export default MobileMock;

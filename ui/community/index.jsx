import React, { useState } from "react";
import Testimonial from "../component/card";

const testimonials = [
	{
		id: 1,
		name: "shimul",
		countryImgSrc: "https://flagicons.lipis.dev/flags/4x3/us.svg",
		students: [
			{
				imgSrc: "/images/ht1.jpeg",
				name: "Mosammot Shuborna, Class 3",
				school: "Futkibaari Government Primary School",
			},
			{
				imgSrc: "/images/ht2.jpeg",
				name: "Mosammot Shuborna, Class 3",
				school: "Futkibaari Government Primary School",
			},
		],
		scholarshipNum: 2,
	},
	{
		id: 2,
		name: "rabeya",
		countryImgSrc: "https://flagicons.lipis.dev/flags/4x3/gb.svg",
		students: [
			{
				imgSrc: "/images/ht1.jpeg",
				name: "Mosammot Shuborna, Class 3",
				school: "Futkibaari Government Primary School",
			},
		],
		scholarshipNum: 2,
	},
	{
		id: 3,
		name: "pinku",
		countryImgSrc: "https://flagicons.lipis.dev/flags/4x3/bd.svg",
		students: [
			{
				imgSrc: "/images/ht1.jpeg",
				name: "Mosammot Shuborna, Class 3",
				school: "Futkibaari Government Primary School",
			},
			{
				imgSrc: "/images/ht2.jpeg",
				name: "Mosammot Shuborna, Class 3",
				school: "Futkibaari Government Primary School",
			},
		],
		scholarshipNum: 2,
	},
	{
		id: 4,
		name: "shimul",
		countryImgSrc: "https://flagicons.lipis.dev/flags/4x3/us.svg",
		students: [
			{
				imgSrc: "/images/ht1.jpeg",
				name: "Mosammot Shuborna, Class 3",
				school: "Futkibaari Government Primary School",
			},
			{
				imgSrc: "/images/ht2.jpeg",
				name: "Mosammot Shuborna, Class 3",
				school: "Futkibaari Government Primary School",
			},
		],
		scholarshipNum: 2,
	},

	{
		id: 5,
		name: "pinku",
		countryImgSrc: "https://flagicons.lipis.dev/flags/4x3/bd.svg",
		students: [
			{
				imgSrc: "/images/ht1.jpeg",
				name: "Mosammot Shuborna, Class 3",
				school: "Futkibaari Government Primary School",
			},
			{
				imgSrc: "/images/ht2.jpeg",
				name: "Mosammot Shuborna, Class 3",
				school: "Futkibaari Government Primary School",
			},
		],
		scholarshipNum: 2,
	},
	{
		id: 6,
		name: "rabeya",
		countryImgSrc: "https://flagicons.lipis.dev/flags/4x3/gb.svg",
		students: [
			{
				imgSrc: "/images/ht1.jpeg",
				name: "Mosammot Shuborna, Class 3",
				school: "Futkibaari Government Primary School",
			},
		],
		scholarshipNum: 2,
	},
	{
		id: 7,
		name: "shimul",
		countryImgSrc: "https://flagicons.lipis.dev/flags/4x3/us.svg",
		students: [
			{
				imgSrc: "/images/ht1.jpeg",
				name: "Mosammot Shuborna, Class 3",
				school: "Futkibaari Government Primary School",
			},
			{
				imgSrc: "/images/ht2.jpeg",
				name: "Mosammot Shuborna, Class 3",
				school: "Futkibaari Government Primary School",
			},
		],
		scholarshipNum: 2,
	},
	{
		id: 8,
		name: "rabeya",
		countryImgSrc: "https://flagicons.lipis.dev/flags/4x3/gb.svg",
		students: [
			{
				imgSrc: "/images/ht1.jpeg",
				name: "Mosammot Shuborna, Class 3",
				school: "Futkibaari Government Primary School",
			},
		],
		scholarshipNum: 2,
	},
	{
		id: 9,
		name: "pinku",
		countryImgSrc: "https://flagicons.lipis.dev/flags/4x3/bd.svg",
		students: [
			{
				imgSrc: "/images/ht1.jpeg",
				name: "Mosammot Shuborna, Class 3",
				school: "Futkibaari Government Primary School",
			},
			{
				imgSrc: "/images/ht2.jpeg",
				name: "Mosammot Shuborna, Class 3",
				school: "Futkibaari Government Primary School",
			},
		],
		scholarshipNum: 2,
	},
];

const Community = () => {
	const [testArr, setTestArr] = useState(testimonials);
	const handleArray = () => {
		const newTestimonials = testimonials.slice(0, 3);
		setTestArr([...testArr, ...newTestimonials]);
	};
	return (
		<div className='w-full flex flex-col items-center justify-center mt-10'>
			<div className='w-[300px] md:w-[600px] text-center'>
				<h1 className=' text-2xl   text-green-500'>#alteryouthrevolution</h1>
				<h1 className='heading'>The Scholarship Community</h1>
				<p className='paragraph'>
					Despite public primary schools being free of cost in Bangladesh,
				</p>
				<p>
					many students still{" "}
					<span className='font-bold'>drop out of school</span> to work and earn
					in order to support their families. Your scholarship helps a child
					attend school and support their families at the same time.
				</p>
			</div>

			{/* Testimonial */}
			<div className='w-full flex flex-wrap gap-3 items-center justify-center'>
				{testArr.map(({ id, name, countryImgSrc, students }) => (
					<Testimonial
						key={id}
						name={name}
						countryImgSrc={countryImgSrc}
						students={students}
					/>
				))}
			</div>

			<button
				onClick={handleArray}
				className='bg-transparent text-green-500 font-bold mt-5'
			>
				see more
			</button>
		</div>
	);
};

export default Community;

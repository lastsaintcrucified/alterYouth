"use client";
import Image from "next/image";
import React from "react";
import DisabledFather from "../../public/icons/DisabledFather";
import SingleMother from "../../public/icons/SingleMother";
import Orphan from "../../public/icons/Orphan";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

const images = [
	{
		id: 1,
		src: (
			<DisabledFather
				width={60}
				height={60}
			/>
		),
		tag: "Disabled Father",
		desc: "Student's father is physically unable to work",
	},
	{
		id: 2,
		src: (
			<SingleMother
				width={60}
				height={60}
			/>
		),
		tag: "Single Mother",
		desc: "Student's father is deceased or has abandoned the family",
	},
	{
		id: 3,
		src: (
			<Orphan
				width={60}
				height={60}
			/>
		),
		tag: "Orphan",
		desc: "Both parents are deceased or have abandoned the child",
	},
];

const Eligibility = () => {
	return (
		<div className='w-full flex flex-col items-center justify-center mt-10'>
			<div className='w-[300px] md:w-[650px] text-center'>
				<h1 className='heading'>Scholarship Eligibility</h1>
				<p className='paragraph'>
					Only students who are currently enrolled in Government Primary Schools
					and fall
				</p>
				<p>
					under any of the following criteria are eligible to apply for
					scholarships
				</p>
			</div>
			<div className='mt-10 flex flex-wrap gap-1 items-center justify-evenly'>
				{images.map(({ id, src, tag, desc }) => (
					<div
						key={id}
						className='card w-full '
					>
						<div className='p-3 flex  items-center gap-8 justify-center lg:justify-between'>
							{src}
							<div className='flex flex-col items-start justify-center'>
								<h2 className='tag text-lg'>{tag}</h2>
								<span className='gray_tag text-black'>{desc}</span>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className='w-full h-ull gap-6 flex flex-col  md:flex-row md:justify-between my-12 p-10 '>
				{/* 3 div album */}
				<div className='relative rounded-lg w-full md:w-1/3 h-[500px] overflow-clip'>
					<div className='relative w-full h-full transition-transform duration-700 ease-out bg-[url("../public/images/headteacher.jpg")] bg-cover bg-center hover:scale-110'></div>

					<div className='absolute top-0 left-4 flex flex-col items-start justify-normal'>
						<h1 className='text-white heading'>Are you a teacher?</h1>
						<h1 className='text-white heading'>Get your students</h1>
						<h1 className='text-white heading'>listed on the</h1>
						<h1 className='text-white heading'>platform</h1>

						<div className='mt-5 flex items-center justify-center gap-2 text-center'>
							<a className='font-semibold text-[18px] text-white text-center underline hover:cursor-pointer'>
								Download the school app
							</a>
							<ArrowRightIcon
								width={25}
								height={25}
								color='white'
							/>
						</div>
					</div>
					<span className='absolute bottom-2 left-4 tag_gray text-xs text-white'>
						Only for Government Primary School Bangladesh
					</span>
				</div>
				<div className='relative rounded-lg w-full md:w-1/3 h-[500px] overflow-clip'>
					<div className='relative w-full h-full transition-transform duration-700 ease-out bg-[url("../public/images/person.jpg")] bg-cover bg-center hover:scale-110'></div>

					<div className='absolute top-0 left-4 flex flex-col items-start justify-normal'>
						<h1 className='text-white heading'>You can be</h1>
						<h1 className='text-white heading'>anywhere</h1>
						<h1 className='text-white heading'>in the world</h1>

						<div className='mt-5 flex items-center justify-center gap-2 text-center'>
							<a className='font-semibold text-[18px] text-white text-center underline hover:cursor-pointer'>
								See all scholarships
							</a>
							<ArrowRightIcon
								width={25}
								height={25}
								color='white'
							/>
						</div>
					</div>
					<span className='absolute bottom-2 left-4 tag_gray text-xs text-white'>
						Only for Government Primary School Bangladesh
					</span>
				</div>
				<div className='relative rounded-lg w-full md:w-1/3 h-[500px] overflow-clip'>
					<div className='relative w-full h-full transition-transform duration-700 ease-out bg-[url("../public/images/applicant.jpg")] bg-cover bg-center hover:scale-110'></div>

					<div className='absolute top-0 left-4 flex flex-col items-start justify-normal'>
						<h1 className='text-white heading'>While students</h1>
						<h1 className='text-white heading'>get closer to</h1>
						<h1 className='text-white heading'>their dreams</h1>

						<div className='mt-5 flex items-center justify-center gap-2 text-center'>
							<a className='font-semibold text-[18px] text-white text-center underline hover:cursor-pointer'>
								See all graduates
							</a>
							<ArrowRightIcon
								width={25}
								height={25}
								color='white'
							/>
						</div>
					</div>
					<span className='absolute bottom-2 left-4 tag_gray text-xs text-white'>
						Only for Government Primary School Bangladesh
					</span>
				</div>
			</div>
		</div>
	);
};

export default Eligibility;

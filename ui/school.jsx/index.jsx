import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import Image from "next/image";
import { MapPinIcon } from "@heroicons/react/20/solid";

const images = [
	{
		id: 1,
		imgSrc: "/images/school1.jpeg",
		imgAlt: "nice",
		name: "Birabo Government Primary School",
		loc: "Bhalabo,Bangladesh",
	},
	{
		id: 2,
		imgSrc: "/images/school2.jpeg",
		imgAlt: "nice",
		name: "Agla Government Primary School",
		loc: "Koyetpara, Bangladesh",
	},
	{
		id: 3,
		imgSrc: "/images/school3.jpeg",
		imgAlt: "nice",
		name: "Kanchan Government Primary School",
		loc: "Kanchan, Bangladesh",
	},
	{
		id: 4,
		imgSrc: "/images/school4.jpeg",
		imgAlt: "nice",
		name: "Dudpur Government Primary School",
		loc: "Daudpur, Bangladesh",
	},
	{
		id: 5,
		imgSrc: "/images/school5.jpeg",
		imgAlt: "nice",
		name: "Kendua Government Primary School",
		loc: "Kendua, Bnagladesh",
	},
	{
		id: 6,
		imgSrc: "/images/school6.jpeg",
		imgAlt: "nice",
		name: "Deboi Government Primary School",
		loc: "Deboi, Bnagladesh",
	},
	{
		id: 7,
		imgSrc: "/images/school7.jpeg",
		imgAlt: "nice",
		name: "Deboi Government Primary School",
		loc: "Deboi, Bnagladesh",
	},
];

const School = () => {
	return (
		<>
			<div className='flex flex-col w-full text-justify mt-20 px-5 lg:w-[1000px]'>
				<h1 className='heading'>
					Students from Government Primary Schools Nationwide
				</h1>
			</div>
			<div className='w-full  mt-10  '>
				<Swiper
					slidesPerView={4}
					spaceBetween={30}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination]}
					className='mySwiper'
					loop={true}
				>
					{images.map(({ id, imgSrc, imgAlt, name, loc }) => (
						<SwiperSlide key={id}>
							<div className='flex flex-col items-start justify-center'>
								<Image
									src={imgSrc}
									alt={imgAlt}
									width={0}
									height={0}
									sizes='100%'
									style={{
										minWidth: "100%",
										maxWidth: "100%",
										minHeight: "100%",
										maxHeight: "100%",
										objectFit: "cover",
										boxSizing: "border-box",
										borderRadius: "2%",
									}}
								/>
								<h2 className='tag mt-2'>{name}</h2>
								<div className='mt-2 flex items-center justify-start text-center gap-2'>
									<MapPinIcon className='text-green-500 w-4 h-4' />
									<span className='gray_tag'>{loc}</span>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	);
};
export default School;

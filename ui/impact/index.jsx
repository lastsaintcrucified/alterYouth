"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import Image from "next/image";

const images = [
	{ id: 1, imgSrc: "/images/community_1.jpg", imgAlt: "nice" },
	{ id: 2, imgSrc: "/images/community_2.jpg", imgAlt: "nice" },
	{ id: 3, imgSrc: "/images/community_3.jpg", imgAlt: "nice" },
	{ id: 4, imgSrc: "/images/community_4.jpg", imgAlt: "nice" },
	{ id: 5, imgSrc: "/images/community_5.jpg", imgAlt: "nice" },
	{ id: 6, imgSrc: "/images/community_6.jpg", imgAlt: "nice" },
	{ id: 7, imgSrc: "/images/community_7.jpg", imgAlt: "nice" },
	{ id: 8, imgSrc: "/images/community_8.jpg", imgAlt: "nice" },
	{ id: 9, imgSrc: "/images/community_9.jpg", imgAlt: "nice" },
	{ id: 10, imgSrc: "/images/community_10.jpg", imgAlt: "nice" },
	{ id: 11, imgSrc: "/images/community_11.jpg", imgAlt: "nice" },
	{ id: 12, imgSrc: "/images/community_12.jpg", imgAlt: "nice" },
	{ id: 13, imgSrc: "/images/community_13.jpg", imgAlt: "nice" },
	{ id: 14, imgSrc: "/images/community_14.jpg", imgAlt: "nice" },
	{ id: 15, imgSrc: "/images/community_15.jpg", imgAlt: "nice" },
	{ id: 16, imgSrc: "/images/community_16.jpg", imgAlt: "nice" },
	{ id: 17, imgSrc: "/images/community_17.jpg", imgAlt: "nice" },
	{ id: 18, imgSrc: "/images/community_18.jpg", imgAlt: "nice" },
];

const Impact = () => {
	return (
		<>
			<div className='flex flex-col w-full text-justify mt-20 px-5 lg:w-[1000px]'>
				<h1 className='heading'>Community Impact</h1>
				<p className='paragraph'>
					Every scholarship begins with shipping a mobile phone to the parent of
					the student. Then they create their own mobile bank account using that
					phone, to start receiving their child's scholarships directly, every
					month.
				</p>
			</div>
			<div className='w-full  mt-10  '>
				<Swiper
					navigation={true}
					loop={true}
					modules={[Navigation]}
					className='mySwiper'
					slidesPerView={4}
					centeredSlides={false}
					slidesPerGroupSkip={1}
					grabCursor={true}
					keyboard={{
						enabled: true,
					}}
				>
					{images.map(({ id, imgSrc, imgAlt }) => (
						<SwiperSlide key={id}>
							<Image
								src={imgSrc}
								alt={imgAlt}
								width={0}
								height={0}
								sizes='100vw'
								style={{ width: "100%", height: "auto" }}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	);
};
export default Impact;

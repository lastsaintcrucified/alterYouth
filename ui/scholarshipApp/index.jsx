"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Video from "next-video";
import awesomeVideo from "../../videos/ay_explainer.mp4";
import awesomePoster from "/public/images/ay_video_poster.jpg";
import { PlayIcon } from "@heroicons/react/20/solid";

const ScholarshipApp = () => {
	const videoRef = useRef(null);
	const [isVideoVisible, setIsVideoVisible] = useState(false);

	const handlePlayVideo = () => {
		setIsVideoVisible(true); // Show the video
		if (videoRef.current) {
			videoRef.current.play();
			if (videoRef.current.requestFullscreen) {
				videoRef.current.requestFullscreen();
			} else if (videoRef.current.webkitRequestFullscreen) {
				videoRef.current.webkitRequestFullscreen();
			} else if (videoRef.current.mozRequestFullScreen) {
				videoRef.current.mozRequestFullScreen();
			} else if (videoRef.current.msRequestFullscreen) {
				videoRef.current.msRequestFullscreen();
			}
		}
	};
	return (
		<div className='w-1vw h-[800px] md:h-[650px] p-5  flex flex-col md:flex-row gap-3 items-center justify-between'>
			<div className='md:w-1/2 md:p-10 p-0 w-full flex flex-col md:flex-row items-center justify-center '>
				<h1 className='heading md:hidden mb-10'>The scholarship app</h1>
				{!isVideoVisible && (
					<div className='relative cursor-pointer overflow-clip rounded-xl'>
						<Image
							src={awesomePoster}
							alt='Video Poster'
							className='relative transition-transform duration-700 ease-out hover:scale-110'
							style={{ width: "100%", height: "auto" }}
							onClick={handlePlayVideo}
						/>
						<button
							onClick={handlePlayVideo}
							className='px-[30px] py-[30px] absolute top-[40%] left-[40%] rounded-full -translate-x-0.5 -translate-y-0.5 cursor-pointer bg-black/50  text-white border-none text-[16px]'
						>
							<PlayIcon
								color='white'
								width={40}
								height={40}
							/>
						</button>
					</div>
				)}

				<Video
					ref={videoRef}
					src={awesomeVideo}
					controls
					style={{ display: isVideoVisible ? "block" : "none", width: "100%" }}
				/>
			</div>
			<div className='md:w-1/2 md:p-10 p-0 mt-10 md:mt-0 flex flex-col items-center md:items-start justify-center text-center md:text-left '>
				<h1 className='heading hidden md:block'>The scholarship app</h1>
				<p className='mt-5 leading-7'>
					In Bangladesh, while 98% of children enroll in school, 2 million
					children drop out to work before achieving literacy in order to
					support their families financially. On the flipside, Bangladesh has a
					diaspora population of 10 million in advanced economies who wish to
					make an impact on their homeland. AlterYouth, imagine Uber for
					scholarships, is a C2C scholarship app enabling users from around the
					world to start scholarships directly for financially struggling
					students in Government Primary Schools of Bangladesh, through digital
					banking.
				</p>
			</div>
		</div>
	);
};

export default ScholarshipApp;

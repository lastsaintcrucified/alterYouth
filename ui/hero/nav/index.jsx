"use client";
import React from "react";
import Logo1 from "../../../public/icons/LogoAy1";
import Logo2 from "../../../public/icons/LogoAy2";
import { Bars3Icon } from "@heroicons/react/20/solid";

const Nav = ({ toggleBar, scrolled }) => {
	return (
		<header
			className={`h-16 w-full sticky z-20 top-0 ${
				scrolled ? "bg-white" : "bg-transparent"
			} transition-all  ease-in-out`}
		>
			<div className=' flex items-center justify-between'>
				<div className='flex items-center gap-2 px-4'>
					<Bars3Icon
						onClick={() => toggleBar(false)}
						className={`size-6 ${
							scrolled ? "text-green-500" : "text-white"
						}  hover:cursor-pointer`}
					/>

					<Logo1
						width={200}
						height={60}
						className='cursor-pointer'
						color={`${scrolled ? "#4CAF50" : "white"}`}
					/>
				</div>
				{/* SideBar */}

				{/* Navbar */}
				<nav
					className={`hidden md:flex gap-6 items-center  ${
						scrolled ? "text-green-500" : "text-white"
					} px-5 font-bold`}
				>
					<a href='#About'>About</a>
					<a href='#HowWork'>How it works</a>
					<a href='#Scholarships'>Scholarships</a>
					<a href='#Collaborate'>Collaborate</a>
					<a href='#Login'>Log in</a>
				</nav>
			</div>
		</header>
	);
};

export default Nav;

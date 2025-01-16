import React, { useState } from "react";
import Nav from "./nav";
import Card from "./card";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { IoMdClose } from "react-icons/io";
import { HomeIcon } from "@heroicons/react/20/solid";
import {
	InformationCircleIcon,
	NewspaperIcon,
	QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import { LuHeartHandshake } from "react-icons/lu";
import { DevicePhoneMobileIcon } from "@heroicons/react/24/outline";
import { AiOutlineLogin } from "react-icons/ai";
const Hero = ({ toggleCollapse, handleBarCollapse }) => {
	const [collapsed, setCollapsed] = useState(true);

	const [toggled, setToggled] = useState(false);

	const handleCollapsedChange = () => {
		setCollapsed(!collapsed);
	};
	const handleToggleSidebar = (value) => {
		setToggled(value);
	};

	return (
		<section className='z-10 -mt-16 pb-20 md:pb-10  overflow-x-clip bg-[url("../public/images/hero_pc.jpg")] bg-cover bg-center '>
			<Sidebar
				collapsedWidth='0px'
				className='bg-white'
				style={{ height: "100%", position: "fixed", zIndex: "999" }}
				collapsed={toggleCollapse}
				toggled={toggled}
				handleToggleSidebar={handleToggleSidebar}
				handleCollapsedChange={handleCollapsedChange}
			>
				<Menu>
					<MenuItem className='flex items-center justify-end'>
						<IoMdClose
							className=' text-green-400 text-3xl cursor-pointer'
							onClick={() => handleBarCollapse(!toggleCollapse)}
						/>
					</MenuItem>
				</Menu>
				<Menu
					menuItemStyles={{
						root: () => {
							return {
								flexDirection: "column",
								alignItems: "start",
								paddingLeft: "1rem",
							};
						},
						button: ({ level, active, disabled }) => {
							// only apply styles on first level elements of the tree

							return {
								color: "gray",
								backgroundColor: active ? "#eecef9" : undefined,
							};
						},
					}}
				>
					<MenuItem
						icon={<HomeIcon className='w-5 h-5' />}
						className='menuItem'
					>
						Home
					</MenuItem>
					<MenuItem
						icon={<QuestionMarkCircleIcon className='w-5 h-5' />}
						className='menuItem'
					>
						How it works
					</MenuItem>
					<MenuItem
						icon={<InformationCircleIcon className='w-5 h-5' />}
						className='menuItem'
					>
						About
					</MenuItem>
					<MenuItem
						icon={<LuHeartHandshake className='w-5 h-5' />}
						className='menuItem'
					>
						Collaborate
					</MenuItem>
					<MenuItem
						icon={<NewspaperIcon className='w-5 h-5' />}
						className='menuItem'
					>
						Scholarship policy
					</MenuItem>
					<MenuItem
						icon={<DevicePhoneMobileIcon className='w-5 h-5' />}
						className='menuItem'
					>
						Get in touch
					</MenuItem>
					<MenuItem
						icon={<AiOutlineLogin className='w-5 h-5' />}
						className='menuItem'
					>
						Log in
					</MenuItem>
				</Menu>
			</Sidebar>
			;
			<div className='w-full p-20 md:py-0  px-20 md:px-10 lg:px-20 flex flex-col items-center justify-center md:flex-row md:justify-between'>
				<div className='w-80 text-center md:text-left ml-0 lg:ml-10'>
					<h1 className=' text-6xl md:leading-[60px] font-bold tracking-wide text-white '>
						Start your scholarship
					</h1>
					<p className='mt-4 text-[18px] leading-7 text-white'>
						Directly for students in Government Primary Schools throughout
						Bangladesh
					</p>
				</div>
				<Card />
			</div>
		</section>
	);
};

export default Hero;

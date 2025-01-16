"use client";
import React, { useEffect, useState } from "react";
import Hero from "../../ui/hero";
import Scholarship from "../../ui/scholarship";
import MobileMock from "../../ui/mobileMock";
import Community from "../../ui/community";
import Impact from "../../ui/impact";
import School from "../../ui/school.jsx";
import Eligibility from "../../ui/eligibility/index.jsx";
import ScholarshipApp from "../../ui/scholarshipApp/index.jsx";
import Association from "../../ui/association/index.jsx";
import Footer from "../../ui/footer/index.jsx";
import Nav from "../../ui/hero/nav/index.jsx";

const Home = () => {
	const [toggleCollapse, setToggleCollapse] = useState(true);
	const [isPageScrolled, setIsPageScrolled] = useState(false);

	// Hendle sidebar toggle
	const handleNavChange = (bool) => {
		setToggleCollapse(bool);
		// console.log("sdfgds");
	};
	// Hendle sidebar toggle
	const handleCollapseChange = (collapse) => {
		setToggleCollapse(collapse);
	};
	// check scroll
	useEffect(() => {
		const checkScroll = () => {
			setIsPageScrolled(window.scrollY !== 0);
			// console.log(window.scrollY);
		};
		window.addEventListener("scroll", checkScroll);

		// cleanup function
		return () => {
			window.removeEventListener("scroll", checkScroll);
		};
	}, [isPageScrolled]);
	return (
		<div className='w-full h-auto'>
			<Nav
				toggleBar={(bool) => handleNavChange(bool)}
				scrolled={isPageScrolled}
			/>
			<Hero
				toggleCollapse={toggleCollapse}
				handleBarCollapse={(collapse) => handleCollapseChange(collapse)}
			/>
			<Scholarship />
			<MobileMock />
			<Community />
			<Impact />
			<School />
			<Eligibility />
			<ScholarshipApp />
			<Association />
			<Footer />
		</div>
	);
};

export default Home;

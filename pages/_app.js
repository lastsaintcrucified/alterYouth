import "../styles/globals.css";
import "react-phone-number-input/style.css";
import "swiper/css";
import "../styles/swiperStyle.css";

import { DM_Sans } from "next/font/google";
import { useEffect } from "react";

function MyApp({ title, Component, pageProps }) {
	useEffect(() => {
		document.title = "Alteryouth | Towards a literate bangladesh";
	}, [title]);
	return <Component {...pageProps} />;
}

export default MyApp;

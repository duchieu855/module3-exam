// import React from 'react'

import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import TopBar from "../topbar/TopBar";

const HomePage = () => {
	return (
		<>
			<div className="bg-[#8077B1]">
				<Header />
			</div>
			<div className="bg-white">
				<TopBar />
			</div>
			<div className="my-4">
				<Outlet />
			</div>
		</>
	);
};

export default HomePage;

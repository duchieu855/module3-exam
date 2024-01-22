// import React from "react";

import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/hook";
import ShoppingCartIcon from "./icon/ShoppingCartIcon";

// type Props = {};

const TopBar = () => {
	const counter = useAppSelector((state) => state.counter.value);
	return (
		<div className="flex-col space-y-4 justify-between items-center px-14  py-4  border">
			<h2 className="text-gray-500 text-2xl">Issue Book</h2>
			<div className="flex justify-between ">
				<Link to="createbookform">
					<button
						type="button"
						className="px-2 py-1 bg-[#8077B1] text-white rounded-md"
					>
						+ Create
					</button>
				</Link>
				<Link
					to="shoppingcart"
					className="relative bg-[#8077B1] p-[10px] text-white rounded-md"
				>
					<div>
						<ShoppingCartIcon />
					</div>
					<span className="absolute right-[1px] bottom-[-11px] text-white bg-[#8077B1] rounded-lg">
						{counter}
					</span>
				</Link>
			</div>
		</div>
	);
};

export default TopBar;

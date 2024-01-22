// import React from 'react'

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook";
// import axios from "axios";

// type Props = {}

const ShoppingCartPage = () => {
	const dataProducts = useAppSelector((state) => state.shoppingCart);

	return (
		<>
			<div className="grid grid-flow-row grid-cols-4 gap-x-2 gap-y-4 w-[1200px] mx-auto">
				{dataProducts?.map((item) => {
					return (
						<div
							key={item.id}
							className="p-1 relative flex border rounded-lg bg-slate-200"
						>
							<div className="basis-1/3 ">
								<img
									src={item.thumbnail}
									alt="image-book"
									className="w-full h-full"
								/>
							</div>
							<div className="text-black px-2 py-1 bg-slate-200 rounded-md flex flex-col items-start space-y-1 basis-2/3">
								<span>{item.name}</span>
								<span>{item.description}</span>
								<span>Issue: {item.createdAt}</span>
								<span> {item.author}</span>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default ShoppingCartPage;

import { useEffect, useState } from "react";
import { addToCart } from "../shoppingcart/ShoppingCartSlice";
import { incrementByAmount } from "./counter/counterSlice";
import classNames from "classnames";
import { fetchListBooks } from "./counter/fetchBooksList";
import { useAppDispatch, useAppSelector } from "../../store/hook";

const Container = () => {
	const data = useAppSelector((state) => state.fetchProductList);
	let dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchListBooks());
	}, []);

	return (
		<div className="grid grid-flow-row grid-cols-4 gap-x-2 gap-y-4 w-[1200px] mx-auto">
			{data?.map((item) => (
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
					<button
						type="button"
						className={classNames({
							"p-[1px] absolute right-1 top-1 text-xs bg-blue-500 rounded-sm text-white":
								true,
						})}
						onClick={() => {
							dispatch(incrementByAmount(1));
							dispatch(addToCart(item));
							
						}}
					>
						Returned
					</button>
				</div>
			))}
		</div>
	);
};

export default Container;

import React, { useState } from "react";
import { Input } from "./Field_Input";

import { useForm, FormProvider } from "react-hook-form";
import {
	desc_validation,
	name_validation,
	author_validation,
	thumbnail_validation,
} from "./inputValidation";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hook";
import { postNewBook } from "./createNewBookSlice";

interface StyleNewBook {
	name: string;
	thumbnail: string;
	description: string;
	author: string;
	createdAt: string;
}

const BookApp = () => {
	const dispatch = useAppDispatch();
	const methods = useForm();
	const navigate = useNavigate();
	const [success, setSuccess] = useState(false);
	const { handleSubmit, reset } = methods;
	console.log("methods", methods);

	const onSubmit = (data: StyleNewBook) => {
		dispatch(postNewBook(data));
		setSuccess(true);
		reset();
		navigate("/container");
	};
	return (
		<FormProvider {...methods}>
			<form
				onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
				noValidate
				className="container mx-auto"
				autoComplete="off"
				id="book"
			>
				<div className="grid gap-5 md:grid-cols-2">
					<Input {...name_validation} />
					<Input {...author_validation} />
					<Input {...thumbnail_validation} />
					<Input {...desc_validation} />
				</div>
				<div className="mt-5">
					{success && (
						<p className="flex items-center gap-1 mb-5 font-semibold text-green-500">
							Form has been submitted successfully
						</p>
					)}
					<button
						type="submit"
						// eslint-disable-next-line @typescript-eslint/no-misused-promises
						onClick={handleSubmit(onSubmit)}
						className="flex items-center gap-1 p-5 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-800"
					>
						Create
					</button>
				</div>
			</form>
		</FormProvider>
	);
};

export default BookApp;

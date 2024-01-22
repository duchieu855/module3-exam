import { Navigate, createBrowserRouter } from "react-router-dom";

import ShoppingCartPage from "../component/shoppingcart/ShoppingCartPage";
import Container from "../component/listbooks/Container";
import HomePage from "../component/homepage/HomePage";
import CreateBookForm from "../component/createForm/CreateBookForm";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
		children: [
			{ index: true, element: <Navigate to="/container" replace /> },
			{
				path: "container",
				element: <Container />,
			},
			{
				path: "shoppingcart",
				element: <ShoppingCartPage />,
			},
			{
				path: "createbookform",
				element: <CreateBookForm />,
			},
		],
	},
]);
